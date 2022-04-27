import { writable, readable } from 'svelte/store';

export const theme = writable('light');

/*
 * the different data sources are
 * - Geocode           Used to get user location based on coordinates, this is needed for METNor data.
 * - METNor (Yr)       Earth weather
 * - USNOAA (Nasa ish) Space weather, Aurora info
 *
 * The methots here does exit early if the code is running server-side and not
 * in the browser. This is to attempt to fix.
 **/
const base_attributes = {"updated": false, "updating": true}
export const navigator_location = writable({...base_attributes, "available": false, "longitude": null, "latitude": null, "city": null});
export const earth_weather      = writable({...base_attributes, "available": false});
export const space_weather      = writable({...base_attributes});

// Kickstart store updates
updateNavigatorLocation();
navigator_location.subscribe(updateEarthWeather);
updateSpaceWeather();

/**
 * Will update the store "navigator_location" with the users geolocation if 
 * possible.
 */
async function updateNavigatorLocation() {
    if(typeof window === "undefined") { return; }
    setUpdated(navigator_location, true);

    let coords;
    try {
        coords = await getBrowserGeolocation();
    } catch (e) {
        console.log(e);
        navigator_location.update(v => ({...v, "available": false, "city": null, "longitude": null, "latitude": null}));
        setUpdated(navigator_location, false);
        return;
    }

    let res = await fetch(`https://geocode.xyz/${coords.latitude},${coords.longitude}?geoit=json`);
    let locDat = await res.json();
    navigator_location.update(v => ({...v, "available": true, "city": locDat["city"], ...coords}));

    setUpdated(navigator_location, false);
}

/**
 * Wraps navigator.geolocation in a promise, this promise will be rejected if
 * code is not run in a browser.
 */
async function getBrowserGeolocation() {
    return new Promise((resolve, reject) => {
        if (typeof navigator !== "undefined") {
            navigator.geolocation.getCurrentPosition(
                position => {
                    resolve({
                        "longitude": position.coords.longitude,
                        "latitude":  position.coords.latitude
                    });
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(Error());
        }
    });
}

/**
 * Update the "earth_weather" store with weather information about earth :)
 */
async function updateEarthWeather(location=null) {
    if (typeof window === "undefined") { return; }
    if (location === null) { return; }
    if (location.updating) { return; }
    if (!location.available) {
        earth_weather.update(v => ({
            ...v,
            "available": false
        }));
        setUpdated(earth_weather, false);
        return;
    }
    setUpdated(earth_weather, true);

    let res = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${location.latitude}&lon=${location.longitude}`);
    let yr_data = await res.json();
    let current_weather = {"clouds": null, "temp": null}
    try {
        // @TODO: Make a similar thing as for kp-index to get the closest time to now.
        current_weather.clouds = yr_data["properties"]["timeseries"][0]["data"]["instant"]["details"]["cloud_area_fraction"];
        current_weather.temp = yr_data["properties"]["timeseries"][0]["data"]["instant"]["details"]["air_temperature"];

        yr_data["properties"]["timeseries"] = yr_data["properties"]["timeseries"].map(x => ({...x, "time": new Date(x.time)}));
    } catch (e) {}

    earth_weather.update(v => ({
        ...v,
        "yr_data_raw": yr_data,
        "now": current_weather,
        "available": true
    }));

    setUpdated(earth_weather, false);
}

/**
 * This will update the "space_weather" store with the newest data.
 */
async function updateSpaceWeather() {
    if(typeof window === "undefined") { return; }
    setUpdated(space_weather, true);
    let spaceWeather = await getSpaceWeather();
    space_weather.update(v => ({...v, ...spaceWeather}));
    setUpdated(space_weather, false);
}

/**
 * This will return all the data we are interested in for the space weather
 * store.
 */
async function getSpaceWeather() {
    let ret = {
        "now": {
            "bz": "-",
            "bt": "-",
            "kp": "-",
            "kp_min": "-",
            "kp_max": "-"
        },
        "usnoaa_data_raw": {
            "solar_wind_mag_field": false,
            "noaa_planetary_k_index_forecast": false,
            "geospace_pred_est_kp_1_hour": false
        }
    };

    let res = await fetch("https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json");
    ret.usnoaa_data_raw.solar_wind_mag_field = await res.json();
    ret.usnoaa_data_raw.solar_wind_mag_field.TimeStamp = new Date(ret.usnoaa_data_raw.solar_wind_mag_field.TimeStamp + " UTC");
    ret.now.bz = ret.usnoaa_data_raw.solar_wind_mag_field["Bz"];
    ret.now.bt = ret.usnoaa_data_raw.solar_wind_mag_field["Bt"];

    res = await fetch("https://services.swpc.noaa.gov/json/geospace/geospace_pred_est_kp_1_hour.json");
    ret.usnoaa_data_raw.geospace_pred_est_kp_1_hour = (await res.json()).map(x => ({...x, "model_prediction_time": new Date(x.model_prediction_time)}));

    res = await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json")
    ret.usnoaa_data_raw.noaa_planetary_k_index_forecast = await res.json();
    ret.usnoaa_data_raw.noaa_planetary_k_index_forecast.shift();

    let cDate = new Date();
    let closestDate = new Date(0,0,0);
    let minkp = 1000; // Just a larger number than any plausable value
    let maxkp = 0;

    ret.usnoaa_data_raw.noaa_planetary_k_index_forecast.forEach((pred, i) => {
        if (pred[1] > maxkp) {
            maxkp = pred[1];
        }
        if (pred[1] < minkp) {
            minkp = pred[1];
        }
        
        let predDate = new Date(pred[0] + " UTC");

        if (Math.abs(predDate.getTime() - cDate.getTime()) < Math.abs(closestDate.getTime() - cDate.getTime())) {
            closestDate = predDate;
            ret.now.kp = pred[1];
        }

        ret.usnoaa_data_raw.noaa_planetary_k_index_forecast[i] = {
            "time": predDate, "kp": pred[1], "observed": pred[2]
        };
    });

    ret.now.kp_min = minkp.toString();
    ret.now.kp_max = maxkp.toString();

    console.log(ret);
    return ret;
}

/**
 * Sets the parameters of a store that has to do with the last update.
 * It is important that the store value is a object, which has at least the
 * attributes in the base_attributes constant.
 * @param {store}   s        The store that should be changed.
 * @param {boolean} updating Wether the store is currently in the process of
 *                           being updated.
 */
function setUpdated(s, updating=false) {
    let updated = updating ? {} : {"updated": (new Date())};
    s.update(v => ({
        ...v,
        ...updated,
        "updating": updating
    }));
}


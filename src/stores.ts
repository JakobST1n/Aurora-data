import { writable, readable, get } from 'svelte/store';
import { parseDateAsUTC } from './lib/DateUtils';

// Choose dark or light mode.
export const theme = writable('light');
function check_system_theme() {
    if (typeof window === "undefined") { return; }
    let system_theme = window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light";
    if (system_theme != get(theme)) { theme.set(system_theme); }
}
setInterval(check_system_theme, 1000);
theme.subscribe(value => {
    if (typeof window === "undefined") { return; }
    if (value == "dark") {
        window.document.body.classList.add("dark");
    } else {
        window.document.body.classList.remove("dark");
    }
});

/*
 * the different data sources are
 * - Geocode           Used to get user location based on coordinates, this is needed for METNor data.
 * - METNor (Yr)       Earth weather
 * - USNOAA (Nasa ish) Space weather, Aurora info
 *
 * The methots here does exit early if the code is running server-side and not
 * in the browser. This is to attempt to fix.
 **/
export const data_max_age = 60 * 5 * 1000; // 5 min
const base_attributes = {"updated": new Date(0,0,0), "updating": true};

let savedNavigatorLocation = getFromLocalstorage("navigator_location");
let savedEarthWeather = getFromLocalstorage("earth_weather");
let savedSpaceWeather = getFromLocalstorage("space_weather");
export const navigator_location = writable(
    isInLocalStorage("navigator_location") ?
    deserializeNavigatorLocation(savedNavigatorLocation) :
    {...base_attributes, "available": false, "longitude": null, "latitude": null, "city": null}
);
export const earth_weather = writable(
    isInLocalStorage("earth_weather") ?
    deserializeEarthWeather(savedEarthWeather) :
    {...base_attributes, "available": false}
);
export const space_weather = writable(
    isInLocalStorage("space_weather") ?
    deserializeSpaceWeather(savedSpaceWeather) :
    {...base_attributes}
);

// Kickstart store updates
updateNavigatorLocation();
navigator_location.subscribe(updateEarthWeather);
updateSpaceWeather();

setInterval(updateNavigatorLocation, data_max_age / 2);
setInterval(updateSpaceWeather, data_max_age / 2);

// Save data
function saveToLocalstorage(name, value) {
    if (typeof window === "undefined") { return; }
    localStorage.setItem(name, JSON.stringify(value));
}
function getFromLocalstorage(name) {
    if (typeof window === "undefined") { return undefined; }
    return JSON.parse(localStorage.getItem(name));
};
function isInLocalStorage(name) {
    if (typeof window === "undefined") { return false; }
    return localStorage.hasOwnProperty(name);
};
navigator_location.subscribe(v => saveToLocalstorage("navigator_location", v));
earth_weather.subscribe(v => saveToLocalstorage("earth_weather", v));
space_weather.subscribe(v => saveToLocalstorage("space_weather", v));

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
        if (get(navigator_location).available == false) { return; }
        console.log(e);
        navigator_location.update(v => ({...v, "available": false, "city": null, "longitude": null, "latitude": null}));
        setUpdated(navigator_location, false);
        return;
    }

    if (get(navigator_location).available && (Date.now() - get(navigator_location).updated < data_max_age)) { 
        setUpdated(navigator_location, false, false);
        return; 
    }

    let locDat = {"city": undefined};
    try {
        let res = await fetch(`https://geocode.xyz/${coords.latitude},${coords.longitude}?geoit=json`);
        locDat = await res.json();
    } catch (e) {
        console.log(e);
    }
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
    
    if (get(earth_weather).available && (Date.now() - get(earth_weather).updated < data_max_age)) { return; }

    setUpdated(earth_weather, true);

    let res = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${location.latitude}&lon=${location.longitude}`);
    let yr_data = await res.json();
    let current_weather = {"clouds": null, "temp": null}
    try {
        // @TODO: Make a similar thing as for kp-index to get the closest time to now.
        current_weather.clouds = yr_data["properties"]["timeseries"][0]["data"]["instant"]["details"]["cloud_area_fraction"];
        current_weather.temp = yr_data["properties"]["timeseries"][0]["data"]["instant"]["details"]["air_temperature"];

        yr_data["properties"]["timeseries"] = yr_data["properties"]["timeseries"].map(x => ({...x, "time": parseDateAsUTC(x.time)}));
    } catch (e) {
        console.error(e);
        setUpdated(earth_weather, false, false);
        return;
    }

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
    if (Date.now() - get(space_weather).updated < data_max_age) { return; }

    setUpdated(space_weather, true);
    let spaceWeather;
    try {
        spaceWeather = await getSpaceWeather();
    } catch (e) {
        console.error(e);
        setUpdated(space_weather, false, false);
        return;
    }
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
            "geospace_pred_est_kp_1_hour": false,
            "outlook_27_day": false
        }
    };

    let tmp;
    let res = await fetch("https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json");
    tmp = await res.json();
    tmp.TimeStamp = parseDateAsUTC(tmp.TimeStamp);
    ret.usnoaa_data_raw.solar_wind_mag_field = tmp;
    ret.now.bz = ret.usnoaa_data_raw.solar_wind_mag_field["Bz"];
    ret.now.bt = ret.usnoaa_data_raw.solar_wind_mag_field["Bt"];

    res = await fetch("https://services.swpc.noaa.gov/json/geospace/geospace_pred_est_kp_1_hour.json");
    tmp = await res.json();
    tmp = tmp.map(x => ({
        ...x, "model_prediction_time": parseDateAsUTC(x.model_prediction_time)
    }));
    ret.usnoaa_data_raw.geospace_pred_est_kp_1_hour = tmp

    res = await fetch("https://services.swpc.noaa.gov/text/27-day-outlook.txt");
    tmp = await res.text();
    tmp = [...tmp.matchAll(
        /^(?<time>\d{4}\s.{3}\s\d{2})\s+(?<flux107>\d+)\s+(?<aindex>\d+)\s+(?<kindex>\d+)$/gm
    )];
    tmp = tmp.map(x => ({...x.groups, "time": parseDateAsUTC(x.groups.time)}));
    ret.usnoaa_data_raw.outlook_27_day = tmp;

    res = await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json")
    tmp = await res.json();
    tmp.shift();
    ret.usnoaa_data_raw.noaa_planetary_k_index_forecast = tmp;

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
        
        let predDate = parseDateAsUTC(pred[0]);

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
function setUpdated(s, updating=false, updateTimestamp=true) {
    let updated = {};
    if (updateTimestamp && !updating) {
        updated = {"updated": (new Date())};
    }
    s.update(v => ({
        ...v,
        ...updated,
        "updating": updating
    }));
}

/**
 * Function that deserializes the navigator_location after it has been 
 * serialized with JSON.stringify
 * @param  {object} savedNavigatorLocation The serialized Object.
 * @return {object}                        The deserialized Object.
 */
function deserializeNavigatorLocation(savedNavigatorLocation) {
    savedNavigatorLocation.updated = new Date(savedNavigatorLocation.updated);
    return savedNavigatorLocation;
}

/**
 * Function that deserializes the earth_weather after it has been 
 * serialized with JSON.stringify
 * @param  {object} savedNavigatorLocation The serialized Object.
 * @return {object}                        The deserialized Object.
 */
function deserializeEarthWeather(savedEarthWeather) {
    let v = savedEarthWeather;
    v.updated = new Date(v.updated);
    v.yr_data_raw.properties.meta.updated_at = new Date(v.yr_data_raw.properties.meta.updated_at);
    v.yr_data_raw.properties.timeseries = v.yr_data_raw.properties.timeseries.map(x => ({
        ...x, "time": new Date(x.time)
    }));
    return v;
}

/**
 * Function that deserializes the space_weather after it has been 
 * serialized with JSON.stringify
 * @param  {object} SpaceWeather The serialized Object.
 * @return {object}              The deserialized Object.
 */
function deserializeSpaceWeather(savedSpaceWeather) {
    let v = savedSpaceWeather;
    v.updated = new Date(v.updated);
    v.usnoaa_data_raw.geospace_pred_est_kp_1_hour = v.usnoaa_data_raw.geospace_pred_est_kp_1_hour.map(x => ({
        ...x, "model_prediction_time": new Date(x.model_prediction_time)
    }));
    v.usnoaa_data_raw.noaa_planetary_k_index_forecast = v.usnoaa_data_raw.noaa_planetary_k_index_forecast.map(x => ({
        ...x, "time": new Date(x.time)
    }));
    v.usnoaa_data_raw.outlook_27_day = v.usnoaa_data_raw.outlook_27_day.map(x => ({
        ...x, "time": new Date(x.time)
    }));
    v.usnoaa_data_raw.solar_wind_mag_field.TimeStamp = new Date(v.usnoaa_data_raw.solar_wind_mag_field.TimeStamp);
    return v;
}

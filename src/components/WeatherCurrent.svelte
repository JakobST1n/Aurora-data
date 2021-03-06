<script lang="ts">
    import { onMount } from 'svelte';

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let longitude;
	let latitude;
	let locationSupported;
	let dataLoading = true;

    let location = "-";
    let date = "-";
    let kp_now = "-";
    let kp_min = "-";
    let kp_max = "-";
    let bz = "-";
    let clouds = "-";
    let temp = "-";

    async function getMETNorData(longitude, latitude) {
        let yr_data = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`).then(res => res.json());
        clouds = yr_data["properties"]["timeseries"][0]["data"]["instant"]["details"]["cloud_area_fraction"];
        temp =  yr_data["properties"]["timeseries"][0]["data"]["instant"]["details"]["air_temperature"];
    }

    async function getLocation(longitude, latitude) {
        console.log(`https://geocode.xyz/${longitude},${latitude}?geoit=json`);
        let locDat = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`).then(r => r.json());
        console.log(locDat);
        location = locDat["city"];
    }

    async function getUSNOAAData() {
        bz = (await fetch("https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json").then(res => res.json()))["Bz"];
        let kp_data = (await fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json').then(res => res.json()));
        kp_data.shift();

        let cDate = new Date();
        let closestDate = new Date(0,0,0);
        let minkp = 1000; // Just a larger number than any plausable value
        let maxkp = 0;

        kp_data.forEach((pred, i) => {
            if (pred[1] > maxkp) {
                maxkp = pred[1];
            }
            if (pred[1] < minkp) {
                minkp = pred[1];
            }
            let predDate = new Date(pred[0]);
            if (Math.abs(predDate.getTime() - cDate.getTime()) < Math.abs(closestDate.getTime() - cDate.getTime())) {
                closestDate = predDate;
                kp_now = pred[1];
            }
        });
        kp_min = minkp.toString();
        kp_max = maxkp.toString();

        date = closestDate.getDay() + ". " + monthNames[closestDate.getMonth()] + " " + closestDate.getHours() + ":" + closestDate.getMinutes();
    }

	function fetchData() {
        getUSNOAAData();

		if (navigator.geolocation) {
			dataLoading = true
			locationSupported = true
			navigator.geolocation.getCurrentPosition(setLocation, locationError)
		} else {
    		locationSupported = false
			noLocation()
		}
	}

	function setLocation(position) {
		longitude = position.coords.longitude
		latitude = position.coords.latitude
		getMETNorData(longitude, latitude)
        getLocation(longitude, latitude);
	}

	function locationError(err) {
		noLocation()
	}

	function noLocation() {
		longitude = 28.283333
		latitude = -15.416667
		toggleLoading()
	}
	function toggleLoading() {
		dataLoading = !dataLoading
	}

    onMount(fetchData);
</script>

<style>

    .weatherCurrent-wrapper {
        height: calc(100% + 2rem);
        align-self: stretch;
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        letter-spacing: 0.05em;
        --bg-opacity: 1;
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--bg-opacity));
        background:
            linear-gradient(
                rgba(0, 0, 0, 0.5),
                rgba(0, 0, 0, 0.5)
            ), url(/Aurora-data/aurora.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .weatherCurrent-data {
        width: 100%;
        padding: 1.5rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        --text-opacity: 1;
        color: #fff;
        color: rgba(255, 255, 255, var(--text-opacity));
        text-align: center;
        letter-spacing: 0.05em;
        text-shadow: 1px 1px 2px rgba(0,0,0,.75);
    }

    .weatherCurrent-data-location {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .weatherCurrent-data-location .symbol {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }


    .weatherCurrent-data-location h1 {
        text-transform: uppercase;
        font-family: Roboto Condensed, sans-serif;
        font-size: 1.125rem;
        letter-spacing: 0.1em;
        margin-bottom: 0;
    }

    .weatherCurrent-data-kp h2 {
        font-weight: 700;
        font-size: 3rem;
        letter-spacing: 0.05em;
        line-height: 1.25;
    }

    .current-details {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 1rem;
        gap: 1rem;
        padding-bottom: 1.5rem;
        text-shadow: 1px 1px 2px rgba(0,0,0,.75);
    }

    .current-details p {
        line-height: 1.375;
    }


</style>

<div class="weatherCurrent-wrapper">
    <div class="weatherCurrent-data">
        <div class="weatherCurrent-data-location">
            <i class="symbol fas fa-map-marker-alt"></i>
            <h1>{location}</h1>
        </div>

        <div class="weatherCurrent-data-date">
            <p>{date}</p>
        </div>

        <div class="weatherCurrent-data-kp">
            <h2>KP {kp_now}</h2>
            <p>
                <span className="pr-2">&uarr; KP {kp_max}</span>
                <span className="pl-2">&darr; KP {kp_min}</span>
            </p>
        </div>

        <div class="current-details">
            <div>
                <p>BZ</p>
                <p>{bz}</p>
            </div>
            <div>
                <p>Temp</p>
                <p>{temp}°C</p>
            </div>
            <div>
                <p>Clouds</p>
                <p>{clouds}%</p>
            </div>
        </div>

    </div>
</div>

<script lang="ts">
    import PredictedSpaceWeatherThing from './PredictedSpaceWeatherThing.svelte';
    import { onMount } from 'svelte';

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let longitude;
    let latitude;
    let locationSupported = false;
    let dataLoading = true;

    let predictions;

    async function getWeather(longitude, latitude) {
        let yr_data;
        if (locationSupported) {
            yr_data = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`).then(res => res.json());
        }
        let kp_data = await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json").then(res => res.json());
        kp_data.shift();

        let updatedPredictions = [];
        kp_data.forEach((pred, i) => {
            if (pred[2] != "observed") {
                let temp;
                let clouds;
                let cDate = new Date(pred[0]);
                let closestDate = new Date(0,0,0);

                if (locationSupported) {
                    yr_data["properties"]["timeseries"].forEach((pred, i) => {
                        let predDate = new Date(pred["time"]);
                        if (Math.abs(predDate.getTime() - cDate.getTime()) < Math.abs(closestDate.getTime() - cDate.getTime())) {
                            closestDate = predDate;
                            temp = (pred["data"]["instant"]["details"]["air_temperature"]);
                            clouds = pred["data"]["instant"]["details"]["cloud_area_fraction"];
                        }
                    });
                }

                updatedPredictions.push({
                    "time": pred[0],
                    "kp": pred[1],
                    "temp": temp,
                    "clouds": clouds,
                    "hasNOMETData": locationSupported
                });
            }
        });
        predictions = updatedPredictions;
    }

    function getLocation() {
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
        getWeather(longitude, latitude)
    }

    function locationError(err) {
        locationSupported = false
        noLocation()
    }

    function noLocation() {
        longitude = 28.283333
        latitude = -15.416667
        getWeather(0, 0);
        toggleLoading()
    }
    function toggleLoading() {
        dataLoading = !dataLoading
    }

    onMount(getLocation);
</script>

<style>
    .predicted-weather {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        --bg-opacity: 1;
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--bg-opacity));
        padding: 1.5rem;
        --text-opacity: 1;
        color: #1a202c;
        color: rgba(26, 32, 44, var(--text-opacity));
        height: 100%;
        overflow: hidden;
        align-self: stretch;
        box-shadow: 0px -6px 7px 0px black;
    }

    @media (min-width: 640px), (min-height: 720px) {
        .predicted-weather {
            padding: 2rem;
            padding-top: 1.5rem;
        }
    }

    @media (min-width: 640px) {
        .predicted-weather {
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }
    }

    .predicted-weather h2 {
        text-transform: uppercase;
        font-size: 0.875rem;
        letter-spacing: 0.1em;
        font-weight: 700;
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
    }

    .prediction-table {
        height: 100%;
        overflow-y: scroll;
        padding-bottom: 1rem;
    }

    .prediction-table::-webkit-scrollbar {
        display: none;
    }

    .no-data {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        color: grey;

    }

    .no-data {
        margin-top: 1rem;
    }
</style>

<div class="predicted-weather">
    {#if predictions}
    	<div className="flex flex-row justify-between items-top">
    		<h2>Predicted</h2>
    	</div>
        <div class="prediction-table">
            {#each predictions as prediction, i}
                <PredictedSpaceWeatherThing {prediction}/>
            {/each}
        </div>
    {:else}
        <div class="no-data">
            <i class="fas fa-7x fa-exclamation-triangle"></i>
            <p>No prediction data</p>
        </div>
    {/if}
</div>

<script lang="ts">
    // import { onMount } from 'svelte';
    import PredictedSpaceWeatherThing from './PredictedSpaceWeatherThing.svelte';

    let predictions;
    // async function haschange() {
    //     let data = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`).then(res => res.json());
    //     let data = await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json").then(res => res.json());
    //     data.shift();
    //     let updatedPredictions = [];
    //     data.forEach((pred, i) => {
    //         if (pred[2] != "observed") {
    //             updatedPredictions.push(pred);
    //         }
    //     });
    //     predictions = updatedPredictions;
    // }
    //
    // onMount(haschange);



    import { onMount } from 'svelte';
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let longitude;
    let latitude;
    let locationSupported;
    let dataLoading = true;
    let defaultLocation = false;
    let weather;
    let days = Array();

    async function getWeather(longitude, latitude) {
        let yr_data = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`).then(res => res.json());

        let kp_data = await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json").then(res => res.json());
        kp_data.shift();
        let updatedPredictions = [];
        kp_data.forEach((pred, i) => {
            if (pred[2] != "observed") {
                let temp;
                let clouds;
                let cDate = new Date(pred[0]);
                let closestDate = new Date(0,0,0);
                yr_data["properties"]["timeseries"].forEach((pred, i) => {
                    let predDate = new Date(pred["time"]);
                    if (Math.abs(predDate.getTime() - cDate.getTime()) < Math.abs(closestDate.getTime() - cDate.getTime())) {
                        closestDate = predDate;
                        temp = (pred["data"]["instant"]["details"]["air_temperature"]);
                        clouds = pred["data"]["instant"]["details"]["cloud_area_fraction"];
                    }
                })

                updatedPredictions.push({
                    "time": pred[0],
                    "kp": pred[1],
                    "temp": temp,
                    "clouds": clouds
                });
            }
        });
        predictions = updatedPredictions;
    }
    function getDays(daily) {
        var data = daily.data.slice(0,5)
        data.forEach(element => {
            var a = new Date(element.time*1000)
            var dayStrings = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            days.push(dayStrings[a.getDay()])
        });
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
    function toggleDefault() {
        defaultLocation = !defaultLocation
    }
    onMount(getLocation);
</script>

<style>
    .predicted-weather {
        --bg-opacity: 1;
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--bg-opacity));
        padding: 1.5rem;
        --text-opacity: 1;
        color: #1a202c;
        color: rgba(26, 32, 44, var(--text-opacity));
        height: 100%;
        overflow: hidden;

        /* border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        transform: translatey(-1rem); */
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
</style>

<div class="predicted-weather">
	<div className="flex flex-row justify-between items-top">
		<h2>Predicted</h2>
	</div>
    <div class="prediction-table">
        {#if predictions}
            {#each predictions as prediction, i}
                <PredictedSpaceWeatherThing {prediction}/>
            {/each}
        {:else}
            Cannot connect to NOAA
        {/if}
    </div>
</div>

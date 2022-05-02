<script lang="ts">
    import SpinnerRoller from './Spinner/SpinnerRoller.svelte';

    import { onMount } from 'svelte';
    import { get } from 'svelte/store';
    import { data_max_age, navigator_location, earth_weather, space_weather } from '../stores';
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let oldestUpdateTime = new Date(0,0,0);
    let timeagoLastUpdate = 0;
    function updateOldestUpdateTime() {
        let earthWeatherUpdate = get(earth_weather).updated;
        let spaceWeatherUpdate = get(space_weather).updated;

        let now = new Date();
        if (now - spaceWeatherUpdate > now - earthWeatherUpdate) {
            oldestUpdateTime = spaceWeatherUpdate;
            timeagoLastUpdate = now - spaceWeatherUpdate;
        } else {
            oldestUpdateTime = earthWeatherUpdate;
            timeagoLastUpdate = now - earthWeatherUpdate;
        }
    }

    setInterval(updateOldestUpdateTime, 500);
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
        align-items: flex-end;
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
        grid-template-columns: repeat(4, minmax(0, 1fr));
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
            {#if !$navigator_location.updating && $navigator_location.available && !$earth_weather.updating && !$space_weather.updating}
                <i class="symbol fas fa-map-marker-alt"></i>
                {#if $navigator_location.city !== undefined}
                    <h1>{$navigator_location.city}</h1>
                {:else}
                    <h1>long: {$navigator_location.longitude}<br />lat: {$navigator_location.latitude}</h1>
                {/if}
            {/if}
        </div>

        <div class="weatherCurrent-data-date">
        {#if !$earth_weather.updating && !$space_weather.updating}
            {#if Math.abs($earth_weather.updated - $space_weather.updated) > 60*10*1000}
                <p>There is more than 10 minutes difference between data updates</p>
            {:else}
                <p>{oldestUpdateTime.toLocaleString("no-NO", {dateStyle: "medium", timeStyle: "short"})}</p>
            {/if}
            {#if timeagoLastUpdate >= data_max_age}
                <span style="color:red;"><i class="symbol fas fa-exclamation-circle"></i> Data is {Math.round(timeagoLastUpdate / 60 / 1000)} minutes old!</span>
            {/if}
        {/if}
        </div>

        <div class="weatherCurrent-data-kp">
            {#if $space_weather.updating || $earth_weather.updating}
                <SpinnerRoller />
            {:else}
                <h2>KP {$space_weather.now.kp}</h2>
                <p>
                    <span className="pr-2">&uarr; KP {$space_weather.now.kp_max}</span>
                    <span className="pl-2">&darr; KP {$space_weather.now.kp_min}</span>
                </p>
            {/if}
        </div>

        <div class="current-details">
            {#if !$space_weather.updating && !$earth_weather.updating}
                <div>
                    <p>BZ</p>
                    <p>{$space_weather.now.bz}</p>
                </div>
                <div>
                    <p>BT</p>
                    <p>{$space_weather.now.bt}</p>
                </div>
                {#if $earth_weather.available}
                <div>
                    <p>Temp</p>
                    <p>{$earth_weather.now.temp}°C</p>
                </div>
                <div>
                    <p>Clouds</p>
                    <p>{$earth_weather.now.clouds}%</p>
                </div>
                {/if}
            {/if}
        </div>

    </div>
</div>

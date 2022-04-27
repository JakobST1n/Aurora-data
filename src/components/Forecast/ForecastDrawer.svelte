<script lang="ts">
    import OneHourForecast from "./OneHourForecast/OneHourForecast.svelte";
    import ThreeDayForecast from "./ThreeDayForecast/ThreeDayForecast.svelte";

    import { earth_weather, space_weather } from "../../stores.ts";

    let selected_version = ThreeDayForecast;

</script>

<style>
    .drawer {
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
        .drawer {
            padding: 2rem;
            padding-top: 1.5rem;
        }
    }

    @media (min-width: 640px) {
        .drawer {
            border-bottom-right-radius: 1rem;
            border-bottom-left-radius: 1rem;
        }
    }

    .drawer .header {
        display: flex;
        align-items: flex-start;
    }

    .drawer h2 {
        text-transform: uppercase;
        font-size: 0.875rem;
        letter-spacing: 0.1em;
        font-weight: 700;
        margin-top: 0.25rem;
        margin-bottom: 0.5rem;
        margin-right: auto;
    }

    .version-picker {
        display: flex;
        font-size: 0.875rem;
        gap: 0.5rem;
        align-items: center;
        color: #616161;
    }
    .version-picker > * {
        transition: all 0.1s ease;
    }

    .version-picker .selected {
        background-color: #c2c2c2;
        padding: 3px 5px;
        box-sizing: border-box;
        border-radius: 10px;
        color: black;
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

<div class="drawer">
    {#if !$earth_weather.updating && !$space_weather.updating}
        <div class="header">
    		<h2>Forecast</h2>
            <div class="version-picker">
                <div class:selected={selected_version == OneHourForecast} on:click={() => selected_version = OneHourForecast}>hour</div>
                <div class:selected={selected_version == ThreeDayForecast} on:click={() => selected_version = ThreeDayForecast}>3 day</div>
            </div>
    	</div>
        <svelte:component this={selected_version} />
    {:else}
        <div class="no-data">
            <i class="fas fa-7x fa-exclamation-triangle"></i>
            <p>No prediction data</p>
        </div>
    {/if}
</div>

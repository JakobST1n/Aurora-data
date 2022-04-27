<script lang="ts">
	import WeatherCurrent from '../components/WeatherCurrent.svelte';
    import ForecastDrawer from '../components/Forecast/ForecastDrawer.svelte';

    //import { theme, fetchingData, fetchDataError, weatherData } from "../stores.ts";
    //weatherData.subscribe(console.log);
</script>


<style>
    .homescreen {
        display: grid;
        grid-template-rows: 40vh auto;
        grid-row-gap: 0;
        height: 100%;
        --bg-opacity: 1;
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--bg-opacity));
        --bg-opacity: 0.25;
    }
</style>

<svelte:head>
	<title>Aurora data</title>
</svelte:head>


<div class="homescreen">
    <WeatherCurrent/>
    <ForecastDrawer/>
</div>

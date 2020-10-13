<script lang="ts">
	import WeatherCurrent from '../components/WeatherCurrent.svelte';
    import PredictedSpaceWeather from '../components/PredictedSpaceWeather.svelte';
</script>


<style>
    .homescreen {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
    <PredictedSpaceWeather />
</div>

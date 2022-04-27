<script lang="ts">
    import PredictedSpaceWeatherThing from './PredictedSpaceWeatherThing.svelte';

    import { onMount } from 'svelte';
    import { earth_weather, space_weather } from '../stores';

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let predictions;

    space_weather.subscribe(assembleWeatherData);
    earth_weather.subscribe(assembleWeatherData);

    async function assembleWeatherData() {
        if ($space_weather.updating || $earth_weather.updating) {
            predictions = null;
            return;
        }

        // First just reorganize the space_weather data
        let forecast = $space_weather.usnoaa_data_raw.noaa_planetary_k_index_forecast.filter(x => x.observed !== "observed");
        predictions = forecast.map(
            pred => ({
                "time": pred.time,
                "kp": pred.kp,
                "observed": pred.observed,
                "temp": null,
                "clouds": null,
                "hasNOMETData": $earth_weather.available
            })
        );

        // Add earth weather data if it is available
        if ($earth_weather.available) {
            predictions.forEach((pred, i) => {
                let closestDate = new Date(0,0,0);
                let temp;
                let clouds;

                $earth_weather.yr_data_raw.properties.timeseries.forEach((earth_pred, i) => {
                    let predDate = new Date(earth_pred.time);
                    if (Math.abs(predDate.getTime() - pred.time.getTime()) < Math.abs(closestDate.getTime() - pred.time.getTime())) {
                        closestDate = predDate;
                        temp = (earth_pred["data"]["instant"]["details"]["air_temperature"]);
                        clouds = earth_pred["data"]["instant"]["details"]["cloud_area_fraction"];
                    }
                });

                predictions[i] = {
                    ...predictions[i], "temp": temp, "clouds": clouds
                }
            });
        }

    }

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

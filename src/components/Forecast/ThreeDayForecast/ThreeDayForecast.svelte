<script lang="ts">
    import PredictionItem from './PredictionItem.svelte';

    import { onMount } from 'svelte';
    import { earth_weather, space_weather } from '../../../stores';

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
    .prediction-table {
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        padding-bottom: 1rem;
    }

    .prediction-table::-webkit-scrollbar {
        display: none;
    }
</style>

<div class="prediction-table">
    {#each predictions as prediction, i}
        <PredictionItem {prediction}/>
    {/each}
</div>

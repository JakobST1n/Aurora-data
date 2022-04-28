<script>
    import Chip from "../../Basic/Chip.svelte";
    import Bar from "../../Basic/Bar.svelte";

    export let prediction;

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    function zpad(value, n=2) {
        let r = value;
        for (let i = 0; i < n - value.length; i++) {
            r = "0" + r;
        }
        return r;
    }

    let kp = prediction["kp"];
    let date = prediction["time"].getDate()  + ". " + monthNames[prediction["time"].getMonth()];
    let time = zpad(prediction["time"].getHours().toString()) + ":" + zpad(prediction["time"].getMinutes().toString());
    let temp = prediction["temp"];
    let clouds = prediction["clouds"];
    let hasNOMETData = false;
</script>

<style>
    .prediction-details {
      display: flex;
      border-bottom-width: 1px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      align-items: center;
    }

    .prediction-details:last-of-type {
      border-width: 0;
      padding-bottom: 0;
    }

    .prediction-details > * {
      margin: 5px;
    }

    .prediction-details div:last-child {
      margin-left: auto;
    }

    .prediction-details h3 {
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-right: 0.5rem;
    }

    .prediction-details .data {
        display: flex;
        flex-direction: row;
    }

    .prediction-details .data h2 {
        margin-right: 1rem;
        font-size: 1.5rem;
    }
    .prediction-details .data p {
        min-width: 3.3rem;
    }
    .prediction-details .data i {
        width: 1rem;
        text-align: center;
    }
    .KP {
        flex-grow: 1;
        margin-right: 1rem;
        font-size: 1.7rem;
        height: 2.2rem;
    }

</style>

<div class="prediction-details">
    <div>
        <h3>{time}</h3>
        <p>{date}</p>
    </div>
    <div class="KP">
        <Bar percentage={kp/9} value={kp} />
    </div>
    <div class="data">
        {#if hasNOMETData}
        <div>
            <p><i class="fas fa-thermometer-half"></i> {Math.round(temp)}°C</p>
            <p><i class="fas fa-cloud"></i> {Math.round(clouds)}%</p>
        </div>
        {/if}
    </div>
</div>

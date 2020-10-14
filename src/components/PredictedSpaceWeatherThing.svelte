<script>
    export let prediction;

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let kp = prediction["kp"];
    let dateTime = prediction["time"].split(" ");
    let date = Number(dateTime[0].split("-")[2]) + ". " + monthNames[Number(dateTime[0].split("-")[1])];
    let time = dateTime[1].substring(0,5);
    let temp = prediction["temp"];
    let clouds = prediction["clouds"];
    let hasNOMETData = prediction["hasNOMETData"];
</script>

<style>
    .prediction-details {
      display: flex;
      justify-content: space-between;
      border-bottom-width: 1px;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    .prediction-details:last-of-type {
      border-width: 0;
      padding-bottom: 0;
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

</style>

<div class="prediction-details">
    <div>
        <h3>{time}</h3>
        <p>{date}</p>
    </div>
    <div class="data">
        <h2>{kp}</h2>
        {#if hasNOMETData}
        <div>
            <p><i class="fas fa-thermometer-half"></i> {temp}°C</p>
            <p><i class="fas fa-cloud"></i> {clouds}%</p>
        </div>
        {/if}
    </div>
</div>

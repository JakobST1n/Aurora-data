<script lang="ts">
    export let percentage;
    export let value;
</script>

<style>
    :root {
      --progress: 100%;
    }
    
    .wrapper {
        position: relative;
        /* background-color: #c6c6c6; */
        border-radius:15px;
        width: 100%;
        height: 100%;
    }
    
    .bar-wrapper {
        overflow: hidden;
        position: relative;
        border-radius: 15px;
        height: 100%;
        width: 100%;
        left: calc(100% - var(--progress));
    }
    
    .bar {
        position: absolute;
        height: 100%;
        width: 100%;
        right: calc(100% - var(--progress));
        overflow: hidden;
        background: var(--gradient-2, green); 
        border-radius: 15px;
    }

    .value {
        position: absolute;
        right: 0.1rem;
        top: 0;
        font-size: 1.5rem;
    }
</style>

<div class="wrapper" style="--progress: {percentage*100}%">
    <div class="bar-wrapper">
        <div class="bar"></div>
    </div>
    <span class="value">{value}</span>
</div>

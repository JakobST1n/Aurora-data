<script lang="ts">
    export let percentage = 0.7;
    export let vertical = false;
</script>

<style>
    :root {
      --progress: 100%;
    }
    
    .wrapper {
        position: relative;
        background-color: #c6c6c6;
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
        top: calc(100% - var(--progress));
    }
    
    .bar {
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: calc(100% - var(--progress));
        overflow: hidden;
        background: linear-gradient(0deg, 
                                    rgba(217,217,217,1) 0%, 
                                    rgba(164,255,177,1) 70%, 
                                    rgba(255,136,240,1) 100%);
        border-radius: 15px;
    }
</style>

<div>
    <div class="wrapper" class:vertical style="--progress: {percentage*100}%">
        <div class="bar-wrapper">
            <div class="bar"></div>
        </div>
    </div>
</div>

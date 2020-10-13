<script lang="ts">
</script>

<style>
    .app-container  {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
        letter-spacing: 0.05em;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        --bg-opacity: 1;
        background-color: #1a202c;
        background-color: rgba(26, 32, 44, var(--bg-opacity));
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    @media (min-width: 640px) {
        .app-container  {
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            font-family: Roboto, sans-serif;
            font-size: 1rem;
            letter-spacing: 0.05em;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            width: 375px;
            height: 812px;
        }
    }

    .menu-button {
        position: relative;
        top: .25rem;
        left: .75rem;
        color: #ffffff;
        font-size: 1.5rem;

    }

</style>

<div class="app-container">
    <!-- <div class="menu-button">
        <i class="fas fa-bars"></i>
    </div> -->

    <slot></slot>
</div>

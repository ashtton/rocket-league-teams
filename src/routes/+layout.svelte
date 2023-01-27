<script>
    import './styles.css'
    import {page} from '$lib/store'
</script>

<svelte:head>
    <title>RL Teams | {$page}</title>
    <link rel="icon" type="image" href="/images/rl-logo.png" />
</svelte:head>

<a href="/" class="header">
    <img class="header-img" src="/images/rl-logo.png">
    <div class="header-text">
        <strong class="header-title" style="font-size: 2rem">Rocket League</strong><br>
        Teams
    </div>
</a>

<hr class="header-line">

<slot />

<style>
    .header {
        text-align: center;
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #336699;
    }

    .header-img {
        width: 10%;
        height: 10%;
    }

    .header-text {
        font-size: 1.5rem;
    }

    .header-line {
        margin-top: 2rem;
        width: 40%;
        border-color: #2F4858;
    }
</style>
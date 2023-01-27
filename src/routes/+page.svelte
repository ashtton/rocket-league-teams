<script>
	import {page} from '$lib/store'
	page.set("Home")

    export let data;
</script>

<div class="container">
    <div class="teams">
        {#each data.teams as team}
            <a href="teams/{team.file}" class="team">
                <div class="team-logo">
                    <img src="/images/teams/{team.file}.png"><br>
                </div>
                <span class="team-title">
                    <strong>{team.name}</strong>
                </span>
            </a>
        {/each}
    </div>
</div>

<style>
    .container {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        color: gray;
    }

    .teams {
        display: grid;
        grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
        grid-auto-rows: 10rem;
        gap: 3rem;
    }

    .team {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }

    .team:hover img {
        max-height: 6rem;
        max-width: 6rem;
    }

    .team:hover {
        color: black;
    }

    img {
        max-height: 5rem;
        max-width: 5rem;
    }

    .team-logo {
        height: 5rem;
        width: 5rem;
        display: flex;
        align-items: center;
    }

    .team-title {
        margin-top: 0.1rem;
    }

</style>

<script>
	import {page} from '$lib/store'
	page.set("Home")

    export let data;

    let displayingNA = true;
    let displayingEU = true;

    let sortingBy = "a-z";

    let allTeams = data.teams;
    let teams = allTeams;

    function sortTeams() {
        if (sortingBy === "a-z") {
            teams = teams.sort((a, b) => a.name.localeCompare(b.name))
        }

        if (sortingBy === "z-a") {
            teams = teams.sort((a, b) => -a.name.localeCompare(b.name))
        }

        if (sortingBy === "region") {
            teams = teams.sort((a, b) => a.region.localeCompare(b.region))
        }
    }

    $: {
        teams = allTeams.filter(value => (value.region === "US" && displayingNA) ||
            (value.region === "EU" && displayingEU))
    }
</script>

<div class="container">
    <div class="filters">
        <span class="sort-by">
            Sort By:
            <select bind:value={sortingBy} on:change={() => sortTeams()} class="filter">
                <option value="a-z">
                    Alphabetical A-Z
                </option>
                <option value="z-a">
                    Alphabetical Z-A
                </option>
                <option value="region">
                    Region
                </option>
            </select>
        </span>

        <span class="filter-by">
            Filters:
            <span class="filter">
                <input type="checkbox" bind:checked={displayingNA}>North America
            </span>
            <span class="filter">
                <input type="checkbox" bind:checked={displayingEU}>Europe
            </span>
        </span>
    </div>
    {#if teams.length === 0}
        <span class="no-teams">There are no teams to display</span>
    {/if}
    <div class="teams">
        {#each teams as team}
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
        display: grid;
        justify-content: center;
        color: gray;
    }

    .filters {
        margin-bottom: 2.5rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
    }

    .filter {
        margin-left: 0.5rem;
    }

    .teams {
        display: grid;
        grid-template-columns: 6rem 6rem 6rem 6rem 6rem;
        grid-auto-rows: 10rem;
        gap: 3rem;
        justify-content: center;
    }

    @media(max-width: 800px) {
        .teams {
            grid-template-columns: 6rem 6rem 6rem 6rem;
        }

        .filters {
            flex-wrap: wrap;
            justify-content: center;
        }
    }

    @media(max-width: 600px) {
        .teams {
            grid-template-columns: 6rem 6rem 6rem;
        }
    }

    @media(max-width: 400px) {
        .teams {
            grid-template-columns: 6rem 6rem;
        }
    }

    .no-teams {
        text-align: center;
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

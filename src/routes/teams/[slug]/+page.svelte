<script>
    import {page} from '$lib/store'
    export let data;

    page.set(data.team.name)
</script>

<div class="container">
    <div class="header">
        <img class="team-logo" src="/images/teams/{data.team.file}.png">
        <span class="header-title">
            <strong>{data.team.name}</strong>
        </span>
        <img class="header-flag" src="/images/flags/us.png">
    </div>

    <div class="players-container">
        <div class="players">
            {#each data.team.roster as person}
                <div class="player">
                    <div class="player-image">
                        <img class="player-logo" src={"/images/players/" + person.name.toLowerCase() + ".png"}>
                    </div>
                    <div class="player-info">
                        <span class="player-name">
                            {person.name}
                        </span><br>
                        <div class="player-role">
                            {person.role}
                        </div>
                    </div>
                    <div class="social-media">
                        {#if person.connections.youtube !== ""}
                            <a class="social-media-link" href={person.connections.youtube}>
                                <svg class="social-media-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </a>
                        {/if}
                        {#if person.connections.twitch !== ""}
                            <a class="social-media-link" href={person.connections.twitch}>
                                <svg class="social-media-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                            </a>
                        {/if}
                        {#if person.connections.twitter !== ""}
                            <a class="social-media-link" href={person.connections.twitter}>
                                <svg class="social-media-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </a>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>


<style>
    .container {
        margin-top: 2rem;
    }

    .players-container {
        display: flex;
        justify-content: center;
    }

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header-title {
        font-size: 2rem;
        margin-left: 0.5rem;
    }

    .header-flag {
        border-radius: 0.1rem;
        max-height: 1.5rem;
        margin-left: 0.3rem;
    }

    .players {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 15rem 15rem 15rem;
        grid-auto-rows: 25rem;
        gap: 2rem;
    }

    .player {
        font-size: 2.5rem;
        border-radius: 0.2rem;
    }

    .player-info {
        margin-top: 1rem;
        text-align: center;
    }

    .player-name {
        text-transform: uppercase;
        /*letter-spacing: 0.2rem;*/
    }

    .player-role {
        font-size: 1rem;
    }

    .player-logo {
        margin-top: 1rem;
        height: 13rem;
        width: 13rem;
        object-fit: cover;
    }

    .player-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .social-media {
        display: flex;
        justify-content: center;
    }

    .social-media-link:not(:first-child) {
        margin-left: 1rem;
    }

    .social-media-icon {
        fill: #838383;
    }

    .social-media-icon:hover {
        fill: #3a3a3a;
    }

    .team-logo {
        max-height: 4rem;
    }
</style>


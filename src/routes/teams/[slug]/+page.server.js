import {error} from "@sveltejs/kit";

export async function load({params}) {
    let response = await fetch("https://rocket-league-teams.vercel.app/data/teams/" + params.slug.toLowerCase() + ".json");

    if (!response.ok) {
        throw error(404, "Not found")
    }

    return {
        team: await response.json(),
    };
}
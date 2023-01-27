import {error} from "@sveltejs/kit";

export async function load({params}) {
    let response = await fetch("http://localhost:5173/data/teams/" + params.slug.toLowerCase() + ".json");

    if (!response.ok) {
        throw error(404, "Not found")
    }

    return {
        team: await response.json(),
    };
}
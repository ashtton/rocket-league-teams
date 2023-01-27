export async function load({params}) {
    let response = await fetch("http://localhost:5173/data/teams/all_teams.json");
    let responseJson = await response.json()

    let teams = [];

    for (let team in responseJson.teams) {
        let teamName = responseJson.teams[team];
        let rawData = await fetch("http://localhost:5173/data/teams/" + teamName + ".json")
        let json = await rawData.json()
        teams.push(json)
    }

    return {
        teams: teams,
    };
}
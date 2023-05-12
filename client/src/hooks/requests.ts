import { Launch, Planet, SubmitLaunch } from "../types";

const URL = "http://localhost:3000";

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`);
  const result = (await response.json()) as Array<Planet>;
  const data = result.reduce((acc, planet) => {
    acc.push(planet["planet"]);
    return acc;
  }, []);
  return data;
}

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const result = (await response.json()) as Array<Launch>;
  return result.sort((a: Launch, b: Launch) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch: SubmitLaunch) {
  try {
    const res = await fetch(`${URL}/launches`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
    return res;
  } catch (e) {
    console.log(e);
    return {
      ok: false,
    };
  }
}

async function httpAbortLaunch(id: number) {
  try {
    return await fetch(`${URL}/launches/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
    return {
      ok: false,
    };
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

import { Launch, Planet, RequestLaunch, SubmitLaunch } from "../types";

const URL = "http://localhost:3000";

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`);
  const result = (await response.json()) as Request;

  return result;
}

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const result = (await response.json()) as RequestLaunch;
  return result.data.sort(
    (a: Launch, b: Launch) => a.flightNumber - b.flightNumber,
  );
}

export { httpGetPlanets, httpGetLaunches };

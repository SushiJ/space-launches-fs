import { Launch, RequestLaunch } from "../types";

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const result = (await response.json()) as RequestLaunch;
  return result.data.sort(
    (a: Launch, b: Launch) => a.flightNumber - b.flightNumber,
  );
}

export { httpGetLaunches };

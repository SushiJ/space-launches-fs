const URL = "http://localhost:3000";

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`);
  const result = await response.json();
  return result;
}

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const result = await response.json();
  return result.sort((a: any, b: any) => a.flightNumber - b.flightNumber);
}

async function httpSubmitLaunch(launch: unknown) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id: string) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

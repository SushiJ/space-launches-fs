import { Launch, Planet, SubmitLaunch } from "../types";

const URL = "http://localhost:3000";

type RequestSuccess = {
  success: true;
  data: Array<Planet>;
};

type RequestFailed = {
  success: false;
  error: string;
};

type Request = RequestSuccess | RequestFailed;

type RequestLaunch = {
  success: true;
  data: Array<Launch>;
};

async function httpGetPlanets() {
  const response = await fetch(`${URL}/planets`);
  const result = (await response.json()) as Request;

  return result;
}

async function httpGetLaunches() {
  const response = await fetch(`${URL}/launches`);
  const result = (await response.json()) as RequestLaunch;
  return result.data.sort(
    (a: Launch, b: Launch) => a.flightNumber - b.flightNumber
  );
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
    const data = (await res.json()) as Request;
    return data;
  } catch (e) {
    console.log(e);
  }
}

async function httpAbortLaunch(id: number) {
  try {
    return await fetch(`${URL}/launches/${id}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.log(e);
  }
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };

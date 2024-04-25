import { useCallback, useState } from "preact/hooks";
import { Launch, SubmitLaunch } from "../types";
import useLaunches from "./useLaunches";

const URL = "http://localhost:3000";

export function useSubmitLaunch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { getLaunches } = useLaunches();

  const submitLaunch = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData(e.currentTarget);
    /* @ts-expect-error */
    const launchDate = new Date(data.get("launch-date")).toJSON();
    const mission = data.get("mission-name") as string;
    const rocket = data.get("rocket-name") as string;
    const destination = data.get("planet-selector") as string;

    try {
      const res = await fetch(`${URL}/launches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          launchDate,
          mission,
          rocket,
          destination,
        }),
      });

      if (!res.ok) {
        setIsError(true);
        setError(error);
        return;
      }
      await getLaunches();
    } catch (e) {
      setIsError(true);
      setError(e);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };
  return { submitLaunch, isLoading, error, isError };
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

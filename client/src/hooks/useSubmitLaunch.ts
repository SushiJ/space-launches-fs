import { useState } from "preact/hooks";
import { StateType } from "../types";
import useLaunches from "./useLaunches";

const URL = "http://localhost:3000";

export function useSubmitLaunch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { getLaunches } = useLaunches();

  const submitLaunch = async (data: StateType) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${URL}/launches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          launchDate: data.date,
          mission: data.mission_name,
          rocket: data.rocket_name,
          destination: data.planet,
        }),
      });

      if (!res.ok) {
        setIsError(true);
        const error = await res.json();
        setError(error.message);
        setTimeout(() => {
          setError(null);
        }, 2000);
      } else {
        await getLaunches();
      }
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

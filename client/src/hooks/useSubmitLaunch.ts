import { useState } from "preact/hooks";
import useLaunches from "./useLaunches";

const URL = "http://localhost:3000";

export function useSubmitLaunch() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { getLaunches } = useLaunches();

  const submitLaunch = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    /* @ts-expect-error */
    const launchDate = new Date(data.get("launch-date")).toJSON();
    const mission = data.get("mission-name");
    const rocket = data.get("rocket-name");
    const destination = data.get("planet-selector");

    try {
      setIsLoading(true);
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

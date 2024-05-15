import { useCallback, useState } from "preact/hooks";
import useLaunches from "./useLaunches";

const URL = "http://localhost:3000";

export function useAbortLaunches() {
  // const [launches, setLaunches] = useState<Array<Launch> | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { launches } = useLaunches();

  const abortLaunch = useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${URL}/launches/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      } catch (e) {
        setIsError(true);
        setError(e);
      } finally {
        setIsLoading(false);
      }
    },
    [launches]
  );

  return {
    abortLaunch,
    error,
    isLoading,
    isError,
  };
}

import { useCallback, useEffect, useState } from "preact/hooks";
import { Launch, RequestLaunch } from "../types/";

const URL = "http://localhost:3000";

function useLaunches() {
  const [launches, setLaunches] = useState<Array<Launch> | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getLaunches = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${URL}/launches`);
      const result = (await response.json()) as RequestLaunch;
      setLaunches(result.data);
      console.log(result.data);
    } catch (e) {
      setIsError(true);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getLaunches();
  }, []);

  return {
    getLaunches,
    launches,
    error,
    isLoading,
    isError,
  };
}

export default useLaunches;

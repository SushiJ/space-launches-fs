import { useCallback, useEffect, useState } from "preact/hooks";
import { Planet } from "../types";

const URL = "http://localhost:3000";

function usePlanets() {
  const [planets, savePlanets] = useState<Array<string>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlanetsError, setIsPlanetsError] = useState<boolean>(false);
  const [planetError, setPlanetError] = useState<string | null>(null);

  const getPlanets = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${URL}/planets`);

      if (!response.ok) {
        setIsPlanetsError(true);
        setPlanetError(response.status.toString());
        return;
      }

      const { data } = (await response.json()) as {
        success: string;
        data: Array<{
          planet: string;
        }>;
      };
      const result: Array<string> = [];

      for (let i = 0; i < data.length; ++i) {
        result.push(data[i].planet);
      }

      savePlanets(result);
    } catch (e) {
      setIsPlanetsError(true);
      setPlanetError(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return {
    planets,
    isLoading,
    isPlanetsError,
    planetError,
  };
}

export default usePlanets;

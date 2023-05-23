import { useCallback, useEffect, useState } from "preact/hooks";
import { Planet } from "../types";

import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState<Array<Planet>>([]);

  const getPlanets = useCallback(async () => {
    const result = await httpGetPlanets();
    if (result.success === false) {
      return;
    }
    const fetchedPlanets = result.data.reduce((acc, planet) => {
      acc.push(planet["planet"]);
      return acc;
    }, []);
    savePlanets(fetchedPlanets);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);
  return planets;
}

export default usePlanets;

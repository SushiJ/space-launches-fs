import { useCallback, useEffect, useState } from "preact/hooks";
import { Planets } from "../types";

import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState<Array<Planets>>([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets = await httpGetPlanets();
    savePlanets(fetchedPlanets);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);
  return planets;
}

export default usePlanets;

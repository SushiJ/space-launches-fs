import { useCallback, useEffect, useState } from "preact/hooks";

import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState<Array<string>>([]);

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

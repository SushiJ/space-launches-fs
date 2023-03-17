import { useCallback, useEffect, useState } from "preact/hooks";

import { httpGetPlanets } from "./requests";

function usePlanets() {
  const [planets, savePlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets: any = await httpGetPlanets();
    // /* @ts-expect-error */
    savePlanets(fetchedPlanets["habitable"]);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return planets;
}

export default usePlanets;

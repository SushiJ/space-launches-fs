import { useCallback, useEffect, useState } from "preact/hooks";
import { Launch } from "../types/types";

import { httpGetLaunches } from "./requests";

function useLaunches() {
  const [launches, saveLaunches] = useState<Array<Launch> | []>([]);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  return {
    getLaunches,
    launches,
  };
}

export default useLaunches;

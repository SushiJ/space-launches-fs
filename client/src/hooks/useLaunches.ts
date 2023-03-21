import { useCallback, useEffect, useState } from "preact/hooks";
import { Launch } from "../types/types";

import { httpGetLaunches, httpSubmitLaunch, httpAbortLaunch } from "./requests";

function useLaunches() {
  const [launches, saveLaunches] = useState<Array<Launch> | []>([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);

  const getLaunches = useCallback(async () => {
    const fetchedLaunches = await httpGetLaunches();
    saveLaunches(fetchedLaunches);
  }, []);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

  const submitLaunch = useCallback(
    async (e: any) => {
      e.preventDefault();
      // setPendingLaunch(true);
      const data = new FormData(e.target);
      /* @ts-expect-error */
      const launchDate = new Date(data.get("launch-date"));
      const mission = data.get("mission-name") as string;
      const rocket = data.get("rocket-name") as string;
      const destination = data.get("planets-selector") as string;

      const response = await httpSubmitLaunch({
        launchDate,
        mission,
        rocket,
        destination,
      });

      // TODO: Set success based on response.
      const success = false;
      if (success) {
        getLaunches();
        setTimeout(() => {
          setPendingLaunch(false);
        }, 800);
      } else {
        console.log("Launch Failure");
      }
    },
    [getLaunches]
  );

  const abortLaunch = useCallback(
    async (id: any) => {
      const response = await httpAbortLaunch(id);

      // TODO: Set success based on response.
      const success = false;
      if (success) {
        getLaunches();
      } else {
        console.log("Launch Failure");
      }
    },
    [getLaunches]
  );

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
  };
}

export default useLaunches;

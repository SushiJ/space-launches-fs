import { useCallback, useEffect, useState } from "preact/hooks";
import { Launch } from "../types/types";

import { httpGetLaunches, httpSubmitLaunch, httpAbortLaunch } from "./requests";

function useLaunches() {
  const [launches, saveLaunches] = useState<Array<Launch> | []>([]);
  const [isPendingLaunch, setPendingLaunch] = useState(false);
  const [isFormEmpty, setIsFormEmpty] = useState(true);

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
      const launchDate = new Date(data.get("launch-date")).toJSON();
      const mission = data.get("mission-name") as string;
      const rocket = data.get("rocket-name") as string;
      const destination = data.get("planet-selector") as string;

      if (mission.length === 0 || rocket.length === 0) {
        setIsFormEmpty(true);
      } else {
        setIsFormEmpty(false);
      }
      const response = (await httpSubmitLaunch({
        launchDate,
        mission,
        rocket,
        destination,
      })) as any;

      // TODO: Set success based on response.
      if (response.ok) {
        getLaunches();
        setTimeout(() => {
          setPendingLaunch(false);
        }, 800);
      } else {
        console.log(" submit Launch Failure");
      }
    },
    [getLaunches]
  );

  const abortLaunch = useCallback(
    async (id: number) => {
      const response = await httpAbortLaunch(id);

      // TODO: Set success based on response.
      const success = response.ok;
      if (success) {
        getLaunches();
      } else {
        console.log("Abort Launch Failure");
      }
    },
    [getLaunches]
  );

  return {
    launches,
    isPendingLaunch,
    submitLaunch,
    abortLaunch,
    isFormEmpty,
  };
}

export default useLaunches;

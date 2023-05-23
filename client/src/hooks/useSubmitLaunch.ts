import { useCallback, useState } from "preact/hooks";
import { Launch } from "../types";
import { httpSubmitLaunch } from "./requests";
import useLaunches from "./useLaunches";

export function useSubmitLaunch() {
  const [isPendingLaunch, setPendingLaunch] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { getLaunches } = useLaunches();

  const submitLaunch = useCallback(
    async (e) => {
      e.preventDefault();
      setPendingLaunch(true);
      const data = new FormData(e.target);
      /* @ts-expect-error */
      const launchDate = new Date(data.get("launch-date")).toJSON();
      const mission = data.get("mission-name") as string;
      const rocket = data.get("rocket-name") as string;
      const destination = data.get("planet-selector") as string;

      const response = await httpSubmitLaunch({
        launchDate,
        mission,
        rocket,
        destination,
      });

      // TODO: Set success based on response.
      if (response.success === false) {
        setError(true);
        setErrorMsg(response.error);
        return;
      } else {
        getLaunches();
        setTimeout(() => {
          setPendingLaunch(false);
        }, 800);
      }
    },
    [getLaunches]
  );
  return { submitLaunch, isPendingLaunch, error, errorMsg };
}

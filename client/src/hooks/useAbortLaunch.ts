import { useCallback } from "preact/hooks";
import { httpAbortLaunch } from "./requests";
import useLaunches from "./useLaunches";

export function useAbortLaunches() {
  const { getLaunches } = useLaunches();

  const abortLaunch = useCallback(
    async (id: number) => {
      const response = await httpAbortLaunch(id);

      // TODO: Set success based on response.
      if (!response.ok) {
        console.log(response);
        return;
      } else {
        getLaunches();
      }
    },
    [getLaunches]
  );

  return abortLaunch;
}

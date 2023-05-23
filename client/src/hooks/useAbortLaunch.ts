import { useCallback } from "preact/hooks";
import { httpAbortLaunch } from "./requests";
import useLaunches from "./useLaunches";

export function useAbortLaunches() {
  const { getLaunches } = useLaunches();

  const abortLaunch = useCallback(
    async (id: number) => {
      const response = await httpAbortLaunch(id);

      if (!response.ok) {
        console.error(response);
        return;
      }
      await getLaunches();
    },
    [getLaunches]
  );

  return abortLaunch;
}

import useLaunches from "../hooks/useLaunches";
import Layout from "../components/Layout";
import { useMemo } from "preact/hooks";
type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launcDate: Date;
  destination: string;
  customer: Array<string>;
  upcoming: boolean;
  success: boolean;
};
function HistoryPage() {
  const { launches, abortLaunch, submitLaunch, isPendingLaunch } =
    useLaunches();
  return (
    <Layout>
      <div class="text-gray-100 border-emerald-400 h-auto border-[1px] rounded-sm text-xl p-8">
        <p class="mt-4">
          History of mission launchers including SpaceX launches starting from
          the year 2006.
        </p>
        <table class="mt-2 w-full">
          <tr class="grid grid-cols-5 gap-1 text-end">
            <td class="w-8">No.</td>
            <td>Date</td>
            <td>Misson</td>
            <td>Rocket</td>
            <td>Customers</td>
          </tr>
          <hr />
          {useMemoizedLaunches(launches)}
        </table>
      </div>
    </Layout>
  );
}
export default HistoryPage;

function useMemoizedLaunches(launches: Array<Launch>) {
  return useMemo(() => {
    return launches.map((launch: Launch) => {
      return (
        <tr
          key={String(launch.flightNumber)}
          class="grid grid-cols-5 gap-1 text-end"
        >
          <td class="w-8">{launch.flightNumber}</td>
          <td>{new Date(launch.launcDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.customer?.join(", ")}</td>
        </tr>
      );
    });
  }, [launches]);
}

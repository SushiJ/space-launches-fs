import useLaunches from "../hooks/useLaunches";
import Layout from "../components/Layout";
import { useMemo } from "preact/hooks";
import { Launch } from "../types";

function HistoryPage() {
  const { launches } = useLaunches();
  const tableBody = useMemo(() => {
    return launches
      .filter((launch: Launch) => !launch.upcoming)
      .reverse()
      .map((launch: Launch) => (
        <tr key={String(launch.flightNumber)} class="text-sm">
          <td class="">{launch.flightNumber}</td>
          <td>{new Date(launch.launchDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.customer?.join(", ")}</td>
        </tr>
      ));
  }, [launches]);
  return (
    <Layout>
      <div class="text-sm">
        <p class="">
          History of mission launchers including SpaceX launches starting from
          the year 2006.
        </p>
        <div class="mt-2 max-h-[40rem] overflow-y-auto rounded border-2 border-mars-base p-2">
          <table class="table-auto text-center text-mars-base shadow-sm">
            <thead class="border-b-[1px] border-b-mars-light pb-4">
              <tr class="text-xs">
                <th>&nbsp;</th>
                <th>No.</th>
                <th>Date</th>
                <th>Misson</th>
                <th>Rocket</th>
                <th>Destination</th>
              </tr>
            </thead>
            <tbody>{tableBody}</tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
export default HistoryPage;

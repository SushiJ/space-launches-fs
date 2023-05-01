import useLaunches from "../hooks/useLaunches";
import Layout from "../components/Layout";
import { useMemo } from "preact/hooks";
import { Launch } from "../types/types";

function HistoryPage() {
  const { launches } = useLaunches();
  const tableBody = useMemo(() => {
    return launches
      .filter((launch: Launch) => !launch.upcoming)
      .map((launch: Launch) => (
        <tr key={String(launch.flightNumber)} class="">
          <td class="">{launch.flightNumber}</td>
          <td>{new Date(launch.launchDate).toDateString()}</td>
          <td>{launch.mission}</td>
          <td>{launch.rocket}</td>
          <td>{launch.customer?.join(", ")}</td>
        </tr>
      ));
  }, [launches]);
  console.log(launches[0]?.launchDate);
  return (
    <Layout>
      <div class="text-gray-100 border-emerald-400 h-auto border-[1px] rounded-sm text-xl p-8">
        <p class="mt-4">
          History of mission launchers including SpaceX launches starting from
          the year 2006.
        </p>
        <table class="mt-2 w-full table-auto text-center">
          <thead class="border-gray-400 border-b-[1px]">
            <tr class="pb-4 mb-12">
              <th class="">No.</th>
              <th>Date</th>
              <th>Misson</th>
              <th>Rocket</th>
              <th>Customers</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
      </div>
    </Layout>
  );
}
export default HistoryPage;

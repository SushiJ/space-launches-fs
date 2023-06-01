import { useMemo } from "preact/hooks";
import Layout from "../components/Layout";
import { useAbortLaunches } from "../hooks/useAbortLaunch";
import useLaunches from "../hooks/useLaunches";

function UpcomingPage() {
  const abortLaunch = useAbortLaunches();
  const { launches } = useLaunches();
  const tableBody = useMemo(() => {
    if (launches.length === 0) {
      return;
    }
    return launches
      ?.filter((launch) => launch.upcoming)
      .map((launch) => {
        return (
          <tr class="" key={String(launch.flightNumber)}>
            <td class="">
              <button
                className=""
                onClick={() => abortLaunch(launch.flightNumber)}
              >
                ✖
              </button>
            </td>
            <td class="">{launch.flightNumber}</td>
            <td>{new Date(String(launch.launchDate)).toDateString()}</td>
            <td>{launch.mission}</td>
            <td>{launch.rocket}</td>
            <td>{launch.destination}</td>
          </tr>
        );
      });
  }, [launches, abortLaunch]);

  return (
    <Layout>
      <div class="text-gray-100 border-emerald-400 h-full border-[1px] rounded-sm text-xl p-8">
        <p class="">
          {/* TODO: Rename xyz to something else  */}
          Upcoming missions including both SpaceX launcher and newly scheduled
          xyz Rockets.
        </p>
        <p class="mt-4">
          {/* TODO: Replace the X with an icon  */}
          Warning! Clicking on the X aborts the mission
        </p>
        <table class="mt-2 w-full table-auto text-center">
          <thead class="border-b-gray-400 border-b-[1px] pb-4 mb-4">
            <tr class="">
              <th class="">&nbsp;</th>
              <th class="">No.</th>
              <th>Date</th>
              <th>Misson</th>
              <th>Rocket</th>
              <th>Destination</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </table>
        {launches.length === 0 && (
          <p class="text-center pt-8 text-2xl">No upcoming launches found</p>
        )}
      </div>
    </Layout>
  );
}

export default UpcomingPage;

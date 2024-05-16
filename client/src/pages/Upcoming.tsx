import { useMemo } from "preact/hooks";
import Layout from "../components/Layout";
import { useAbortLaunches } from "../hooks/useAbortLaunch";
import useLaunches from "../hooks/useLaunches";

function UpcomingPage() {
  const { abortLaunch } = useAbortLaunches();
  const { launches, setLaunches } = useLaunches();

  function handleAbort(launch: (typeof launches)[0]) {
    const newLaunches = launches.filter(
      (l) => l.flightNumber !== launch.flightNumber
    );
    abortLaunch(launch.flightNumber).then(() => setLaunches(newLaunches));
  }

  const tableBody = useMemo(() => {
    return launches
      .filter((launch) => launch.upcoming)
      .reverse()
      .map((launch) => {
        return (
          <tr class="text-sm" key={String(launch.flightNumber)}>
            <td>
              <button onClick={() => handleAbort(launch)}>✖</button>
            </td>
            <td>{launch.flightNumber}</td>
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
      <div class="pt-8 text-sm">
        <p>
          {/* TODO: Rename xyz to something else  */}
          Upcoming missions including both SpaceX launcher and newly scheduled
          xyz Rockets.
        </p>
        <p class="mt-4">
          Warning! Clicking on the
          <span class="mx-1 rounded-full bg-mars-base px-1 font-bold text-mars-lighter">
            X
          </span>
          aborts the mission
        </p>

        {launches.length === 0 ? (
          <p class="pt-8 text-center">No upcoming launches found</p>
        ) : (
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
        )}
      </div>
    </Layout>
  );
}

export default UpcomingPage;

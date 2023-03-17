import Layout from "../components/Layout";
function UpcomingPage() {
  return (
    <Layout>
      <div class="text-gray-100 border-emerald-400 h-auto border-[1px] rounded-sm text-xl p-8">
        <p class="">
          {/* TODO: Rename xyz to something else  */}
          Upcoming missions including both SpaceX launcher and newly scheduled
          xyz Rockets.
        </p>
        <p class="mt-4">
          {/* TODO: Replace the X with an icon  */}
          Warning! Clicking on the X aborts the mission
        </p>
        <table class="mt-2 w-full">
          <tr class="grid grid-cols-5 gap-1 text-end">
            <td class="w-auto">No.</td>
            <td>Date</td>
            <td>Misson</td>
            <td>Rocket</td>
            <td>Destination</td>
          </tr>
          <hr />
        </table>
      </div>
    </Layout>
  );
}

export default UpcomingPage;

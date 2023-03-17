import Layout from "../components/Layout";
function HistoryPage() {
  return (
    <Layout>
      <div class="text-gray-100 border-emerald-400 h-auto border-[1px] rounded-sm text-xl p-8">
        <p class="mt-4">
          {/* TODO: Replace the X with an icon  */}
          History of mission launchers including SpaceX launches starting from
          the year 2006.
        </p>
        <table class="mt-2 w-full">
          <tr class="grid grid-cols-5 gap-1 text-end">
            <td class="w-auto">No.</td>
            <td>Date</td>
            <td>Misson</td>
            <td>Rocket</td>
            <td>Customers</td>
          </tr>
          <hr />
        </table>
      </div>
    </Layout>
  );
}

export default HistoryPage;

import { Form } from "../components/Form";
import Layout from "../components/Layout";

function Launches() {
  return (
    <Layout>
      <div class="text-gray-100 border-emerald-400 h-auto border-[1px] border-dashed rounded-sm text-2xl p-8">
        <h2>
          Schedule a mission launch for intersetellar travel to one of the
          Kepler Exoplanets.
        </h2>
        <p className="my-8 text-xl">
          Only confimed planets matching the follwoing criteria are available
          for the earliest scheduled missions:
        </p>
        <ul className="text-xl ml-4">
          <li className="list-disc list-inside">
            Planetary radius &lt; 1.6 times Earth's radius.
          </li>
          <li className="list-disc list-inside">
            Effective stellar flux &gt; 0.36 times Earth's value and &lt; 1.11
            times Earth's value.
          </li>
        </ul>
        <Form />
      </div>
    </Layout>
  );
}

export default Launches;

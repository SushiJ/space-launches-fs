import { Form } from "../components/Form";
import Layout from "../components/Layout";

function Launches() {
  return (
    <Layout>
      <div class="md:text-md pt-8 text-sm text-mars-base">
        <h2>
          Schedule a mission launch for intersetellar travel to one of the
          Kepler Exoplanets.
        </h2>
        <p className="">
          Only confimed planets matching the follwoing criteria are available
          for the earliest scheduled missions:
        </p>
        <ul className="ml-4">
          <li className="list-inside list-disc">
            Planetary radius &lt; 1.6 times Earth's radius.
          </li>
          <li className="list-inside list-disc">
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

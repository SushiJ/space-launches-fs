import { Form } from "../components/Form";
import Layout from "../components/Layout";
import usePlanets from "../hooks/usePlanets";
import { useSubmitLaunch } from "../hooks/useSubmitLaunch";

function Launches() {
  const { submitLaunch, error } = useSubmitLaunch();
  const planets = usePlanets();

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
        <Form planets={planets} submitLaunch={submitLaunch} />
      </div>
      <div>{error && <ErrorComponent />}</div>
    </Layout>
  );
}

function ErrorComponent() {
  const { errorMsg } = useSubmitLaunch();
  return <div>{errorMsg}</div>;
}

export default Launches;

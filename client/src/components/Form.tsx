import { useMemo } from "preact/hooks";

export function Form(props: any) {
  const selectorBody = useMemo(() => {
    return props.planets?.map((planet: any) => (
      <option value={planet.kepler_name} key={planet.kepler_name}>
        {planet.kepler_name}
      </option>
    ));
  }, [props.planets]);

  const today = new Date().toISOString().split("T")[0];
  return (
    <form onSubmit={props.submitLaunch} className="space-y-6 mt-8">
      <div class="">
        <label htmlFor="launch" class="text-lg font-medium leading-6">
          Launch Date
        </label>
        <input
          min={today}
          max="2040-12-31"
          type="date"
          name="launch-date"
          id="launch-date"
          defaultValue={today}
          class="mt-2 block rounded-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 text-lg leading-6"
        />
      </div>
      <div class="">
        <label
          htmlFor="mission-name"
          class="block text-lg font-medium leading-6"
        >
          Mission Name
        </label>
        <input
          type="text"
          name="mission-name"
          id="mission-name"
          class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 text-lg leading-6"
        />
      </div>
      <div class="">
        <label
          htmlFor="rocket-name"
          class="block text-lg font-medium leading-6"
        >
          Rocket Name
        </label>
        <input
          type="text"
          name="rocket-name"
          id="rocket-name"
          defaultValue="Something rocket"
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 text-lg leading-6"
        />
      </div>
      <div class="">
        <label
          htmlFor="planet-selector"
          class="block text-lg font-medium leading-6 "
        >
          Destiantion Exoplanet
        </label>
        <select
          id="planet-selector"
          name="planet-selector"
          class="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 focus:ring-2 focus:ring-emerald-400 text-md leading-6"
        >
          {selectorBody}
        </select>
      </div>
      <div class="">
        <button
          type="submit"
          disabled={props.isPendingLaunch}
          class="text-sm hover:bg-emerald-200
          bg-emerald-400 p-2 rounded-sm text-gray-900 mt-2 disabled:cursor-auto disabled:bg-emerald-300"
        >
          Save
        </button>
      </div>
    </form>
  );
}

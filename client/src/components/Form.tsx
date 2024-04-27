import { useMemo, useReducer } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import usePlanets from "../hooks/usePlanets";
import { useSubmitLaunch } from "../hooks/useSubmitLaunch";
import { ActionType, StateType } from "../types";

function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case "CHANGE_DATE": {
      console.info(action.payload);
      return {
        ...state,
        date: action.payload,
      };
    }
    case "CHANGE_MISSION_NAME": {
      return {
        ...state,
        mission_name: action.payload,
      };
    }
    case "CHANGE_ROCKET_NAME": {
      return {
        ...state,
        rocket_name: action.payload,
      };
    }
    case "CHANGE_PLANET_NAME": {
      return {
        ...state,
        planet: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export function Form() {
  const { isError, error, submitLaunch } = useSubmitLaunch();
  const { planets, isPlanetsError, isLoading, planetError } = usePlanets();

  const today = new Date().toISOString().split("T")[0];
  const initialState = {
    date: today,
    mission_name: "",
    rocket_name: "",
    planet: planets.length > 0 ? planets[0] : "",
  };

  const [formState, dispatch] = useReducer(reducer, initialState);

  const selectorBody = useMemo(() => {
    if (planets.length) {
      return planets.map((planet) => (
        <option value={planet} key={planet}>
          {planet}
        </option>
      ));
    }
    return [];
  }, [planets]);

  function handleSubmit(e: JSXInternal.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-8">
      {isError && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <div>
        <label htmlFor="launch" class="text-lg font-medium leading-6">
          Launch Date
        </label>
        <input
          min={today}
          max="2040-12-31"
          type="date"
          name="launch-date"
          id="launch-date"
          defaultValue={formState.date}
          class="mt-2 block rounded-sm py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 text-lg leading-6"
          onChange={(e) =>
            dispatch({ type: "CHANGE_DATE", payload: e.currentTarget.value })
          }
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
          placeholder="Mission name goes here..."
          value={formState.mission_name}
          class="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 text-lg leading-6"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_MISSION_NAME",
              payload: e.currentTarget.value,
            })
          }
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
          value={formState.rocket_name}
          placeholder="Rocket name goes here..."
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-400 text-lg leading-6"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_ROCKET_NAME",
              payload: e.currentTarget.value,
            })
          }
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
          defaultValue={formState.planet}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_PLANET_NAME",
              payload: e.currentTarget.value,
            })
          }
        >
          {selectorBody}
        </select>
      </div>
      <div class="">
        <button
          type="submit"
          class="text-sm hover:bg-emerald-200
          bg-emerald-400 p-2 rounded-sm text-gray-900 mt-2 disabled:cursor-auto disabled:bg-emerald-300"
        >
          Save
        </button>
      </div>
    </form>
  );
}

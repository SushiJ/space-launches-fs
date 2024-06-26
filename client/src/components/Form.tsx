import { useMemo, useReducer } from "preact/hooks";
import { JSXInternal } from "preact/src/jsx";
import reducer from "../feature/reducer";
import usePlanets from "../hooks/usePlanets";
import { useSubmitLaunch } from "../hooks/useSubmitLaunch";

export function Form() {
  const {
    isError,
    error,
    submitLaunch,
    isLoading: isLoadingMutation,
  } = useSubmitLaunch();
  const { planets, isPlanetsError, isLoading, planetError } = usePlanets();

  const today = new Date().toISOString().split("T")[0];

  const errors = {
    mission_name: {
      message: "",
    },
    rocket_name: {
      message: "",
    },
    planet: {
      message: "",
    },
  };

  const initialState = {
    date: today,
    mission_name: "",
    rocket_name: "",
    planet: planets.length > 0 ? planets[0] : "",
    errors: errors,
  };

  const [formState, dispatch] = useReducer(reducer, initialState);

  const selectorBody = useMemo(() => {
    if (planets.length) {
      return planets.map((planet) => (
        <>
          <option value={planet} key={planet}>
            {planet}
          </option>
        </>
      ));
    }
    return [];
  }, [planets]);

  async function handleSubmit(e: JSXInternal.TargetedEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formState.mission_name) {
      dispatch({
        type: "SET_ERROR_MISSION_NAME",
        payload: "Select a planet to launch",
      });
    }
    if (!formState.rocket_name) {
      dispatch({
        type: "SET_ERROR_ROCKET_NAME",
        payload: "Rocket name is required",
      });
    }
    if (!formState.planet) {
      dispatch({
        type: "SET_ERROR_PLANET_NAME",
        payload: "Select a planet to launch",
      });
    }
    // TODO: HANDLE submit
    await submitLaunch(formState);
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 text-sm">
      {/* TODO: Add fieldset element for bluring the form  */}
      <p>
        {isError ? (
          <pre>
            {JSON.stringify(error.toString().split(":")[1].trim(), null, 2)}
          </pre>
        ) : null}
      </p>
      <div class="flex space-x-2">
        <div>
          <label htmlFor="launch" class="font-medium leading-6">
            Launch Date
          </label>
          <input
            min={today}
            max="2040-12-31"
            type="date"
            name="launch-date"
            id="launch-date"
            defaultValue={formState.date}
            class="block rounded-sm border-none py-1.5 leading-6 shadow-sm focus:ring-2 focus:ring-mars-base"
            onChange={(e) =>
              dispatch({ type: "CHANGE_DATE", payload: e.currentTarget.value })
            }
          />
        </div>
        <div>
          <label
            htmlFor="planet-selector"
            class="block font-medium leading-6 after:ml-0.5 after:align-super after:text-xs after:content-['*']"
          >
            Destiantion Exoplanet
          </label>
          <select
            id="planet-selector"
            name="planet-selector"
            class="block w-full rounded-sm border-none py-1.5 leading-6 shadow-sm focus:ring-2 focus:ring-mars-base "
            onChange={(e) =>
              dispatch({
                type: "CHANGE_PLANET_NAME",
                payload: e.currentTarget.value,
              })
            }
            onBlur={(e) => {
              if (e.currentTarget.value !== "") {
                dispatch({ type: "CLEAR_ERROR_PLANET_NAME_STATE" });
              }
            }}
          >
            <option
              value=""
              selected
              disabled
              class="text-sm text-mars-base/75"
            >
              Choose from listed planets here...
            </option>
            {selectorBody}
          </select>
          <div class="text-xs text-red-700">
            {formState.errors?.planet.message ? (
              <span class="align-super">*</span>
            ) : null}
            {formState.errors?.planet.message}
          </div>
        </div>
      </div>
      <div class="pt-1">
        <label
          htmlFor="mission-name"
          class="block font-medium leading-6 after:ml-0.5 after:align-super after:text-xs after:content-['*']"
        >
          Mission Name
        </label>
        <input
          type="text"
          name="mission-name"
          id="mission-name"
          placeholder="Mission name goes here..."
          value={formState.mission_name}
          class="block w-full rounded-sm border-0 py-1.5 leading-6 shadow-sm placeholder:text-mars-base/75 focus:ring-2 focus:ring-mars-base"
          onChange={(e) =>
            dispatch({
              type: "CHANGE_MISSION_NAME",
              payload: e.currentTarget.value,
            })
          }
          onBlur={(e) => {
            if (e.currentTarget.value !== "") {
              dispatch({ type: "CLEAR_ERROR_MISSION_NAME_STATE" });
            }
          }}
        />
        <div class="text-xs text-red-700">
          {formState.errors?.mission_name.message ? (
            <span class="align-super">*</span>
          ) : null}
          {formState.errors?.mission_name.message}
        </div>
      </div>
      <div class="pt-1">
        <label
          htmlFor="rocket-name"
          class="block font-medium leading-6 after:ml-0.5 after:align-super after:text-xs after:content-['*']"
        >
          Rocket Name
        </label>
        <input
          type="text"
          name="rocket-name"
          id="rocket-name"
          value={formState.rocket_name}
          placeholder="Rocket name goes here..."
          class="block w-full rounded-sm border-0 py-1.5 leading-tight shadow-sm placeholder:text-mars-base/75 focus:ring-2 focus:ring-mars-base "
          onChange={(e) =>
            dispatch({
              type: "CHANGE_ROCKET_NAME",
              payload: e.currentTarget.value,
            })
          }
          onBlur={(e) => {
            if (e.currentTarget.value !== "") {
              dispatch({ type: "CLEAR_ERROR_ROCKET_NAME_STATE" });
            }
          }}
        />
        <p class="text-xs text-red-700">
          {formState.errors?.rocket_name.message ? <span>*</span> : null}
          {formState.errors?.rocket_name.message}
        </p>
      </div>
      <button
        type="submit"
        class="mt-4 w-full rounded-sm bg-mars-base px-1 py-2 text-sm font-semibold text-mars-lighter shadow-sm hover:bg-mars-base/90 disabled:cursor-auto disabled:bg-mars-base/20"
        disabled={isLoadingMutation}
      >
        Save
      </button>
    </form>
  );
}

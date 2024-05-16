// TODO: Look into breaking this reducer into smaller reducers

import { ActionType, StateType } from "../types";

// { ERROR_REDUCER, CLEAR_STATE, CHANGE_REDUCER}
export default function reducer(state: StateType, action: ActionType) {
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
    case "SET_ERROR_MISSION_NAME": {
      return {
        ...state,
        errors: {
          ...state.errors,
          mission_name: {
            message: action.payload,
          },
        },
      };
    }
    case "SET_ERROR_ROCKET_NAME": {
      return {
        ...state,
        errors: {
          ...state.errors,
          rocket_name: {
            message: action.payload,
          },
        },
      };
    }
    case "SET_ERROR_PLANET_NAME": {
      return {
        ...state,
        errors: {
          ...state.errors,
          planet: {
            message: action.payload,
          },
        },
      };
    }
    case "CLEAR_ERROR_PLANET_NAME_STATE": {
      return {
        ...state,
        errors: {
          ...state.errors,
          planet: {
            message: "",
          },
        },
      };
    }
    case "CLEAR_ERROR_MISSION_NAME_STATE": {
      return {
        ...state,
        errors: {
          ...state.errors,
          mission_name: {
            message: "",
          },
        },
      };
    }
    case "CLEAR_ERROR_ROCKET_NAME_STATE": {
      return {
        ...state,
        errors: {
          ...state.errors,
          rocket_name: {
            message: "",
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}

export type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launchDate: Date;
  destination: string;
  customer: Array<string>;
  upcoming: boolean;
  success: boolean;
};

export type SubmitLaunch = {
  mission: string;
  rocket: string;
  destination: string;
  launchDate: string;
};

export type Planet = {
  planet: string;
};

export type RequestSuccess = {
  success: true;
  data: Array<Planet>;
};

export type RequestFailed = {
  success: false;
  error: string;
};

export type RequestLaunch = {
  success: true;
  data: Array<Launch>;
};

export type Request = RequestSuccess | RequestFailed;

export type StateType = {
  date: string;
  mission_name: string;
  rocket_name: string;
  planet: string;
  errors?: {
    mission_name: {
      message: string;
    };
    rocket_name: {
      message: string;
    };
    planet: {
      message: string;
    };
  };
};

export type ActionType =
  | {
      type: "CHANGE_DATE";
      payload: string;
    }
  | {
      type: "CHANGE_MISSION_NAME";
      payload: string;
    }
  | {
      type: "CHANGE_ROCKET_NAME";
      payload: string;
    }
  | {
      type: "CHANGE_PLANET_NAME";
      payload: string;
    }
  | {
      type: "SET_ERROR_MISSION_NAME";
      payload: string;
    }
  | {
      type: "SET_ERROR_ROCKET_NAME";
      payload: string;
    }
  | {
      type: "SET_ERROR_PLANET_NAME";
      payload: string;
    }
  | {
      type: "CLEAR_ERROR_PLANET_NAME_STATE";
    }
  | {
      type: "CLEAR_ERROR_MISSION_NAME_STATE";
    }
  | {
      type: "CLEAR_ERROR_ROCKET_NAME_STATE";
    };

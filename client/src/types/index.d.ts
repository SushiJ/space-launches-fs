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

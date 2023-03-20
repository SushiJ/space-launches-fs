type Launch = {
  flightNumber: number;
  mission: string;
  rocket: string;
  launcDate: Date;
  destination: string;
  customer: Array<string>;
  upcoming: boolean;
  success: boolean;
};

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launcDate: new Date("Feb 25, 2025"),
  destination: "Kepler-442 b",
  customer: ["abc", "xyz"],
  upcoming: true,
  success: true,
};

const launches = new Map<number, Launch>();

launches.set(launch.flightNumber, launch);

export default launches;

import { Launch, LaunchRequest } from "../types";

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 25, 2025"),
  destination: "Kepler-442 b",
  customer: ["abc", "xyz"],
  upcoming: true,
  success: true,
};

const launches = new Map<number, Launch>();

launches.set(launch.flightNumber, launch);

export function getAllLaunches() {
  return Array.from(launches.values());
}

export function addNewLaunch(launch: LaunchRequest) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["abc", "xyz"],
      upcoming: true,
      success: true,
    })
  );
}
export function findLaunchesById(id: number) {
  return launches.has(id);
}
function getLaunchById(id: number) {
  return launches.get(id);
}

export function AboutLaunchById(id: number) {
  const launch = getLaunchById(id);
  launch!.success = false;
  launch!.upcoming = false;
  return launch;
}

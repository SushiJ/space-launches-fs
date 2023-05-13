import launchesModel from "../schema/launches";
import { Launch, LaunchRequest } from "../types";

const DEFAULT_FLIGHT_NUMBER = 100;

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

export async function getAllLaunches() {
  try {
    const launches = await launchesModel.find({}, { _id: 0, __v: 0 });
    return launches;
  } catch (e) {
    console.log(e);
    return;
  }
}

export async function addNewLaunch(launch: LaunchRequest) {
  const newFlightNumber = (await getLatestFlightNumber()) + 1;

  const newLaunch = Object.assign(launch, {
    flightNumber: newFlightNumber,
    customer: ["abc", "xyz"],
    upcoming: true,
    success: true,
  });

  await saveLaunch(newLaunch);
}

async function getLatestFlightNumber(): Promise<number> {
  const latestLaunch = await launchesModel.findOne().sort("-flightNumber");

  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }
  return latestLaunch.flightNumber;
}

export async function findLaunchesById(id: number) {
  return await launchesModel.findOne({
    flightNumber: id,
  });
}

async function saveLaunch(launch: Launch) {
  await launchesModel.findOneAndUpdate(
    {
      flightNumber: launch.flightNumber,
    },
    launch,
    {
      upsert: true,
    }
  );
}

saveLaunch(launch)
  .then(() => console.log("Success added"))
  .catch((e) => console.log(e));

export async function aboutLaunchById(id: number) {
  const launch = await launchesModel.updateOne(
    {
      flightNumber: id,
    },
    {
      upcoming: false,
      success: false,
    }
  );
  return launch.acknowledged && launch.modifiedCount === 1;
}

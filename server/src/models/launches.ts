import launchesModel from "../schema/launches";
import { Launch, LaunchRequest } from "../types";
import axios from "axios";

const DEFAULT_FLIGHT_NUMBER = 100;
const SPACEX_API_URL = "https://api.spacexdata.com/v4/launches/query";

export class Launches {
  async getAllLaunches(limit: number, skip: number) {
    const launches = await launchesModel
      .find({}, { _id: 0, __v: 0 })
      .sort({ flightNumber: 1 })
      .skip(skip)
      .limit(limit);
    return launches;
  }

  async addNewLaunch(launch: LaunchRequest) {
    const newFlightNumber = (await this.getLatestFlightNumber()) + 1;

    const newLaunch = Object.assign(launch, {
      flightNumber: newFlightNumber,
      customers: ["abc", "xyz"],
      upcoming: true,
      success: true,
    });

    await this.saveLaunch(newLaunch);
  }

  async getLatestFlightNumber(): Promise<number> {
    const latestLaunch = await launchesModel.findOne().sort("-flightNumber");

    if (!latestLaunch) {
      return DEFAULT_FLIGHT_NUMBER;
    }
    return latestLaunch.flightNumber;
  }
  async findLaunchesById(id: number) {
    return await launchesModel.findOne({
      flightNumber: id,
    });
  }
  async saveLaunch(launch: Launch) {
    await launchesModel.findOneAndUpdate(
      {
        flightNumber: launch.flightNumber,
      },
      launch,
      {
        upsert: true,
      },
    );
  }
  async abortLaunchById(id: number) {
    const launch = await launchesModel.updateOne(
      {
        flightNumber: id,
      },
      {
        upcoming: false,
        success: false,
      },
    );
    return launch.acknowledged && launch.modifiedCount === 1;
  }

  async findLaunch(filter: any) {
    return await launchesModel.findOne(filter);
  }
  async loadSpaceXData() {
    const firstLaunch = await this.findLaunch({
      flightNumber: 1,
      rocket: "Falcon 1",
      mission: "FalconSat",
    });
    if (firstLaunch) {
      console.log("SpaceX Data Already exisits");
    } else {
      await this.populateLaunches();
    }
  }

  async populateLaunches() {
    const { data } = await axios.post(SPACEX_API_URL, {
      query: {},
      options: {
        pagination: false,
        populate: [
          {
            path: "rocket",
            select: {
              name: 1,
            },
          },
          {
            path: "payloads",
            select: {
              customers: 1,
            },
          },
        ],
      },
    });

    if (!data) {
      throw new Error("spaceXData download failed");
    }

    const launchDocs = data.docs;

    for (let launchDoc of launchDocs) {
      const payloads = launchDoc["payloads"];
      const customers = payloads.flatMap((payload: any) => {
        return payload["customers"];
      });

      const launch = {
        flightNumber: launchDoc["flight_number"] as number,
        mission: launchDoc["name"] as string,
        rocket: launchDoc["rocket"]["name"] as string,
        launchDate: launchDoc["date_local"] as Date,
        upcoming: launchDoc["upcoming"] as boolean,
        success: launchDoc["success"] as boolean,
        customers: customers as Array<string>,
      };

      await this.saveLaunch(launch);
    }
  }
}

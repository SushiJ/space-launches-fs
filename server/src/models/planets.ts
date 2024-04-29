import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { PlanetData } from "../types";
import planets from "../schema/planets";
import { logError, logInfo } from "../utils/colorLogs";

const CSV_FILE = path.join(__dirname, "../../", "data", "kep_data.csv");

export class PlanetsDatabase {
  // csv can be downloaded from https://exoplanetarchive.ipac.caltech.edu/docs/data.html
  // Download the KOI table
  private planetIsHabitable(planet: PlanetData) {
    return (
      planet["koi_disposition"] === "CONFIRMED" &&
      parseInt(planet["koi_insol"]) > 0.36 &&
      parseInt(planet["koi_insol"]) < 1.11 &&
      parseInt(planet["koi_prad"]) < 1.6
    );
  }

  private async savePlanet(data: PlanetData) {
    try {
      await planets.updateOne(
        {
          planet: data.kepler_name,
        },
        {
          planet: data.kepler_name,
        },
        {
          upsert: true,
        },
      );
    } catch (e: any) {
      logError("Unable to save the planet: ", e);
    }
  }

  async parseCsv() {
    return new Promise<void>((resolve, reject) => {
      fs.createReadStream(CSV_FILE)
        .pipe(
          parse({
            comment: "#",
            columns: true,
          }),
        )
        .on("data", async (data) => {
          if (this.planetIsHabitable(data)) {
            this.savePlanet(data);
          }
        })
        .on("error", (err) => reject(err))
        .on("end", () => {
          planets
            .find({})
            .then((data) => logInfo(data.length.toString()))
            .catch((e) => logError(e));
          resolve();
        });
    });
  }
}

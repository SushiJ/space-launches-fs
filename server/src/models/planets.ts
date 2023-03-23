import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { PlanetData } from "../types/types";

export const habitable: PlanetData[] = [];
export let planetNames: Array<string> = [];

const CSV_FILE = path.join(__dirname, "..", "data", "kep_data.csv");

// csv can be downloaded from https://exoplanetarchive.ipac.caltech.edu/docs/data.html
// Download the KOI table
function planetIsHabitable(planet: PlanetData) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    parseInt(planet["koi_insol"]) > 0.36 &&
    parseInt(planet["koi_insol"]) < 1.11 &&
    parseInt(planet["koi_prad"]) < 1.6
  );
}

type PromiseType = {
  habitable: Array<PlanetData>;
  planetNames: Array<string>;
};

export function parseCsv() {
  return new Promise<PromiseType>((resolve, reject) => {
    fs.createReadStream(CSV_FILE)
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (planetIsHabitable(data)) {
          habitable.push(data);
        }
      })
      .on("error", (err) => reject(err))
      .on("end", () => {
        planetNames = habitable.map((planet) => planet["kepler_name"]);
        resolve({ habitable, planetNames });
      });
  });
}
import fs from "fs";
import path from "path";
import { parse } from "csv-parse";
import { PlanetData } from "../types";
import planets from "../schema/planets";

const CSV_FILE = path.join(__dirname, "../../", "data", "kep_data.csv");

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

async function savePlanet(data: PlanetData) {
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
      }
    );
  } catch (e) {
    console.error("Unable to save the planet: ", e);
  }
}
export function parseCsv() {
  return new Promise<void>((resolve, reject) => {
    fs.createReadStream(CSV_FILE)
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (planetIsHabitable(data)) {
          savePlanet(data);
        }
      })
      .on("error", (err) => reject(err))
      .on("end", () => {
        planets
          .find({})
          .then((data) => console.log(data.length))
          .catch((e) => console.log(e));
        resolve();
      });
  });
}

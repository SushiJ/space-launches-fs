import { MongoClient } from "mongodb";
// import { PlanetsDatabase } from "../models/planets";
// import { Launches } from "../models/launches";
import { logError, logInfo } from "./colorLogs";

const uri = "mongodb://mongo:mongo@localhost:27017/nasa";
const client = new MongoClient(uri, {
  auth: {
    username: "",
    password: "",
  },
});

async function seedDB() {
  // Connection URL
  await client.connect().catch((e) => logError(e));
  console.log("Connected correctly to server");

  const planets = client.db("nasa").collection("planets");
  const launches = client.db("nasa").collection("launches");

  // The drop() command destroys all data from a collection.
  // Make sure you run it against proper database and collection.
  // planets.drop();
  // launches.drop()

  // const seedLaunchObj = new Launches();
  // const seedPlanetObj = new PlanetsDatabase();

  // await seedLaunchObj.loadSpaceXData().catch((e) => logError(e));
  // await seedPlanetObj.parseCsv().catch((e) => logError(e));

  console.log(await planets.findOne({}));
  console.log(await launches.findOne({}));
}

seedDB()
  .then(() => logInfo("Seeded"))
  .catch((e) => logError(e))
  .finally(() => client.close());

// .then(() => {
//   console.log("connected To DB");
//   loadSpaceXData()
//     .then(() => {
//       console.log("Successfully populated launches");
//     })
//     .catch((e) => {
//       console.log("Failed to populate launches", e);
//     });
// parseCsv()
//     .then(() => {
//       console.log("Parsed");
//       console.log(`Server up at http://localhost${PORT}`);
//     })
//     .catch((e) => console.log(e));
// })

import { MongoClient } from "mongodb";

const uri = "mongodb://mongo:mongo@localhost:27017/nasa";
const client = new MongoClient(uri, {
  auth: {
    username: "",
    password: "",
  },
});

async function seedDB() {
  // Connection URL
  await client.connect().catch((e) => console.error(e));
  console.log("Connected correctly to server");

  const planets = client.db("nasa").collection("planets");
  const launches = client.db("nasa").collection("launches");

  // The drop() command destroys all data from a collection.
  // Make sure you run it against proper database and collection.
  // planets.drop();
  // launches.drop()
  console.log(planets.find({}));
  console.log(launches.find({}));
}

seedDB()
  // .then(() => console.log("Seeded"))
  .catch((e) => console.error(e))
  .finally(() => client.close());

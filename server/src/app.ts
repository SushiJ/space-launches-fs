import express from "express";
import morgan from "morgan";
import cors from "cors";
// import { setLogLevel } from "@typegoose/typegoose";
// setLogLevel("TRACE");
import { router } from "./routes";
import connectDB from "./utils/dbConnect";
import { parseCsv } from "./models/planets";
import { loadSpaceXData } from "./models/launches";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(router.planetsRouter).use(router.launchesRouter);

app.listen(PORT, () => {
  connectDB()
    .then(() => {
      console.log("connected To DB");
      loadSpaceXData()
        .then(() => {
          console.log("Successfully populated launches");
        })
        .catch((e) => {
          console.log("Failed to populate launches", e);
        });
      parseCsv()
        .then(() => {
          console.log("Parsed");
          console.log(`Server up at http://localhost${PORT}`);
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.error("Failed to connect", e));
});

export default app;

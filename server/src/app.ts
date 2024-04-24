import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./utils/dbConnect";
import { errorHandler } from "./utils/ErrorHandler";
import { logError } from "./utils/colorLogs";
import planetsRouter from "./routes/planets";
import launchesRouter from "./routes/launches";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(morgan("combined"));
app.use(express.json());

// INFO: ROUTER
app.use(planetsRouter);
app.use(launchesRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log("Server up", PORT);
  await connectDB().catch((e) => logError("Couldn't connect to DB", e));
});

export default app;

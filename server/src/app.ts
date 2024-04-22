import express from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes";
import connectDB from "./utils/dbConnect";
import { errorHandler } from "./utils/ErrorHandler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(morgan("combined"));
app.use(express.json());
app.use(router.planetsRouter).use(router.launchesRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log("Server up", PORT);
  await connectDB();
});

export default app;

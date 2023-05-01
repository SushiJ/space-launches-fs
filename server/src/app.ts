import express from "express";
import { router } from "./routes";
import cors from "cors";
import { parseCsv } from "./models/planets";
import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(router.planetsRouter);
app.use(router.launchesRouter);

app.listen(PORT, async () => {
  await parseCsv();
});

export default app;

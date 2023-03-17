import express, { Request, Response } from "express";
import router from "./routes/planets/planets";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.get("/", (_req: Request, res: Response) => {
  res.sendStatus(200);
});
app.listen(PORT, () => {
  console.log(`Live at https://localhost:${PORT}`);
});

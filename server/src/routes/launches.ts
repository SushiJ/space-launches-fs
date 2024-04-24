import { Router } from "express";
import {
  httpAbortLaunch,
  httpGetAllLaunches,
  httpPostNewLaunches,
} from "../controllers/launches.controller";
import { validatePostRequest } from "../middleware/validatePostRequest";

const launchesRouter = Router();

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", validatePostRequest, httpPostNewLaunches);
launchesRouter.delete("/launches/:id", httpAbortLaunch);
export default launchesRouter;

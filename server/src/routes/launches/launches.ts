import { Router } from "express";
import { httpGetAllLaunches, httpPostNewLaunches } from "./launches.controller";

const launchesRouter = Router();

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", httpPostNewLaunches);

export default launchesRouter;

import { Router } from "express";
import { httpGetAllLaunches } from "./launches.controller";

const launchesRouter = Router();

launchesRouter.get("/launches", httpGetAllLaunches);

export default launchesRouter;

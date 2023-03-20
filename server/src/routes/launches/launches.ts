import { Router } from "express";
import { getAllLaunches } from "./launches.controller";

const launchesRouter = Router();

launchesRouter.get("/launches", getAllLaunches);

export default launchesRouter;

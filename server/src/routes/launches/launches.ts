import { Router } from "express";
import { httpGetAllLaunches, httpPostNewLaunches } from "./launches.controller";
import { validatePostRequest } from "../../middleware/validatePostRequest";

const launchesRouter = Router();

launchesRouter.get("/launches", httpGetAllLaunches);
launchesRouter.post("/launches", validatePostRequest, httpPostNewLaunches);

export default launchesRouter;

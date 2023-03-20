import { Router } from "express";
import { getAllPlanets } from "./planets.controller";

const planetsRouter = Router();

planetsRouter.get("/planets", getAllPlanets);

export default planetsRouter;

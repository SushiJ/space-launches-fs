import { Router } from "express";
import { getAllPlanets } from "./planets.controller";

const router = Router();

router.get("/planets", getAllPlanets);

export default router;

import { Request, Response } from "express";
import { habitable, planetNames } from "../../models/planets";

export function getAllPlanets(_req: Request, res: Response) {
  return res.status(200).json({ habitable, planetNames });
}

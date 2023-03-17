import { Request, Response } from "express";

const planets: any = [];

export function getAllPlanets(_req: Request, res: Response) {
  return res.status(200).json(planets);
}

import { Request, Response } from "express";
import launches from "../../models/launches";

export function getAllLaunches(_req: Request, res: Response) {
  return res.status(200).json(Array.from(launches.values()));
}

import { Request, Response } from "express";
import { getAllLaunches } from "../../models/launches";

export function httpGetAllLaunches(_req: Request, res: Response) {
  return res.status(200).json(getAllLaunches());
}

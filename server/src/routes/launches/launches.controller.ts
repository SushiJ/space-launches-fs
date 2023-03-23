import { Request, Response } from "express";
import { addNewLaunch, getAllLaunches } from "../../models/launches";
import { LaunchRequest } from "../../types";

export function httpGetAllLaunches(_req: Request, res: Response) {
  return res.status(200).json(getAllLaunches());
}
export function httpPostNewLaunches(req: Request, res: Response) {
  const newLaunch = req.body as LaunchRequest;
  addNewLaunch(newLaunch);
  return res.status(201).json(newLaunch);
}

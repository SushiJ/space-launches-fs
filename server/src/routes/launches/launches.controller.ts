import { Request, Response } from "express";
import {
  AboutLaunchById,
  addNewLaunch,
  findLaunchesById,
  getAllLaunches,
} from "../../models/launches";
import { LaunchRequest } from "../../types";

export function httpGetAllLaunches(_req: Request, res: Response) {
  return res.status(200).json(getAllLaunches());
}
export function httpPostNewLaunches(req: Request, res: Response) {
  const newLaunch = req.body as LaunchRequest;
  addNewLaunch(newLaunch);
  return res.status(201).json(newLaunch);
}
export function httpAbortLaunch(req: Request, res: Response) {
  const { id } = req.params;

  const launch = findLaunchesById(parseInt(id));
  if (!launch) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
  const abortedLaunch = AboutLaunchById(parseInt(id));
  return res.status(200).json(abortedLaunch);
}

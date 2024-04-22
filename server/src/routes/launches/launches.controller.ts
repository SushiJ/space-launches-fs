import { NextFunction, Request, Response } from "express";
import { LaunchRequest } from "../../types";
import { getPagination } from "../../utils/paginate";
import { Launches } from "../../models/launches";

const launchesModel = new Launches();

export async function httpGetAllLaunches(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const { skip, limit } = getPagination(
      req.query as { page: string; limit: string },
    );
    const result = await launchesModel.getAllLaunches(limit, skip);
    const what = null;

    if (!what) {
      res.status(400);
      throw new Error("This an error yo");
    }

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    next(e);
  }
}

export async function httpPostNewLaunches(req: Request, res: Response) {
  const newLaunch = req.body as LaunchRequest;
  await launchesModel.addNewLaunch(newLaunch);
  return res.status(201).json({ success: true, data: newLaunch });
}

export async function httpAbortLaunch(req: Request, res: Response) {
  const { id } = req.params;

  const launch = await launchesModel.findLaunchesById(Number(id));
  if (!launch) {
    return res.status(404).json({ error: "Launch not found" });
  }
  const abortedLaunch = await launchesModel.abortLaunchById(parseInt(id));
  if (!abortedLaunch) {
    return res.status(400).json({
      success: false,
      error: "Failed to abort",
    });
  }
  return res.status(200).json({
    success: true,
  });
}

import { Request, Response } from "express";
import {
  abortLaunchById,
  addNewLaunch,
  findLaunchesById,
  getAllLaunches,
} from "../../models/launches";
import { LaunchRequest } from "../../types";
import { getPagination } from "../../utils/paginate";

export async function httpGetAllLaunches(req: Request, res: Response) {
  const { skip, limit } = getPagination(
    req.query as { page: string; limit: string }
  );
  return res.status(200).json({
    success: true,
    data: await getAllLaunches(limit, skip),
  });
}
export async function httpPostNewLaunches(req: Request, res: Response) {
  const newLaunch = req.body as LaunchRequest;
  await addNewLaunch(newLaunch);
  return res.status(201).json({ success: true, data: newLaunch });
}
export async function httpAbortLaunch(req: Request, res: Response) {
  const { id } = req.params;

  const launch = await findLaunchesById(Number(id));
  if (!launch) {
    return res.status(404).json({
      success: false,
      error: "Launch not found",
    });
  }
  const abortedLaunch = await abortLaunchById(parseInt(id));
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

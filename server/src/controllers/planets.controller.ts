import { type NextFunction, type Request, type Response } from "express";
import planets from "../schema/planets";

export async function getAllPlanets(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const result = await planets.find({}, { _id: 0, __v: 0 });
    res.status(200).json({ success: true, data: result });
  } catch (e) {
    next({ status: 500, message: e });
  }
}

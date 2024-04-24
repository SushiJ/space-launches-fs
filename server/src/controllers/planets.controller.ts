import { Request, Response } from "express";
import planets from "../schema/planets";

export function getAllPlanets(_req: Request, res: Response) {
  planets
    .find({}, { _id: 0, __v: 0 })
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((e) => {
      return res.status(500).json({ success: false, error: e });
    });
}

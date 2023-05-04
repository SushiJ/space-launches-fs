import { Request, Response } from "express";
import planets from "../../schema/planets";

export function getAllPlanets(_req: Request, res: Response) {
  planets
    .find({})
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
}

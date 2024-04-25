import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const reqSchema = z.object({
  mission: z
    .string({
      required_error: "Mission name is required",
    })
    .min(6, {
      message: "Mission Name should be at least 6 character long",
    }),
  launchDate: z
    .string({
      required_error: "Launch date is required",
    })
    .datetime({
      message: "Launch Date is not a valid date",
    }),
  destination: z
    .string({
      required_error: "Destination / target is required",
    })
    .min(1, {
      message: "Destination name can't be empty",
    }),
  rocket: z
    .string({
      required_error: "Rocket name is required",
    })
    .min(1, {
      message: "Rocket name can't be empty",
    }),
});

export function validatePostRequest(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const validateReqest = reqSchema.safeParse(req.body);
  if (!validateReqest.success) {
    const message = validateReqest.error.issues
      .map((issue) => issue.message)
      .join(", ");

    return next({ status: 400, message });
  }
  return next();
}

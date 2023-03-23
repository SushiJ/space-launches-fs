import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const reqSchema = z.object({
  mission: z.string({
    required_error: "Mission name is required",
  }),
  launchDate: z
    .string({
      required_error: "Launch Date is required",
    })
    .datetime({
      message: "Launch Date is not a valid date",
    }),
  destination: z.string({
    required_error: "Destination is required",
  }),
  rocket: z.string({
    required_error: "Rocket name is required",
  }),
});

export function validatePostRequest(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const validateReqest = reqSchema.safeParse(req.body);
  if (!validateReqest.success) {
    const message = validateReqest.error.issues.map((issue) => {
      return issue.message;
    });
    return res.status(400).json({ message });
  }
  return next();
}

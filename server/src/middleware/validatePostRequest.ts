import { NextFunction, Request, Response } from "express";
import { z } from "zod";

const reqSchema = z.object({
  mission: z.string().min(6, {
    message: "Mission Name should be at least 6 character long",
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
    const message = validateReqest.error.issues.map((issue) => issue.message);
    return res.status(400).json({ error: message.toString() });
  }
  return next();
}

import { type Response, type Request, type NextFunction } from "express";
import { logError } from "./colorLogs";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errStatus = err.status || 500;
  const errMsg = err.message || "Something went wrong";

  logError(errMsg, err.stack);

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

import { type Response, type Request, type NextFunction } from "express";

const red = "\x1b[31m";
// const green = "\\x1b[32m";
const reset = "\x1b[0m";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  console.error(red + "[ERROR]:" + reset, errMsg, err.stack);

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

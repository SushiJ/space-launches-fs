import { type NextFunction, type Response, type Request } from "express";

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.info("[INFO]: Middleware Error Handling");
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";
  return res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

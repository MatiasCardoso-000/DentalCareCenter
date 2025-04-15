import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Extend the Request interface to include the 'user' property
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export const authRequired = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies;

  if (!token) {
    res.status(401).json({
      message: "No token, authorization",
    });

    return;
  }
  jwt.verify(token, "secret", (err: any, user: any) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

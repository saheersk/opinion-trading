import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { SECRET_KEY } from "../config";

export const verifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded: any = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.userId);

    if (!user || user.role !== "admin") return res.status(403).json({ error: "Forbidden" });

    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

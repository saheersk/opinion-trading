import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config";

export const generateToken = (userId: string, role: string) => {
  return jwt.sign({ userId, role }, SECRET_KEY!, { expiresIn: "1h" });
};

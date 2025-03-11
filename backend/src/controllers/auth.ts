import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth";

export const register = async (req: Request, res: Response) => {
  try {
    const data = await registerUser(
      req.body.username,
      req.body.email,
      req.body.password
    );
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = await loginUser(req.body.email, req.body.password);
    res.json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

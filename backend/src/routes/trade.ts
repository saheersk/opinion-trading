import express from "express";
import { createTrade } from "../controllers/trade";

const router = express.Router();

router.post("/", createTrade);

export default router;

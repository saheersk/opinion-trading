import express from "express";
import { createTrade, fetchUserTrades } from "../controllers/trade";

const router = express.Router();

router.post("/", createTrade);
router.get("/user/:userId", fetchUserTrades);

export default router;

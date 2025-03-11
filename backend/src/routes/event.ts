import express from "express";
import { fetchEvents, addEvent } from "../controllers/event";
const router = express.Router();

router.get("/", fetchEvents);
router.post("/", addEvent);

export default router;

import express from "express";
import { createTelecom, getTelecom } from "../Controller/telecomController.js";

const router = express.Router();

// POST -> Create new telecom entry
router.post("/sent", createTelecom);

// GET -> Fetch all telecom entries
router.get("/show", getTelecom);

export default router;

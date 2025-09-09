import express from "express";
import { createCareer, getCareers } from "../Controller/careerController.js";

const router = express.Router();

router.post("/sent", createCareer);   // POST /api/careers
router.get("/show", getCareers);      // GET /api/careers

export default router;

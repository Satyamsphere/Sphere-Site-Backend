import express from "express";
import { createKnowledge, getKnowledge } from "../Controller/knowledgeController.js";

const router = express.Router();

router.post("/sent", createKnowledge);        // POST /api/knowledge
router.get("/show", getKnowledge);            // GET  /api/knowledge


export default router;

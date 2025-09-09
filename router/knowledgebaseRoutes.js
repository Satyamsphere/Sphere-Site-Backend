import express from "express";
import { createKnowledgebase, getKnowledgebase } from "../Controller/KnowledgebaseController.js";

const router = express.Router();

// POST -> Create new entry
router.post("/sent", createKnowledgebase);

// GET -> Fetch all entries
router.get("/show", getKnowledgebase);


export default router;

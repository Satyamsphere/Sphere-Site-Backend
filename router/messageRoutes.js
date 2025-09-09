import express from "express";
import { createMessage, getMessages } from "../Controller/messageController.js";

const router = express.Router();

router.post("/sent", createMessage);  // POST /api/messages
router.get("/show", getMessages);     // GET /api/messages

export default router;

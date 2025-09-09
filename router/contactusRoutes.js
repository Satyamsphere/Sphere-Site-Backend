import express from "express";
import { createContact, getContacts } from "../Controller/contactusController.js";

const router = express.Router();

// POST -> Create new contact message
router.post("/sent", createContact);

// GET -> Fetch all contact messages
router.get("/show", getContacts);



export default router;

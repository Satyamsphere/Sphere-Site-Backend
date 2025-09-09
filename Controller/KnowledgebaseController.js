import Knowledgebase from "../Modal/Knowledgebase.js";

// Create new Knowledgebase entry
export const createKnowledgebase = async (req, res) => {
  try {
    const { Name, email, mobileNumber } = req.body;

    if (!Name || !email || !mobileNumber) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newEntry = new Knowledgebase({
      Name,
      email,
      mobileNumber,
    });

    await newEntry.save();
    res.status(201).json({ success: true, data: newEntry });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all Knowledgebase entries
export const getKnowledgebase = async (req, res) => {
  try {
    const entries = await Knowledgebase.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: entries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


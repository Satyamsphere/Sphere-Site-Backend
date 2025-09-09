import Knowledge from "../Modal/Knowledge.js";

// Create new Knowledge entry
export const createKnowledge = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber } = req.body;

    if (!firstName || !lastName || !email || !mobileNumber) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newKnowledge = new Knowledge({
      firstName,
      lastName,
      email,
      mobileNumber,
    });

    await newKnowledge.save();
    res.status(201).json({ success: true, data: newKnowledge });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all Knowledge entries
export const getKnowledge = async (req, res) => {
  try {
    const knowledgeList = await Knowledge.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: knowledgeList });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



import Career from "../Modal/Career.js";

// Create new career entry
export const createCareer = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, message } = req.body;

    if (!firstName || !lastName || !email || !mobileNumber || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newCareer = new Career({
      firstName,
      lastName,
      email,
      mobileNumber,
      message,
    });

    await newCareer.save();
    res.status(201).json({ success: true, data: newCareer });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all career entries
export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: careers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

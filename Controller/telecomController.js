import Telecom from "../Modal/Telecom.js";

// Create new Telecom entry
export const createTelecom = async (req, res) => {
  try {
    const { firstName,
      lastName,
      email,
      mobileNumber,
      findus,
      services,
      teamsize,
      company,
      message } = req.body;

    if ( !email || !mobileNumber) {
      return res.status(400).json({ error: "this fields are required only" });
    }

    const newTelecom = new Telecom({
      firstName,
      lastName,
      email,
      mobileNumber,
      findus,
      services,
      teamsize,
      company,
      message,
    });

    await newTelecom.save();
    res.status(201).json({ success: true, data: newTelecom });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all Telecom messages
export const getTelecom = async (req, res) => {
  try {
    const messages = await Telecom.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

import Contactus from "../Modal/Contactus.js";

// Create new contact entry
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, message } = req.body;

    if (!firstName || !lastName || !email || !mobileNumber || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contactus({
      firstName,
      lastName,
      email,
      mobileNumber,
      message,
    });

    await newContact.save();
    res.status(201).json({ success: true, data: newContact });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all contact messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contactus.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};



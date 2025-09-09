import Message from "../Modal/Message.js";

// Create new message
export const createMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, mobileNumber, message } = req.body;

    if (!firstName || !lastName || !email || !mobileNumber || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newMessage = new Message({
      firstName,
      lastName,
      email,
      mobileNumber,
      message,
    });

    await newMessage.save();
    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all messages
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

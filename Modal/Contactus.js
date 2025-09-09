import mongoose from "mongoose";

const ContactusSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String,  trim: true },
  email: { type: String,  lowercase: true },
  mobileNumber: { type: String, required: true },
  message: { type: String, },
}, { timestamps: true });

const Contactus = mongoose.model("Contactus", ContactusSchema);

export default Contactus;

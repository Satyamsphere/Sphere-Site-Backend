import mongoose from "mongoose";

const careerSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String,  trim: true },
  email: { type: String,  lowercase: true },
  mobileNumber: { type: String, required: true },
  message: { type: String, },
}, { timestamps: true });

const Career = mongoose.model("Career", careerSchema);

export default Career;

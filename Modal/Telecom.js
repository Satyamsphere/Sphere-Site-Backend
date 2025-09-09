import mongoose from "mongoose";

const telecomSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, required: true, lowercase: true },
  mobileNumber: { type: String, required: true },
  findus: { typr: String },
  services: { type: String },
  teamsize: { type: String },
  company: { type: String },

  message: { type: String },
}, { timestamps: true });

const Telecom = mongoose.model("Telecom", telecomSchema);

export default Telecom;

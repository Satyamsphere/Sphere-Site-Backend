import mongoose from "mongoose";

const KnowledgeSchema = new mongoose.Schema({
  firstName: { type: String,  trim: true },
  lastName: { type: String, trim: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
 
}, { timestamps: true });

const Knowledge = mongoose.model("Knowledge", KnowledgeSchema);

export default Knowledge;

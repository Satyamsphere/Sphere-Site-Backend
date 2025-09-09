import mongoose from "mongoose";

const KnowledgebaseSchema = new mongoose.Schema({
  Name: { type: String,  trim: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
 
}, { timestamps: true });

const Knowledgebase = mongoose.model("Knowledgebase", KnowledgebaseSchema);

export default Knowledgebase;

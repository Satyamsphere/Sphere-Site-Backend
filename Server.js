import express from "express";
import dotenv from "dotenv";
import connectDB from "../Sphere Site Backend/DB Conn/dbconn.js";
import telecomRoutes from "./router/telecomRoutes.js";
import careerRoutes from "../Sphere Site Backend/router/careerRoutes.js";
import knowledgeRoutes from "../Sphere Site Backend/router/knowledgeRoutes.js"
import Knowledgebase from "../Sphere Site Backend/router/knowledgebaseRoutes.js";
import contactusRoutes from "../Sphere Site Backend/router/contactusRoutes.js"
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/telecom", telecomRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/knowledge",knowledgeRoutes);
app.use('/api/knowledgebase',Knowledgebase);
app.use('/api/contactus',contactusRoutes)

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
import connectDB from "../Sphere Site Backend/DB Conn/dbconn.js";
import messageRoutes from "../Sphere Site Backend/router/messageRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", messageRoutes);

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

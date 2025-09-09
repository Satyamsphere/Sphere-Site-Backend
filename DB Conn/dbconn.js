import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();

//const __dirname = path.dirname(__filename);


const connectDB = async ()=> {

    try {
        await mongoose.connect(
            process.env.MONGO_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            }
        )
         console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
    }
}

export default connectDB;
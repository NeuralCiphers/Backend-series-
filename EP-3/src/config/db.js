import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected successfully");
    }
    catch (err) {
        console.log("Error while connecting the DB", err);
        process.exit(1); // exit the process
    }

};

export default connectDB;
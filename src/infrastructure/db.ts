import mongoose from "mongoose";

export const connectDB=async()=>{

    try {
        const connectionString=process.env.MONGODB_URI;
        if(!connectionString){
            throw new Error("Please add the connection string")
        }
        await mongoose.connect(connectionString);
        console.log("DB connection successfull.");
    } catch (error) {
        console.log("DB connection fail.");
        console.log(error);
    }
}
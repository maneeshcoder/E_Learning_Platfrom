import mongoose from "mongoose"
const url = process.env.DB;
export const connectDb = async()=>{
    try{
        await mongoose.connect(url);
        console.log("connected");
    } catch (error){
        console.log(error);
    }
};
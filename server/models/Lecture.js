import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Courses",
        required:true
    },
    createdAt:{
        type:String,
        required:true
    }
});

export const Lecture = mongoose.model("Lecture",schema);
import { timeStamp } from "console";
import mongoose from "mongoose";
import { type } from "os";

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user",
    },
    subscription:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    },
},{
    timeStamps:true,
});

export const User = mongoose.model("User",schema);
import mongoose from "mongoose";
import { Iuser } from "../interfaces/userInterface";


const userSchema: mongoose.Schema = new mongoose.Schema<Iuser>({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["admin","student"],
        required:true
    }

})

export const userModel =  mongoose.model<Iuser>("User", userSchema);
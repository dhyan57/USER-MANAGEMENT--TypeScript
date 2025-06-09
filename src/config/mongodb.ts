import mongoose from "mongoose";

export class MongoDB{
    private constructor(){

    }

    public static async connectDB():Promise<void>{
        try{
            const MONGODB_URI = process.env.MONGODB_URI;
            
            if (!MONGODB_URI) {
            console.error("❌ MONGODB_URI is not defined. Check your .env file.");
            throw new Error("No mongodb uri provided");
            }

            await mongoose.connect(MONGODB_URI)            
            console.log("Mongodb connected successsfully")
        }catch(err){
            console.log("Error while connecting to mongodb");
            throw err;
        }
    }

}
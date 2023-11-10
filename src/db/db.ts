import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
        console.log("db connected");
    }
    catch(error:any)
    {
        console.log(`cannot connect to database: ${error}`);
    }
}
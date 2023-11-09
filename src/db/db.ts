import mongoose from "mongoose";

export async function connect(){
    try{
        mongoose.connect("mongodb://0.0.0.0:27017/userDB");
        console.log("db connected");
    }
    catch(error:any)
    {
        console.log(`cannot connect to database: ${error}`);
    }
}
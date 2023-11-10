import { NextResponse, NextRequest } from "next/server";
import User from "@/models/user";
import { connect } from "@/db/db";

connect();

export async function GET(request:NextRequest)
{
    // console.log(request);
    try{
        // const reqBody = await request.json();
        // console.log(reqBody);
        // const {id} = reqBody;
        // console.log(id);
        
        // const user = await User.findOne({_id:id});
        
        // if(user)
        // {
        //     console.log(user);
        //     return NextResponse.json({success:true, message:"user found", user});
        // }

        // return NextResponse.json({success:false, message:"user not found"});

        
    }
    catch(error:any){
        return NextResponse.json({success:false, message:error});
    }
}
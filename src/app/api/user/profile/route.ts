import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/db/db";
import { getDataFromToken } from "@/helper/getDataFromToken";
import User from '@/models/user';

connect();

export async function GET(request:NextRequest)
{
    try{
        const userId:any = await getDataFromToken(request);
        const user = await User.findOne({_id:userId});

        return NextResponse.json({success:true, message:"user found", user});
    }
    catch(error:any){
        return NextResponse.json({success:false, message:"error while fetching data from jwt"});
    }
}

// export async function GET(request:NextRequest)
// {
//     try{
//         const userId:any = await getDataFromToken(request);
//         const user:any = await User.findOne({_id:userId}).select("-password");
//         return NextResponse.json({success:true, user, message:"user found"});
//     }
//     catch(error:any){
//         return NextResponse.json({success:false, message:`error fetching user data ${error}`});
//     }
// }
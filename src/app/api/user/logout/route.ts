import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest)
{
    try{
        const response = NextResponse.json({success:true, message:"logout successful"});
        response.cookies.set("token", "", {httpOnly:true});

        return response;
    }
    catch(error:any){
        return NextResponse.json({success:false, message:error});
    }
}
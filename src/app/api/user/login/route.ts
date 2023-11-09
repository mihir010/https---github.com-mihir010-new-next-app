import { connect } from "@/db/db";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request:NextRequest)
{
    try{
        const req = await request.json();
        const {email, username, password} = req;

        const user = await User.findOne({username});

        if(user)
        {
            const isValid = await bcryptjs.compare(password, user.password);

            if(isValid)
            {
                NextResponse.json({success:true, message:`welcome ${username}`});
            }

            NextResponse.json({success:false, message:"incorrect password"});
        }

        NextResponse.json({success:false, message:"user dne"});

    }
    catch(error:any){
        NextResponse.json({error:false, message:"cannot login"});
    }
    

    return 0;
}
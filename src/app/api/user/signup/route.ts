import {connect} from '@/db/db';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect();


export async function POST(request:NextRequest)
{
    try{
        const req = await request.json();
        const {username, email, password}:any = req;

        const user = await User.findOne({username});
        
        if(user)
        {
            NextResponse.json({success:false, message:"username should be unique"});
        }
        
        const user2 = await User.findOne({email});

        if(user2)
        {
            NextResponse.json({success:false, message:"email should be unique"});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const createUser = new User({
            username,
            email,
            password:hashedPassword
        });
        
        await createUser.save();

        return NextResponse.json({success:true, message:"user signed up successfully"});
    }
    catch(error:any)
    {
        NextResponse.json({success:false, message:error})
    }
}

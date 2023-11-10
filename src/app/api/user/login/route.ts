import { connect } from "@/db/db";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs';
import jwt from "jsonwebtoken";

connect();

export async function POST(request:NextRequest)
{
    try{
        const reqBody = await request.json();
        const {username, password} = reqBody;

        // console.log(reqBody);
        
        const user = await User.findOne({username});

        if(user)
        {
            const isValid = await bcryptjs.compare(password, user.password);
            

            if(isValid)
            {
                const response = NextResponse.json({success:true, message:`welcome ${username}`, user});

                const tokenData = {
                    id:user._id,
                    email:user.email,
                    username:user.username
                }

                const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {expiresIn:"1h"});

                response.cookies.set("token", token, {httpOnly:true});

                return response;
            }

            return NextResponse.json({success:false, message:"incorrect password"});
        }

        return NextResponse.json({success:false, message:"user dne"});

    }
    catch(error:any){
       return NextResponse.json({error:false, message:"cannot login: " + error});
    }
}

// export async function POST(request:NextRequest)
// {
//     try{

//         const reqBody = await request.json();
//         const {username, password} = reqBody;
        
//         const user = await User.findOne({username});
        
//         if(user)
//         {
//             const valid = await bcryptjs.compare(password, user.password);
            
//             if(valid)
//             {
//                 // console.log(`hi ${user.username}`);
//                 const response =  NextResponse.json({success:true, message:`welcome ${user.username}`});

//                 return response;
//             }

//             return NextResponse.json({success:false, message:"incorrect password"});
            
//         }

//         return NextResponse.json({success: false, message: "user does not exists"});
//     }
//     catch(error:any){
//         NextResponse.json({error:false, message:"cannot login"});
//     }
// }
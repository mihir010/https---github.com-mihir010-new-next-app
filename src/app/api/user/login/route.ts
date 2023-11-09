import { connect } from "@/db/db";
import User from "@/models/user";
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from 'bcryptjs';

connect();

export async function POST(request:NextRequest)
{
    try{
        const reqBody = await request.json();
        const {username, password} = reqBody;
        
        const user = await User.findOne({username});

        if(user)
        {
            const isValid = await bcryptjs.compare(password, user.password);
            

            if(isValid)
            {
                return NextResponse.json({success:true, message:`welcome ${username}`});
            }

            return NextResponse.json({success:false, message:"incorrect password"});
        }

        return NextResponse.json({success:false, message:"user dne"});

    }
    catch(error:any){
       return NextResponse.json({error:false, message:"cannot login"});
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
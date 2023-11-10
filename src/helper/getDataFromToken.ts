import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request:NextRequest)
{
    try{
        const token = request.cookies.get("token")?.value||"";
        const userData:any = jwt.verify(token, process.env.JWT_SECRET_KEY!);

        return userData.id;
    }
    catch(error:any){
        return {success:false, message:"error while extracting data from jwt"};
    }
}

// export const getDataFromToken = (request:NextRequest) =>{
//     try{
//         const token = request.cookies.get("token")?.value||"";
//         const decodedToken:any = jwt.verify(token, process.env.JWT_SECRET_KEY!);

//         // console.log(decodedToken.id);

//         return decodedToken.id;
//     }
//     catch(error){
//         return NextResponse.json({success:false, message:error});
//     }
// }

"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

export default function Login() {
    const router = useRouter();
    const [creds, setCreds] = useState<any>({
        username:"",
        password:""
    })

    const [loading, setLoading] = useState<any>(false);

    const onLogin = async () =>{
        try{
            // console.log(creds);
            setLoading(true);
            const response = await axios.post("/api/user/login", creds);
            // console.log(response);
            const user = response.data.user;
            
            if(response.data.success === true)
            {
                router.push(`/profile/${user._id}`);
            }
            
            alert(`${response.data.message}`);
        }
        catch(error:any)
        {
            alert(error);
        }
        setLoading(false);
    }



    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
                        <h1>{loading === true ? "Loading..." : ""}</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="username"
                            placeholder="Username" 
                            onChange={(e)=>setCreds({...creds, [e.target.name]:e.target.value})}/>

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" 
                            onChange={(e)=>setCreds({...creds, [e.target.name]:e.target.value})}/>

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={onLogin}>Login</button>
                    </div>
                    <div className="text-grey-dark mt-6">
                        {`Don't have an account?`}
                        <Link className="no-underline border-b border-blue text-blue" href="/signup">
                            Sign up
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    )
}

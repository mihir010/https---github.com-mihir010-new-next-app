"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';


export default function page() {
    const router = useRouter();
    const [user, setUser] = useState<any>({
        username:"",
        email:"",
        password:""
    });

    const [loading, setLoading] = useState<any>(false);

    const onSignup = async () =>{
        try{
            // console.log(user);
            setLoading(true);
            const response = await axios.post("/api/user/signup", user);
            if(response.data.success === true)
            {
                router.push("/");
            }

        }
        catch(error:any)
        {
            console.log("cannot signup" + error);
        }

        setLoading(false);
    }

    

    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-xl text-black w-full">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <h1>{loading === true ? "Loading..." : ""}</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="username"
                            placeholder="Username" 
                            onChange={(e)=>setUser({...user, [e.target.name]: e.target.value})}/>

                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" 
                            onChange={(e)=>setUser({...user, [e.target.name]: e.target.value})}
                            />

                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" 
                            onChange={(e)=>setUser({...user, [e.target.name]: e.target.value})}/>
                        {/* <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" /> */}

                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-black text-white hover:bg-green-dark focus:outline-none my-1"
                         onClick={onSignup}>Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue" href="/login">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    )
}

"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation';

export default function page({ params }: any) {
    const [creds, setCreds] = useState<any>({
        username: "",
        email: ""
    })

    const router = useRouter();

    // const getUserInfo = async () => {
    //     const id: any = { id: params.id };
    //     console.log(id);
    //     try {
    //         const response = await axios.get("/api/user/profile");
    //         console.log(response);

    //         if (response.data.success === true) {
    //             const user = response.data.user;
    //             setCreds(user)
    //             // console.log(user);
    //         }

    //     }
    //     catch (error: any) {
    //         console.log("error occurred while fetching user profile details");
    //     }
    // }

    // useEffect(() => {
    //     getUserInfo();
    // }, [])

    const logOut = async () =>{
        try{
            const response = await axios.get("/api/user/logout");
            router.push("/login");
        }
        catch(error:any){
            console.log(`error logging out: ${error}`);
        }
    }

    return (
        <div>
            <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        User database
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details and informations about user.
                    </p>
                </div>
                <div className="border-t border-gray-200">
                    <dl className='border-[2rem]'>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                username
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {creds.username}
                            </dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                ID
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {params.id}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                                Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {creds.email}
                            </dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:gap-4 sm:px-6">
                            <button className='bg-black text-white' onClick={logOut}>Logout</button>

                        </div>
                        {/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    Salary
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    $10,000
                </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                    About
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                </dd>
            </div> */}
                    </dl>
                </div>
            </div>
        </div>
    )
}

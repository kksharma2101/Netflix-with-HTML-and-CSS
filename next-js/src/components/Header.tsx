'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import img from "../../public/images/logo.png";
import poster from "../../public/images/header-image.png";
import "@/app/globals.css";


export const Header = () => {
    const [lang, setLang] = useState(false);
    return (
        <>
            <Image alt='' src={poster} className='absolute min-h-[30rem] h-screen w-full' />

            <div
                className="flex flex-col relative poster min-h-[30rem] h-screen w-full ">

                <div
                    className='flex items-center justify-between px-3 md:px-8 pt-4'>
                    <Link href="/">
                        <Image src={img} alt='logo' className='w-24 sm:w-32 md:w-36 ' />
                    </Link>
                    <div className=" flex items-center justify-between gap-4">
                        <button className='border border-[1px solid white] px-2 py-1 rounded-md bg-slate-900 text-white' onClick={() => setLang(true)}>{!lang ? "Eng ▲" : "HI ▼"}
                        </button>
                        <button className='bg-red-600 text-white py-1 px-4 rounded-md'>Sign In</button>
                    </div>
                </div>

                <div
                    className="flex flex-col gap-5 justify-center text-white text-center items-center mt-40 md:mt-50 px-2">

                    <h1
                        className="text-white text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">Unlimited movies, Tv shows and more</h1>

                    <p
                        className="text-2xl font-semibold"
                    >
                        Watch anywhere. Cancel anytime.</p>
                    <p
                        className="text-xl font-medium leading-normal"
                    >Ready to watch? Enter your email to create or restart your membership.</p>

                    <div
                        className="flex gap-8 md:gap-4 my-2 flex-wrap justify-center items-center"
                    >
                        <input type="text" placeholder='Email address'
                            className='py-2 px-3 rounded-sm border bg-transparent text-2xl ' />
                        <button
                            className="bg-red-600 px-3 text-3xl font-normal py-2 rounded-md"
                        >Get Started  ▷</button>
                    </div>
                </div>
            </div>
        </>
    )
}

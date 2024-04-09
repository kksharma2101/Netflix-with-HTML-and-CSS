'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import img from "../../public/images/logo.png";
import poster from "../../public/images/header-image.png";


export const Header = () => {
    const [lang, setLang] = useState(false);
    return (
        <>
            {/* background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%); */}
            <Image alt='' src={poster} width={1440} height={100} className='absolute bg-gradient-to-t' />
            <div className="flex flex-col justify-center relative">
                <div className='flex items-center justify-between px-1 md:px-8 pt-4'>
                    <Link href="/">
                        <Image src={img} width={100} height={100} alt='logo' className='' />
                    </Link>
                    <div className=" flex items-center justify-between gap-4">
                        <button className='border border-[1px solid white] px-2 py-1 rounded-md bg-slate-900 text-white' onClick={() => setLang(true)}>{!lang ? "Eng ▲" : "HI ▼"}
                        </button>
                        <button className='bg-red-600 text-white py-1 px-2 rounded-md'>Sign In</button>
                    </div>
                </div>
                <div className="flex flex-col gap-8 justify-center text-white items-center mt-40">
                    <h1 className="text-white text-5xl font-extrabold tracking-wide">Unlimited movies, Tv shows and more</h1>
                    <p className="text-3xl font-semibold">Watch anywhere. Cancel anytime.</p>
                    <p className="text-xl font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex gap-4">
                        <input type="text" name="" id="" />
                        <button className="bg-red-600 px-2 py-1 rounded-md">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

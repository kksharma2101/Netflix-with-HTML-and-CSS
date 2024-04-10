import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <div
            className='min-h-[20rem] text-start w-full h-full bg-black mt-2 py-16 text-[rgba(255,255,255,0.7)] px-5'
        >
            <h2 className="">Questions? Call <span className="cursor-pointer underline">000-800-919-1694</span></h2>

            <div className="my-6 flex flex-wrap justify-around sm:justify-between gap-5 sm:gap-16 items-start">
                <ul>
                    <li className='underline leading-8'>
                        <Link href={"/"}>FAQ</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Investor Relations</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Privacy</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Speed Test</Link>
                    </li>
                </ul>
                <ul>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Help Center</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Jobs</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Cookie Prefarences</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Legal Notices</Link>
                    </li>
                </ul>
                <ul>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Account</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Ways to Watch</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Corporate Information</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Only on Netflix</Link>
                    </li>
                </ul>
                <ul>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Meida Center</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Terms of Use</Link>
                    </li>
                    <li className='underline leading-8'>
                        <Link href={"/"}>Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

import Image from 'next/image'
import React from 'react'

export const CardComponent = ({ heading_text, para_text, image }: any) => {
    return (
        <div
            className='min-h-[30rem] h-screen flex justify-around items-center flex-wrap w-full bg-black mt-2 text-[rgb(255,255,255)] py-16 px-4'
        >
            <div
                className="md:w-1/2 text-center flex flex-col justify-center md:text-start"
            >
                <h1
                    className="text-3xl md:text-5xl font-semibold tracking-wide py-6 leading-4"
                >{heading_text}</h1>
                <p
                    className="text-2xl font-normal tracking-wide leading-8">{para_text}</p>
            </div>

            <div className="md:w-1/2 flex justify-center">
                <Image src={image} alt='' className='w-full md:w-5/6' />
            </div>
        </div>
    )
}

import React from 'react'

export const QuestionComponent = () => {
    return (
        <div
            className='min-h-[30rem] flex flex-col items-center text-center flex-wrap w-full h-full bg-black mt-2 py-16 text-[rgb(255,255,255)] px-4'
        >
            <h1 className="text-4xl font-extrabold tracking-wide">Frequently Asked Questions</h1>

            <div className="w-full mt-10 text-xl">
                <ul className="">
                    <li className="flex justify-between items-center bg-[rgb(45,45,45)] mb-2 py-3 px-4 w-full cursor-pointer hover:bg-[rgb(60,60,60)] ">
                        <p className="font-normal text-2xl">What is Netflix?</p>
                        <span className="text-6xl font-thin">+</span>
                    </li>
                    <li className="flex justify-between items-center bg-[rgb(45,45,45)] mb-2 py-3 px-4 w-full cursor-pointer hover:bg-[rgb(60,60,60)]">
                        <p className="font-normal text-2xl">How much does Netflix cost?</p>
                        <span className="text-6xl font-thin">+</span>
                    </li>
                    <li className="flex justify-between items-center bg-[rgb(45,45,45)] mb-2 py-3 px-4 w-full cursor-pointer hover:bg-[rgb(60,60,60)]">
                        <p className="font-normal text-2xl">Where can I watch?</p>
                        <span className="text-6xl font-thin">+</span>
                    </li>
                    <li className="flex justify-between items-center bg-[rgb(45,45,45)] mb-2 py-3 px-4 w-full cursor-pointer hover:bg-[rgb(60,60,60)]">
                        <p className="font-normal text-2xl">How do I cancel?</p>
                        <span className="text-6xl font-thin">+</span>
                    </li>
                    <li className="flex justify-between items-center bg-[rgb(45,45,45)] mb-2 py-3 px-4 w-full cursor-pointer hover:bg-[rgb(60,60,60)]">
                        <p className="font-normal text-2xl">What can I watch on Netflix?</p>
                        <span className="text-6xl font-thin">+</span>
                    </li>
                    <li className="flex justify-between items-center bg-[rgb(45,45,45)] mb-2 py-3 px-4 w-full cursor-pointer hover:bg-[rgb(60,60,60)]">
                        <p className="font-normal text-2xl">Is Netflix good for kids?</p>
                        <span className="text-6xl font-thin">+</span>
                    </li>
                </ul>
                <p className="mt-14">Ready to watch? Enter your email to create or restart your membership.</p>
                <div
                    className="flex gap-8 md:gap-4 mt-4 flex-wrap justify-center items-center"
                >
                    <input type="text" placeholder='Email address'
                        className='py-2 px-3 rounded-sm border bg-transparent text-2xl ' />
                    <button
                        className="bg-red-600 px-3 text-3xl font-normal py-2 rounded-md"
                    >Get Started  ▷</button>
                </div>
            </div>
        </div>
    )
}

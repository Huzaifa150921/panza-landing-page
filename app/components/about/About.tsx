'use client'
import React, { forwardRef, useState } from 'react'
import SectionHeadingCenter from '@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter'
import image from '@/public/images/background/about.jpg'
import Image from 'next/image'
import { aboutLinks } from '@/app/constants/constants'


const About = forwardRef<HTMLDivElement>((_, ref) => {
    const [activeIndex, setActiveIndex] = useState<number>(2)

    return (
        <div
            ref={ref}
            className="bg-about bg-center bg-cover h-auto pb-20 w-full flex flex-col items-center gap-10 px-4 sm:px-6 md:px-10"
        >
            <div className="flex flex-col items-center gap-7">
                <SectionHeadingCenter
                    text="About Our Company"
                    marginBottom="mb-5"
                    marginTop="mt-10"
                    headingColor="text-about-heading"
                />
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">

                <div className="relative w-[300px] h-[280px]  md:w-[450px] md:h-[300px]  overflow-hidden ">
                    <Image
                        src={image}
                        alt="About Image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                </div>


                <div className="flex flex-col gap-6 max-w-xl w-full justify-start items-start ">

                    <div className="flex flex-wrap justify-center lg:justify-start gap-5 ">
                        {aboutLinks.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative font-extrabold text-xs sm:text-sm md:text-base transition-all duration-300 
                                    ${activeIndex === index
                                        ? 'text-about-navigationactive'
                                        : 'text-about-navigation hover:text-about-navigationactive'
                                    }`}
                            >
                                {activeIndex === index && (
                                    <div className="absolute -top-1  -translate-x-1/2 bg-about-navigationactive h-[2px] w-10 sm:w-16 md:w-20 animate-bounce"></div>
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>


                    <div className="text-about-navigation text-center lg:text-left leading-relaxed">
                        {typeof aboutLinks[activeIndex].content == 'string' ? <p>{aboutLinks[activeIndex].content}</p> : aboutLinks[activeIndex].content}
                    </div>
                </div>
            </div>
        </div>
    )
})

About.displayName = 'About'
export default About



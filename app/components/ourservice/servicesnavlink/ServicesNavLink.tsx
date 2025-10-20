'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { serviceContent } from '@/app/constants/constants'
import { servicesNavLinks } from '@/app/constants/constants'
const ServicesNavLink = () => {

    const [active, setActive] = useState('Web Design')
    const [index, setIndex] = useState(0)


    const handleNav = (i: number, link: string) => {
        setActive(link)
        setIndex(i)
    }

    return (
        <div className="flex flex-col items-center w-full">
            <ul className="flex flex-wrap justify-center text-center">
                {servicesNavLinks.map((link, i) => (
                    <li key={i} className="flex flex-col items-center  relative">
                        <button
                            onClick={() => handleNav(i, link)}
                            className={`${active === link
                                ? 'bg-services-bgcoloractive border-services-bordercoloractive border text-services-textcoloractive hover:text-services-textcoloractive'
                                : 'text-services-textcolor bg-services-bgcolor border border-services-bordercolor'
                                } transition-all duration-300 p-5 px-8 text-sm sm:text-base font-semibold z-20 w-[200px] lg:w-auto hover:border-services-bordercoloractive hover:text-services-bgcoloractive`}
                        >
                            {link}
                        </button>
                        {active === link && (
                            <div className="min-h-4 w-4 bg-services-bgcoloractive rotate-45 absolute -bottom-2 left-1/2 -translate-x-1/2 z-10 transition-all duration-500 hidden lg:block"></div>
                        )}

                    </li>
                ))}
            </ul>

            <div className="flex flex-col md:flex-row justify-start items-start md:justify-center gap-5 mt-10 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[1010px] mx-auto ">
                <div className="relative w-full md:w-[180px] h-[100px] sm:h-[120px] overflow-hidden shrink-0">
                    <Image
                        src={serviceContent[index].src}
                        alt="Service preview"
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed  text-center md:text-justify text-services-textcolor">
                    {serviceContent[index].text}
                </p>
            </div>
        </div>
    )
}

export default ServicesNavLink

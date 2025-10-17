'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import image1 from '@/public/images/gallery/gallery1.jpg'
import image2 from '@/public/images/gallery/gallery2.jpg'
import image3 from '@/public/images/gallery/gallery3.jpg'
import image4 from '@/public/images/gallery/gallery4.jpeg'
import image5 from '@/public/images/gallery/gallery5.png'
import image6 from '@/public/images/gallery/gallery6.jpg'

const ServicesNavLink = () => {
    const navlinks = ['Web Design', 'Graphic Design', 'Online Support', 'App Design', 'Online Marketing', 'Seo Services']
    const [active, setActive] = useState('Web Design')
    const [index, setIndex] = useState(0)

    const content = [
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem rem praesentium ea nobis nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem rem praesentium ea nobis nihil voluptatem sed non, recusandae magni ab, similique doloremque.", src: image1 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus similique doloribus dicta assumenda nostrum recusandae qui.", src: image2 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti similique doloribus dicta assumenda nostrum recusandae qui.", src: image3 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti similique doloribus dicta assumenda nostrum recusandae qui.", src: image4 },
        { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti similique doloribus dicta assumenda nostrum recusandae qui.", src: image5 },
        { text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus similique doloribus dicta assumenda nostrum recusandae qui.", src: image6 },
    ]

    const handleNav = (i: number, link: string) => {
        setActive(link)
        setIndex(i)
    }

    return (
        <div className="flex flex-col items-center w-full">
            <ul className="flex flex-wrap justify-center text-center">
                {navlinks.map((link, i) => (
                    <li key={i} className="flex flex-col items-center  relative">
                        <button
                            onClick={() => handleNav(i, link)}
                            className={`${active === link
                                ? 'bg-services-bgcoloractive border-services-bordercoloractive border text-services-textcoloractive'
                                : 'text-services-textcolor bg-services-bgcolor border border-services-bordercolor'
                                } transition-all duration-300 p-5 px-8 text-sm sm:text-base font-semibold z-20 `}
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
                        src={content[index].src}
                        alt="Service preview"
                        fill
                        className="object-cover"
                    />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed  text-center md:text-justify text-services-textcolor">
                    {content[index].text}
                </p>
            </div>
        </div>
    )
}

export default ServicesNavLink

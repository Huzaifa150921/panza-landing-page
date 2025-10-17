'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import image1 from "@/public/images/team/team1.jpg"
import image2 from '@/public/images/team/team2.jpg'
import image3 from '@/public/images/team/team3.jpg'
import image4 from '@/public/images/team/team4.jpg'
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";

const data = [
    { quote: "Success isn't built overnight; it's crafted through persistence, learning from failure, and believing in your ability to improve even when results take time to appear.", name: "Hassan Ali", role: "UX Designer", src: image1 },
    { quote: "Leadership is not about control but connection the art of inspiring trust, guiding through uncertainty, and creating an environment where others can shine.", name: "Huzaifa", role: "Web Developer", src: image2 },
    { quote: "Creativity thrives when passion meets purpose it's the courage to see possibility where others see limits, and to keep building when no one else believes.", name: "Ali", role: "UI Designer", src: image3 },
    { quote: "True growth begins when comfort ends; challenges shape resilience, mistakes teach humility, and persistence turns small steps into lasting achievement.", name: "Hassan", role: "UI/UX Designer", src: image4 },
]

const TestmonialClients = () => {
    const [index, setindex] = useState<number>(0);

    const handleForward = () => setindex(prev => (prev + 1) % data.length)
    const handleBackward = () => setindex(prev => (prev - 1 + data.length) % data.length)

    return (
        <div className='flex flex-col items-center'>
            <p className='text-center text-sm sm:text-base md:text-lg w-full sm:w-[90%] md:w-[700px] text-testmonial-text mb-5'>{data[index].quote}</p>
            <h1 className='text-xl sm:text-2xl md:text-3xl text-testmonial-name'>{data[index].name}</h1>
            <h3 className='text-sm sm:text-base text-testmonial-text mb-5'>{data[index].role}</h3>
            <div className='relative w-[100px] sm:w-[130px] h-[100px] sm:h-[130px] mb-10'>
                <Image src={data[index].src} alt='img' fill className='object-cover  rounded-full border-4 border-testmonial-imageborder shadow-[0_0_20px] shadow-testmonial-imageshadow' />
            </div>
            <div className='flex gap-3 sm:gap-5 justify-center items-center flex-wrap mb-10 '>
                <button onClick={handleBackward} className='border-2 border-testmonial-backbuttonborder p-2'><IoIosArrowBack size={20} className='text-testmonial-icon' /></button>
                {data.map((img, i) => (
                    <div key={i} className='relative h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]'>
                        <Image fill src={img.src} alt={img.name} className={`object-cover rounded-full shadow-[0_0_10px] shadow-testmonial-imageshadow transition-all duration-300 ${index === i ? '-translate-y-3 sm:-translate-y-4 border-2 border-testmonial-imageborder animate-pulse' : ''}`} />
                    </div>
                ))}
                <button onClick={handleForward} className='bg-testmonial-buttonforwordbg border-2 border-testmonial-forwordbuttonborder p-2 '><IoChevronForwardOutline size={20} className='text-testmonial-icon' /></button>
            </div>
        </div>
    )
}

export default TestmonialClients

'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { testmonialData } from '@/app/constants/constants';
import { IoIosArrowBack } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";


const TestmonialClients = () => {
    const [index, setindex] = useState<number>(0);

    const handleForward = () => setindex(prev => (prev + 1) % testmonialData.length)
    const handleBackward = () => setindex(prev => (prev - 1 + testmonialData.length) % testmonialData.length)

    return (
        <div className='flex flex-col items-center'>

            <p className='text-center text-sm sm:text-base md:text-lg w-full sm:w-[90%] md:w-[700px] text-testmonial-text mb-5'>{testmonialData[index].quote}</p>

            <h1 className='text-xl sm:text-2xl md:text-3xl text-testmonial-name'>{testmonialData[index].name}</h1>

            <h3 className='text-sm sm:text-base text-testmonial-text mb-5'>{testmonialData[index].role}</h3>

            <div className='relative w-[100px] sm:w-[130px] h-[100px] sm:h-[130px] mb-10'>
                <Image src={testmonialData[index].src} alt='img' fill className='object-cover  rounded-full border-4 border-testmonial-imageborder shadow-[0_0_20px] shadow-testmonial-imageshadow' />
            </div>
            <div className='flex gap-3 sm:gap-5 justify-center items-center flex-wrap mb-10 '>
                <button onClick={handleBackward} className='border-2 border-testmonial-backbuttonborder p-2 hover:scale-105'>
                    <IoIosArrowBack size={20} className='text-testmonial-icon' />
                </button>
                {testmonialData.map((img, i) => (
                    <div key={i} className='relative h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]'>
                        <Image fill src={img.src} alt={img.name} className={`object-cover rounded-full shadow-[0_0_10px] shadow-testmonial-imageshadow transition-all duration-300 ${index === i ? '-translate-y-3 sm:-translate-y-4 border-2 border-testmonial-imageborder animate-pulse' : ''}`} />
                    </div>
                ))}
                <button onClick={handleForward} className='bg-testmonial-buttonforwordbg border-2 border-testmonial-forwordbuttonborder p-2 hover:scale-105'>
                    <IoChevronForwardOutline size={20} className='text-testmonial-icon' />
                </button>
            </div>
        </div>
    )
}

export default TestmonialClients

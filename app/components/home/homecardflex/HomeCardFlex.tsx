import React from 'react'
import CardHome from '@/app/components/home/homecard/HomeCard'
import { PiHandTapFill } from "react-icons/pi"
import { FaGem } from "react-icons/fa"
import { GiLightBulb } from "react-icons/gi"
import { MdDevices } from "react-icons/md"

const HomeCard = () => {
    return (
        <>
            <div className='flex flex-wrap w-full'>
                <CardHome Icon={PiHandTapFill} borderColor='border-homecard-bordereven' iconColor='text-homecard-iconeven' textColor='text-homecard-texteven' text='DIFFERENT THEME OPTION' bgColor='bg-homecard-bgeven' />
                <CardHome Icon={FaGem} borderColor='border-homecard-borderodd' iconColor='text-homecard-iconodd' textColor='text-homecard-textodd' text='FULLY CUSTOMIZABLE' bgColor='bg-homecard-bgodd' />
                <CardHome Icon={GiLightBulb} borderColor='border-homecard-bordereven' iconColor='text-homecard-iconeven' textColor='text-homecard-texteven' text='UNLIMITED SUPPORT' bgColor='bg-homecard-bgeven' />
                <CardHome Icon={MdDevices} borderColor='border-homecard-borderodd' iconColor='text-homecard-iconodd' textColor='text-homecard-textodd' text='RESPONSIVE ALL DEVICE' bgColor='bg-homecard-bgodd' />
            </div>
        </>
    )
}

export default HomeCard

import React from 'react'
import FirstCol from '@/app/components/footer/firstcol/FirstCol'
import SecondCol from '@/app/components/footer/secondcol/SecondCol'
import ThirdCol from '@/app/components/footer/thirdcol/ThirdCol'
import FourthCol from '@/app/components/footer/fourthcol/FourthCol'

const Footer = () => {
    return (
        <div className='w-full bg-footer-bg pt-20 px-6 sm:px-10 md:px-20 lg:px-32 h-auto pb-20'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div><FirstCol /></div>
                <div><SecondCol /></div>
                <div><ThirdCol /></div>
                <div><FourthCol /></div>
            </div>
        </div>
    )
}

export default Footer

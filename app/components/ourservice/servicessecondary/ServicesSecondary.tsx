import React from 'react'
import Button from "@/app/components/uielements/buttons/primarybutton/PrimaryButton"

const ServicesSecondary = () => {
    return (
        <div className='bg-service min-h-[50vh] w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-8'>
            <h1 className='text-servicesSecondary-heading text-sm sm:text-2xl md:text-3xl font-extrabold mb-3'>
                EVERY THING IS READY. JUST BUY AND INSTALL NOW
            </h1>
            <p className='text-servicesSecondary-text text-xs sm:text-sm md:text-base mb-10 max-w-[700px]'>
                Smooth reliable, responsive ready, perfect portfolio. unique blog layout and many options for you
            </p>
            <Button
                bgColor='bg-servicesSecondary-buttonbg'
                borderColor='border-servicesSecondary-buttonborder'
                color='text-servicesSecondary-buttontext'
                text='PURCHASE NOW'
            />
        </div>
    )
}

export default ServicesSecondary

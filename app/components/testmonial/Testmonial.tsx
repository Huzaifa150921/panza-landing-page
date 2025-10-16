import React from 'react'
import Introheading from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter"
import { ImQuotesLeft } from "react-icons/im";
import TestmonialClients from '@/app/components/testmonial/testmonialclients/TestmonialClients';

const Testmonial = () => {
    return (
        <div className='w-full max-h-[90vh]  md:h-screen bg-testmonial bg-cover bg-center flex flex-col items-center px-4 sm:px-6 md:px-10  '>
            <div className='flex flex-col justify-center items-center gap-5'>
                <Introheading headingColor='text-testmonial-introheading' marginBottom='mb-10' marginTop='mt-10' text='What People Say About Panza' />
            </div>
            <ImQuotesLeft size={40} className='text-testmonial-quotes mb-5' />
            <TestmonialClients />
        </div>
    )
}

export default Testmonial

import React from 'react'
import SectionHeadingCenter from '@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter'
import ServicesSecondary from '@/app/components/ourservice/servicessecondary/ServicesSecondary'
import ServicesNavLink from '@/app/components/ourservice/servicesnavlink/ServicesNavLink'

const Services = () => {
    return (
        <>
            <div className='w-full min-h-[60vh] flex flex-col items-center'>
                <div className='flex items-center flex-col gap-5'>
                    <SectionHeadingCenter
                        text='Our Services'
                        marginBottom='mb-10'
                        marginTop='mt-10'
                        headingColor='text-services-color'
                    />
                </div>
                <ServicesNavLink />
            </div>
            <ServicesSecondary />
        </>
    )
}

export default Services

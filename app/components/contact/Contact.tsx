'use client'

import React, { forwardRef } from 'react'
import dynamic from 'next/dynamic'
import IntroHeading from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter"

const MapComponent = dynamic(() => import('@/app/components/contact/contactmap/ContactMap'), { ssr: false })

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="w-full min-h-screen flex flex-col md:flex-row items-start md:items-center justify-start gap-3 ">
            <div className="z-10 w-full md:w-[700px] h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <MapComponent />
            </div>

            <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
                <IntroHeading
                    text="Keep In Touch"
                    marginTop="mt-0"
                    marginBottom="mb-14"
                    headingColor="text-contact-introheading"
                />
                <div className="flex flex-col gap-2 w-full md:w-[500px] items-center md:items-start">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border border-contact-inputborder rounded p-2 h-[40px] w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-contact-inputborder rounded p-2 h-[40px] w-full"
                    />
                    <textarea
                        placeholder="Message"
                        rows={8}
                        className="border border-contact-inputborder rounded p-2 w-full"
                    ></textarea>
                    <button className='p-3 w-full md:w-[500px] bg-contact-buttonbg text-button-text rounded-md'>
                        SEND REQUEST
                    </button>
                </div>
            </div>
        </div>
    )
})

Contact.displayName = "Contact"

export default Contact

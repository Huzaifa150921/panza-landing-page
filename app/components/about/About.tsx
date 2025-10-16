import React from 'react'
import SectionHeadingCenter from '@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter'
import AboutProgressBar from '@/app/components/about/aboutprogressbar/AboutProgressBar'

const About = () => {
    return (
        <div className="bg-about bg-center bg-cover min-h-[80vh] md:min-h-[85vh] w-full flex flex-col gap-10 items-center px-4 sm:px-6 md:px-10">
            <div className="flex flex-col items-center gap-7">
                <SectionHeadingCenter
                    text="About Over Company"
                    marginBottom="mb-5"
                    marginTop="mt-10"
                    headingColor="text-about-heading"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-5 text-center sm:text-left">
                <p className="font-extrabold text-about-navigation text-xs sm:text-sm md:text-base">OUR HISTORY</p>
                <p className="font-extrabold text-about-navigation text-xs sm:text-sm md:text-base">OUR BIOGRAPHY</p>
                <div className="flex flex-col items-center sm:items-start justify-center">
                    <div className="bg-about-navigationactive h-[2px] w-20"></div>
                    <p className="font-extrabold text-about-navigationactive text-xs sm:text-sm md:text-base">OUR SKILLS</p>
                </div>
            </div>

            <div className="flex justify-center w-full">
                <AboutProgressBar />
            </div>
        </div>
    )
}

export default About

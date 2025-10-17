import React, { forwardRef } from 'react'
import IntroHeading from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter"
import TeamCard from '@/app/components/team/teamcard/TeamCard'
import image1 from '@/public/images/team/team1.jpg'
import image2 from '@/public/images/team/team2.jpg'
import image3 from '@/public/images/team/team3.jpg'
import image4 from '@/public/images/team/team4.jpg'

const Team = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className='flex flex-col items-center w-full min-h-[70vh] px-4 sm:px-6 md:px-10'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <IntroHeading text='Meet Our Team' marginBottom='mb-10' marginTop='mt-10' headingColor='text-team-introheading' />
            </div>
            <div className='flex flex-wrap justify-center gap-3 mb-10 md:mb-0'>
                <TeamCard image={image1} name='AI Mausam' role='Founder' />
                <TeamCard image={image2} name='Mis Lisa' role='UX Designer' />
                <TeamCard image={image3} name='Hasan Mahmmud' role='Web Developer' />
                <TeamCard image={image4} name='Afifa Jannat' role='Web Designer' />
            </div>
        </div>
    )
})
Team.displayName = "Team"

export default Team

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import TeamButton from '@/app/components/team/teambutton/TeamButton';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiSkypeFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

type TeamCardProps = {
    name: string,
    role: string,
    image: StaticImageData,
}

const TeamCard = ({ name, role, image }: TeamCardProps) => {
    return (
        <div className='flex flex-col items-center w-[215px] sm:w-[185px] md:w-[215px] '>
            <div className='relative w-full h-[150px] sm:h-[130px] md:h-[150px]'>
                <Image src={image} alt='img' fill className='object-cover' />
            </div>
            <div className='min-h-[20vh] w-full bg-team-bg flex flex-col justify-between'>
                <div className='p-3'>
                    <h1 className='font-bold text-team-name text-sm sm:text-base md:text-team-name'>{name}</h1>
                    <h2 className='text-xs sm:text-sm font-semibold text-team-role'>{role}</h2>
                </div>
                <div className='flex'>
                    <TeamButton Icon={FaFacebookF} />
                    <TeamButton Icon={FaTwitter} />
                    <TeamButton Icon={RiSkypeFill} />
                    <TeamButton Icon={AiFillInstagram} />
                </div>
            </div>
        </div>
    )
}

export default TeamCard

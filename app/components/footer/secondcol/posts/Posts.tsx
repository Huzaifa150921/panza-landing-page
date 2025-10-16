import React from 'react'
import Image, { StaticImageData } from 'next/image'

type PostsProps = {
    heading: string,
    image: StaticImageData,
    active?: boolean,
}

const Posts = ({ heading, image, active }: PostsProps) => {
    return (
        <div className='flex flex-col md:flex-row gap-4 items-center md:items-start'>
            <div className='relative h-[40px] w-[50px] flex-shrink-0'>
                <Image src={image} alt='image' fill className='object-cover rounded' />
            </div>
            <div className='flex flex-col'>
                <h1 className={`uppercase text-sm font-bold ${active ? 'text-footer-active' : 'text-footer-heading'}`}>{heading}</h1>
                <p className='text-xs text-footer-text'>Lorem ipsum dolor sit amet.</p>
                <p className='text-xs text-footer-text'>Lorem ipsum dolor sit amet a.</p>
                <p className='text-sm font-bold text-footer-date'>10 March, 2045</p>
            </div>
        </div>
    )
}

export default Posts

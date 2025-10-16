import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ImagesSetupProps = {
    image: StaticImageData,
}
const ImagesSetup = ({ image }: ImagesSetupProps) => {
    return (
        <>
            <div className='relative h-[60px] w-[60px]'>
                <Image src={image} alt='img' fill />

            </div>
        </>
    )
}

export default ImagesSetup
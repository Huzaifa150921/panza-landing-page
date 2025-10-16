import React from 'react'
import image1 from "@/public/images/gallery/gallery1.jpg"
import image2 from '@/public/images/gallery/gallery10.jpg'
import image3 from '@/public/images/gallery/gallery12.png'
import image4 from '@/public/images/gallery/gallery2.jpg'
import image5 from '@/public/images/gallery/gallery7.jpg'
import image6 from '@/public/images/gallery/gallery6.jpg'
import ImagesSetup from '@/app/components/footer/fourthcol/imagesetup/ImagesSetup'

const FourthCol = () => {
    return (
        <div className='flex flex-col items-center sm:items-start text-center sm:text-left mb-5 md:mb-0'>
            <h1 className='font-extrabold uppercase text-lg sm:text-xl mb-5 text-footer-heading'>Flicke feed</h1>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-2 justify-center sm:justify-start'>
                    <ImagesSetup image={image1} />
                    <ImagesSetup image={image2} />
                </div>
                <div className='flex gap-2 justify-center sm:justify-start'>
                    <ImagesSetup image={image3} />
                    <ImagesSetup image={image4} />
                </div>
                <div className='flex gap-2 justify-center sm:justify-start'>
                    <ImagesSetup image={image5} />
                    <ImagesSetup image={image6} />
                </div>
            </div>
        </div>
    )
}

export default FourthCol

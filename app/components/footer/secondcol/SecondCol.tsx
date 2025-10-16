import React from 'react'
import Posts from '@/app/components/footer/secondcol/posts/Posts'
import image1 from '@/public/images/gallery/gallery1.jpg'
import image2 from '@/public/images/gallery/gallery12.png'
import image3 from '@/public/images/gallery/gallery3.jpg'

const SecondCol = () => {
    return (
        <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h1 className='font-extrabold text-1xl uppercase mb-5 text-footer-heading'>recent post</h1>
            <div className='flex flex-col gap-10'>
                <Posts heading='a standard image post' image={image1} active />
                <Posts heading='a standard image post' image={image2} />
                <Posts heading='a standard image post' image={image3} />
            </div>
        </div>
    )
}

export default SecondCol

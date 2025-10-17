import React from 'react'
import Image from 'next/image'
import WordpressList from '@/app/components/wrodpress/wordpresslist/WordpressList'
import image from '@/public/images/background/computer.png'
import Button from "@/app/components/uielements/buttons/primarybutton/PrimaryButton"

const Wordpress = () => {
    return (
        <div className='h-auto  w-full bg-wordpress bg-cover bg-center flex flex-col bg-opacity-25 px-4 md:px-10 lg:px-20'>
            <div className='flex flex-col items-center text-center md:text-left'>
                <h1 className='mt-10 font-extrabold text-3xl sm:text-4xl md:text-5xl uppercase text-wordpress-primaryheading'>
                    Panza is not only WordPress theme
                </h1>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-wordpress-secondaryheading'>
                    it&apos;s clean and creative design
                </h1>
            </div>

            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start mt-10 gap-10'>
                <div className='relative w-full md:w-[50%] h-[300px] sm:h-[400px]'>
                    <Image src={image} alt='image' fill className='object-contain' />
                </div>

                <div className='flex flex-col gap-2 items-center md:items-start w-full md:w-[50%] mt-5 md:mt-0'>
                    <div className='flex flex-col gap-2 items-start'>

                        <WordpressList text='Clean Layout Design' />
                        <WordpressList text='Many Style Portfolio Design' />
                        <WordpressList text='Beautiful Blog Page' />
                        <WordpressList text='Mega PSD Pack' />
                        <WordpressList text='User Friendly Design' />
                        <WordpressList text='Full Shortcodes' />
                        <WordpressList text='Full Editable PSD' />
                        <div className='mt-5 md:mb-0 mb-10'>
                            <Button
                                bgColor='bg-wordpress-buttonbg'
                                borderColor='border-wordpress-buttonborder'
                                color='text-wordpress-buttontext'
                                text='PURCHASE NOW'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wordpress

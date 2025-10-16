import React from 'react'
import Button from '@/app/components/footer/thirdcol/button/Button'

const ThirdCol = () => {
    return (
        <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h1 className='uppercase text-1xl font-extrabold mb-5 text-footer-heading'>Tags</h1>
            <div className='flex flex-wrap gap-2 mb-10 justify-center sm:justify-start'>
                <Button text='audio' active />
                <Button text='gallery' />
                <Button text='Image' />
                <Button text='audio' />
                <Button text='gallery' />
                <Button text='Image' />
                <Button text='audio' />
                <Button text='gallery' />
                <Button text='Image' />
                <Button text='audio' />
                <Button text='gallery' />
                <Button text='Image' />
            </div>

            <h1 className='text-1xl font-extrabold uppercase mb-5 text-footer-heading'>newsletter</h1>
            <p className='text-sm mb-5 text-footer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.</p>
            <div className='flex flex-col sm:flex-row gap-2 md:gap-0'>
                <input type="text" placeholder='Enter email' className='w-52 sm:w-auto p-2 bg-footer-inputbg text-footer-text px-4' />
                <button className='p-2 font-extrabold px-3 bg-footer-inputbtnbg text-footer-inputbtntext'>GO</button>
            </div>
        </div>
    )
}

export default ThirdCol

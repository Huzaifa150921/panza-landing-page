import React from 'react'

const FirstCol = () => {
    return (
        <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h1 className='mb-5 font-extrabold text-2xl sm:text-3xl text-footer-heading'>
                PANZ<span className='text-footer-active'>A</span>
            </h1>
            <p className='text-sm sm:text-base mb-8 sm:mb-10 text-center sm:text-left text-footer-text'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quisquam asperiores molestias ad soluta sit aperiam optio natus
            </p>
            <div className='mb-2'>
                <h1 className='font-bold text-sm sm:text-base text-footer-text'>Office:</h1>
                <p className='text-sm sm:text-base text-footer-text'>795 Falsom Ave, Suite 600</p>
                <p className='text-sm sm:text-base mb-4 text-footer-text'>San Francisco, CA 94107</p>
            </div>
            <div className='mb-2'>
                <h1 className='font-bold text-sm sm:text-base text-footer-text'>
                    Phone: <span className='font-normal text-sm sm:text-base'>(91) 1233 34343</span>
                </h1>
                <h1 className='font-bold text-sm sm:text-base text-footer-text'>
                    Fax: <span className='font-normal text-sm sm:text-base'>(91) 3432 45345</span>
                </h1>
                <h1 className='font-bold text-sm sm:text-base text-footer-text'>
                    Email: <span className='font-normal text-sm sm:text-base'>info@gmail.com</span>
                </h1>
            </div>
        </div>
    )
}

export default FirstCol

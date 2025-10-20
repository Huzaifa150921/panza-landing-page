import React from 'react'

import { priceServices } from '@/app/constants/constants'

type pricingcardProps = {
    active?: boolean
    heading: string
    price: number
}

const Pricingcard = ({ active, heading, price }: pricingcardProps) => {
    return (
        <div className={`overflow-hidden min-h-[70vh] sm:min-h-[75vh] w-[80vw] sm:w-[250px] md:w-[260px] border border-pricing-cardborder rounded bg-pricing-cardbg flex flex-col items-center relative ${active ? ' z-10 shadow-[0_0_10px_2px_theme(colors.pricing.cardshadow)]' : ''} hover:scale-105 hover:z-20 cursor-pointer transition-all duration-300`}>
            <h1 className={`mt-3 text-base sm:text-lg md:text-xl uppercase font-extrabold ${active ? 'text-pricing-cardheadingactive' : 'text-pricing-cardheading'}`}>{heading}</h1>

            {active && (
                <div className="absolute h-5 w-24 rotate-[40deg] bg-pricing-cardbannerbg top-1 -right-7 p-3 animate-pulse">
                    <h3 className="text-[10px] sm:text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-pricing-cardbannertext">
                        OFFER
                    </h3>
                </div>
            )}

            <div className={`min-h-[10vh] w-full ${active ? 'bg-pricing-cardpricebgactive' : 'bg-pricing-cardpricebg'} mt-2 mb-1 flex justify-center items-center`}>
                <h1 className="font-extrabold text-pricing-cardtext text-2xl sm:text-3xl">
                    ${price}<span className="text-xs sm:text-sm font-normal">/Month</span>
                </h1>
            </div>

            {priceServices.map((item, index) => (
                <div key={index} className="min-h-[6vh] w-full bg-transparent flex justify-center items-center border-t border-pricing-cardborder">
                    <h1 className="text-xs sm:text-sm md:text-base">{item}</h1>
                </div>
            ))}

            <div className="bg-transparent border-t border-pricing-cardborder min-h-[15vh] w-full flex justify-center items-center">
                <button className={`rounded h-[45px] sm:h-[50px] w-[130px] sm:w-[150px] ${active ? 'bg-pricing-cardbuttonactive' : 'bg-pricing-cardbutton'} text-pricing-cardbuttontext uppercase text-sm sm:text-base font-semibold`}>
                    Buy Now
                </button>
            </div>
        </div>
    )
}

export default Pricingcard

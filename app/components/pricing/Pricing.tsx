import React from 'react'
import IntroHeading from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter"
import Pricingcard from '@/app/components/pricing/pricingcard/Pricingcard'

const Pricing = () => {
    return (
        <>
            <div className="min-h-[110vh] w-full flex flex-col items-center px-4 sm:px-6 md:px-10">
                <div className="flex flex-col items-center gap-5">
                    <IntroHeading text="Our Pricing Table" marginBottom="mb-10" marginTop="mt-10" headingColor="text-pricing-introheading" />
                </div>
                <div className="flex flex-wrap justify-center gap-6 md:gap-0 mb-10 md:mb-0">
                    <Pricingcard heading="personal" price={99} />
                    <Pricingcard heading="business" price={199} />
                    <Pricingcard heading="professional" price={299} active />
                    <Pricingcard heading="dimond" price={299} />
                </div>
            </div>
        </>
    )
}

export default Pricing

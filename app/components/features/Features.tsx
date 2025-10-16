import React from 'react'
import FeatureGrid from '@/app/components/features/featuregrid/FeatureGrid'
import SectionHeadingCenter from '@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter'

const Features = () => {
    return (
        <div className="w-full min-h-[110vh] px-4 sm:px-8 md:px-12 ">
            <div className="flex flex-col items-center mt-16 sm:mt-20 gap-7 mb-10 md:mb-0">
                <SectionHeadingCenter
                    text="Creative Amazing Features"
                    marginBottom="mb-5"
                    marginTop="mt-0"
                    headingColor="text-features-heading"
                />
                <FeatureGrid />
            </div>
        </div>
    )
}

export default Features

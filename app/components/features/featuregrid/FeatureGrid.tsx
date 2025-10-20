import React from 'react'
import FeaturesCard from '@/app/components/features/featurescard/FeaturesCard'
import { FaLeaf } from 'react-icons/fa'
import { MdEditCalendar } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'
import { PiTimerFill } from 'react-icons/pi'
import { FaLaptopCode } from 'react-icons/fa'
import { MdConstruction } from 'react-icons/md'
import { FaLightbulb } from 'react-icons/fa6'
import { FaPaperPlane } from 'react-icons/fa'
import { FaIdCard } from 'react-icons/fa'
import { featureText } from '@/app/constants/constants'

const FeatureGrid = () => {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10 mt-6 w-full">
            <FeaturesCard Icon={FaLeaf} heading="Rectina Ready" body={featureText.text} isMain={true} />
            <FeaturesCard Icon={MdEditCalendar} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={FaSearch} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={PiTimerFill} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={FaLaptopCode} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={MdConstruction} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={FaLightbulb} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={FaPaperPlane} heading="Rectina Ready" body={featureText.text} isMain={false} />
            <FeaturesCard Icon={FaIdCard} heading="Rectina Ready" body={featureText.text} isMain={false} />
        </div>
    )
}

export default FeatureGrid

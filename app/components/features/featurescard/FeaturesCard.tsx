import React from 'react'

type featuresCardProps = {
    heading: string
    body: string
    Icon: React.ElementType
    isMain: boolean
}

const FeaturesCard = ({ heading, body, Icon, isMain }: featuresCardProps) => {
    return (
        <div className="group flex flex-col cursor-default w-[80%] sm:w-[70%] md:w-[60%] lg:w-[70%] xl:w-[60%] gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3">
                <Icon size={22} className="text-features-icon group-hover:scale-150 group-hover:rotate-6 duration-300 transition-all" />
                <h1 className={`font-bold ${isMain ? 'text-features-headingmain' : 'text-features-heading'} `}>{heading}</h1>
            </div>
            <p className="text-features-text text-sm sm:text-base">{body}</p>
        </div>
    )
}

export default FeaturesCard

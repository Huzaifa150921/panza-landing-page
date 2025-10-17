import React from 'react'

type SectionHeadingCenterProps = {
    marginBottom: string
    text: string
    marginTop: string
    headingColor: string
}

const SectionHeadingCenter = ({ marginBottom, text, marginTop, headingColor }: SectionHeadingCenterProps) => {
    return (
        <div className={`flex flex-col items-center text-center ${marginTop} ${marginBottom}`}>
            <h1 className={`${headingColor} font-bold text-xl sm:text-2xl md:text-3xl animate-bounce`}>{text}</h1>
            <div className="flex flex-col items-center mt-2 animate-ping">
                <div className="h-[2px] bg-features-line w-16 sm:w-20 mb-0.5" />
                <div className="h-[2px] bg-features-line w-16 sm:w-20 ml-2 sm:ml-3" />
            </div>
        </div>
    )
}

export default SectionHeadingCenter

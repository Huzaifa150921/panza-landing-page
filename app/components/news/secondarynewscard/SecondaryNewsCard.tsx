import React from 'react'
import { IconType } from 'react-icons'

type secondarynewscardProps = {
    isEven?: boolean
    Icon: IconType
    heading: number
    text: string
}

const SecondaryNewsCard = ({ isEven, Icon, text, heading }: secondarynewscardProps) => {
    return (
        <div className={`cursor-pointer group w-full sm:w-1/2 lg:w-3/12 h-auto pt-10 pb-10 ${isEven ? 'bg-newscard-cardbgEven border-newscard-borderEven' : 'bg-newscard-cardbgOdd border-newscard-borderOdd'} border-t-8 flex flex-col justify-center items-center p-4`}>
            <div className={`w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] bg-transparent flex items-center justify-center rounded-full border ${isEven ? 'border-newscard-outerdivborederEven' : 'border-newscard-outerdivborederOdd'} mb-2`}>
                <div className={`w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] ${isEven ? 'bg-newscard-innerdivbgEven' : 'bg-newscard-innerdivbgOdd'} rounded-full flex justify-center items-center group-hover:scale-150 transition-all duration-300`}>
                    <Icon size={25} className="text-newscard-icon sm:size-[30px] group-hover:scale-125 transition-all duration-700" />
                </div>
            </div>
            <p className="text-newscard-heading font-bold text-xl sm:text-2xl">{heading}</p>
            <p className="text-xs sm:text-sm text-newscard-text font-semibold">{text}</p>
        </div>
    )
}

export default SecondaryNewsCard

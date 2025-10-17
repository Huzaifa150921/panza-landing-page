import React from 'react'

type cardtopborderwithiconProps = {
    borderColor: string
    Icon: React.ElementType
    textColor: string
    iconColor: string
    bgColor: string
    text: string
}

const CardHome = ({ borderColor, Icon, textColor, iconColor, bgColor, text }: cardtopborderwithiconProps) => {
    return (
        <>
            <div className={`flex flex-col items-center justify-center gap-5 w-full sm:w-1/2 lg:w-1/4 h-auto pt-20 pb-20 ${bgColor} border-solid border-t-8 ${borderColor} ${textColor}`}>
                <Icon size={50} className={`${iconColor}`} />
                <h6 className='font-bold text-center px-2'>{text}</h6>
            </div>
        </>
    )
}

export default CardHome

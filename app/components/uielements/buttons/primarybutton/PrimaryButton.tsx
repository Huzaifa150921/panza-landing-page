import React from 'react'

type primaryButtonProps = {
    color: string
    bgColor: string
    borderColor: string
    text: string
}

const PrimaryButton = ({ color, bgColor, borderColor, text }: primaryButtonProps) => {
    return (
        <button
            className={`${bgColor} ${color} border-solid border-t-4 ${borderColor} p-2 px-6 rounded text-sm sm:text-base md:text-lg lg:px-8 lg:py-3 transition-all duration-300 hover:border-transparent`}
        >
            {text}
        </button>
    )
}

export default PrimaryButton

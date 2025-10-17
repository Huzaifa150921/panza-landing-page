import React from 'react'

type ButtonProps = {
    active?: boolean,
    text: string,
}

const Button = ({ active, text }: ButtonProps) => {
    return (
        <button className={`px-2 py-1 border text-sm ${active ? 'bg-footer-btnactivebg border-footer-btnborderactive text-footer-btntextactive' : 'bg-transparent border-footer-btnborder text-footer-btntext '} hover:scale-105 transition-all duration-300`}>
            {text}
        </button>
    )
}

export default Button

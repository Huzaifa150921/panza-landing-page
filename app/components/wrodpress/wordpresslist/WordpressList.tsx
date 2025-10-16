import React from 'react'
import { RiVerifiedBadgeFill } from "react-icons/ri";

type WordpressProps = {
    text: string
}
const WordpressList = ({ text }: WordpressProps) => {
    return (
        <>
            <div className='flex justify-center gap-2  items-center'>
                <RiVerifiedBadgeFill className='text-wordpress-listicon' />
                <span className='font-bold text-sm text-wordpress-listext'>{text}</span>
            </div>
        </>
    )
}

export default WordpressList
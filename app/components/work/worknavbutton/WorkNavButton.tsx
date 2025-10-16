import React from 'react'
import { LuPlus } from "react-icons/lu";
const WorkNavButton = () => {
    return (
        <>
            <div className='flex justify-center items-center gap-3 bg-work-buttonbg p-4 cursor-pointer rounded mb-10 md:mb-0'>
                <LuPlus className='text-work-buttonicon' size={20} />
                <button className='font-extrabold text-sm  text-work-buttontext'>LOAD MORE</button>
            </div>
        </>
    )
}

export default WorkNavButton
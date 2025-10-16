import React from 'react'
import { IconType } from 'react-icons'

type TeamButtonProps = {
    Icon: IconType,
}
const TeamButton = ({ Icon }: TeamButtonProps) => {
    return (
        <button className='p-4 border-t-2 border-r-2 border-team-border'>
            <Icon size={20} className='text-team-icon' />
        </button>
    )
}

export default TeamButton

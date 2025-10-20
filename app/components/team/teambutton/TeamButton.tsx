import React from 'react'
import { IconType } from 'react-icons'

type TeamButtonProps = {
    Icon: IconType,
    isFacebook?: boolean,
    isX?: boolean,
    isSkype?: boolean,
    isInsta?: boolean,
}
const TeamButton = ({ Icon, isFacebook, isInsta, isSkype, isX }: TeamButtonProps) => {
    return (
        <button className={`${isFacebook ? 'hover:bg-team-facebook' : ''} ${isX ? 'hover:bg-team-X' : ''} ${isSkype ? 'hover:bg-team-skype' : ''} ${isInsta ? 'hover:bg-team-insta' : ''} p-4 border-t-2 border-r-2 border-team-border transition-all duration-300`}>
            <Icon size={20} className=' text-team-icon' />
        </button>
    )
}

export default TeamButton

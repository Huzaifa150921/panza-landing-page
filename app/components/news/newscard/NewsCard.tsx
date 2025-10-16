import React from 'react'
import Image, { StaticImageData } from 'next/image'

type newsCardProps = {
    active?: boolean
    src: StaticImageData
}

const NewsCard = ({ active, src }: newsCardProps) => {
    return (
        <div className="flex flex-col w-[45vw] sm:w-[200px] md:w-[220px]">
            <div className="relative w-full h-[140px] sm:h-[150px]">
                <Image alt="news" src={src} fill className="object-cover" />
                <div className={`h-[50px] w-[45px] ${active ? 'bg-news-tagbgactive' : 'bg-news-tagbg'} absolute top-0 right-0 flex flex-col justify-center items-center`}>
                    <span className="text-news-tagtext text-xs sm:text-sm">12</span>
                    <span className="text-news-tagtext text-xs sm:text-sm">Feb</span>
                </div>
            </div>

            <div className="w-full h-[60px] bg-news-bottombg flex flex-col justify-center items-start px-3">
                <h2 className={`font-bold text-sm sm:text-base mb-1 ${active ? 'text-news-tagheadingactive' : 'text-news-tagheading'}`}>Amazing Image Post</h2>
                <p className="text-[0.65rem] sm:text-sm text-news-bottomtext">By admin | 2 comment</p>
            </div>
        </div>
    )
}

export default NewsCard

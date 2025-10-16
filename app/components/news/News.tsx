import React from 'react'
import IntroText from "@/app/components/uielements/sectionsheadingcenter/SectionHeadingCenter"
import NewsCard from '@/app/components/news/newscard/NewsCard'
import Image1 from '@/public/images/blogs/blog3.png'
import Image2 from '@/public/images/blogs/blog4.jpg'
import Image3 from '@/public/images/blogs/blog5.jpg'
import Image4 from '@/public/images/blogs/blog5.jpg'
import Image5 from '@/public/images/blogs/blog6.jpg'
import Image6 from '@/public/images/blogs/blog7.jpg'
import { IoBagSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import SecondaryNewsCard from '@/app/components/news/secondarynewscard/SecondaryNewsCard'

const News = () => {
    return (
        <>
            <div className="w-full min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-10">
                <div className="flex flex-col items-center gap-5">
                    <IntroText text="Breaking News" marginBottom="mb-10" marginTop="mt-10" headingColor="text-news-introtext" />
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-4">
                    <NewsCard src={Image1} active />
                    <NewsCard src={Image2} />
                    <NewsCard src={Image3} />
                    <NewsCard src={Image4} />
                </div>

                <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-0">
                    <NewsCard src={Image5} />
                    <NewsCard src={Image6} />
                    <NewsCard src={Image6} />
                    <NewsCard src={Image1} />
                </div>
            </div>

            <div className="flex flex-wrap justify-center w-full">
                <SecondaryNewsCard isEven heading={4609} text="Works" Icon={IoBagSharp} />
                <SecondaryNewsCard heading={3470} text="Customers" Icon={CgProfile} />
                <SecondaryNewsCard isEven heading={2908} text="Purchase" Icon={FaCartShopping} />
                <SecondaryNewsCard heading={1908} text="Office" Icon={FaMapLocationDot} />
            </div>
        </>
    )
}

export default News

import React from 'react'
import AboutProgressBar from '@/app/components/about/aboutprogressbar/AboutProgressBar'
import { JSX } from 'react'
import gallery1 from '@/public/images/gallery/gallery1.jpg'
import gallery2 from '@/public/images/gallery/gallery2.jpg'
import gallery3 from '@/public/images/gallery/gallery3.jpg'
import gallery4 from '@/public/images/gallery/gallery4.jpeg'
import gallery5 from '@/public/images/gallery/gallery5.png'
import gallery6 from '@/public/images/gallery/gallery6.jpg'

import workGallery1 from '@/public/images/gallery/gallery1.jpg';
import workGallery2 from '@/public/images/gallery/gallery2.jpg';
import workGallery3 from '@/public/images/gallery/gallery3.jpg';
import workGallery4 from '@/public/images/gallery/gallery4.jpeg';
import workGallery5 from '@/public/images/gallery/gallery5.png';
import workGallery6 from '@/public/images/gallery/gallery6.jpg';
import workGallery7 from '@/public/images/gallery/gallery7.jpg';
import workGallery8 from '@/public/images/gallery/gallery8.jpg';
import workGallery9 from '@/public/images/gallery/gallery9.jpg';
import workGallery10 from '@/public/images/gallery/gallery10.jpg';
import workGallery11 from '@/public/images/gallery/gallery11.jpg';
import workGallery12 from '@/public/images/gallery/gallery12.png';
import { StaticImageData } from 'next/image'

import testmonialIamge1 from "@/public/images/team/team1.jpg"
import testmonialImage2 from '@/public/images/team/team2.jpg'
import testmonialImage3 from '@/public/images/team/team3.jpg'
import testmonialImage4 from '@/public/images/team/team4.jpg'




export const headerNavLinks: string[] = ["HOME", "FEATURES", "ABOUT", "WORK", "SERVICES", "NEWS", "TESTMONIAL", "TEAM", "CONTACT"]

type aboutLinks = {
    label: string,
    content: JSX.Element | string
}
export const aboutLinks: aboutLinks[] = [
    {
        label: 'OUR HISTORY',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus minima pariatur nesciunt quia dolorem, at esse natus error reprehenderit quae eum laudantium ab quas dolore sed, sequi, deserunt praesentium fugit? Autem ullam natus suscipit ipsum doloremque odio fuga, maiores corrupti praesentium reiciendis? Quas et voluptas quibusdam ipsa dicta. Autem, consequuntur inventore eveniet sapiente consectetur harum placeat ratione quas ipsum nisi quis ea quisquam. Earum neque necessitatibus repudiandae at quidem tenetur amet provident mollitia possimus, dolore eius adipisci deleniti doloribus quaerat reprehenderit cupiditate consequuntur explicabo ipsum facilis, quasi laborum. Veritatis incidunt'

    },
    {
        label: 'OUR BIOGRAPHY',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus minima pariatur nesciunt quia dolorem, at esse natus error reprehenderit quae eum laudantium ab quas dolore sed, sequi, deserunt praesentium fugit? Autem ullam natus suscipit ipsum doloremque odio fuga, maiores corrupti praesentium reiciendis? Quas et voluptas quibusdam ipsa dicta. Autem, consequuntur inventore eveniet sapiente consectetur harum placeat ratione quas ipsum nisi quis ea quisquam. Earum neque necessitatibus repudiandae at quidem tenetur amet provident mollitia possimus, dolore eius adipisci deleniti doloribus quaerat reprehenderit cupiditate consequuntur explicabo ipsum facilis, quasi laborum. Veritatis incidunt'
    },
    {
        label: 'OUR SKILLS',
        content: React.createElement(AboutProgressBar),
    },

]



export const featureText = {
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam accusantium odio nulla rem eaque pariatur rerum."
}


type serviceContent = {
    text: string,
    src: StaticImageData,
}

export const serviceContent: serviceContent[] = [
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem rem praesentium ea nobis nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem rem praesentium ea nobis nihil voluptatem sed non, recusandae magni ab, similique doloremque.", src: gallery1 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus similique doloribus dicta assumenda nostrum recusandae qui.", src: gallery2 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti similique doloribus dicta assumenda nostrum recusandae qui.", src: gallery3 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti similique doloribus dicta assumenda nostrum recusandae qui.", src: gallery4 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti similique doloribus dicta assumenda nostrum recusandae qui.", src: gallery5 },
    { text: "Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti adipisicing elit. Eveniet saepe aut ipsum ratione? Possimus id, corrupti natus similique doloribus dicta assumenda nostrum recusandae qui.", src: gallery6 },
]


export const servicesNavLinks: string[] = ['Web Design', 'Graphic Design', 'Online Support', 'App Design', 'Online Marketing', 'Seo Services']


export const workNavLinks: string[] = ["All", "Graphic Design", "Web Design", "Landing Pages", "Wordpress"];

type workGalleryImages = {
    src: StaticImageData,
    category: string,
}
export const workGalleryImages: workGalleryImages[] = [
    { src: workGallery1, category: "Graphic Design" },
    { src: workGallery2, category: "Web Design" },
    { src: workGallery3, category: "Landing Pages" },
    { src: workGallery4, category: "Wordpress" },
    { src: workGallery5, category: "Graphic Design" },
    { src: workGallery6, category: "Web Design" },
    { src: workGallery7, category: "Landing Pages" },
    { src: workGallery8, category: "Wordpress" },
    { src: workGallery9, category: "Graphic Design" },
    { src: workGallery10, category: "Web Design" },
    { src: workGallery11, category: "Landing Pages" },
    { src: workGallery12, category: "Wordpress" },
];


export const priceServices: string[] = ['1 Hosting', '2 Email Marketing', '5 Database', '2 Design Pack', '3 Website Layout', '5 Header Style', '3 Online Store']

type testmonialData = {
    quote: string,
    name: string,
    role: string,
    src: StaticImageData,
}
export const testmonialData: testmonialData[] = [
    {
        quote:
            "Success isn't built overnight; it's crafted through persistence, learning from failure, and believing in your ability to improve even when results take time to appear.",
        name: "Hassan Ali",
        role: "UX Designer",
        src: testmonialIamge1
    },
    {
        quote: "Leadership is not about control but connection the art of inspiring trust, guiding through uncertainty, and creating an environment where others can shine.",
        name: "Huzaifa",
        role: "Web Developer",
        src: testmonialImage2
    },
    {
        quote:
            "Creativity thrives when passion meets purpose it's the courage to see possibility where others see limits, and to keep building when no one else believes.",
        name: "Ali",
        role: "UI Designer",
        src: testmonialImage3
    },
    {
        quote: "True growth begins when comfort ends; challenges shape resilience, mistakes teach humility, and persistence turns small steps into lasting achievement.",
        name: "Hassan",
        role: "UI/UX Designer",
        src: testmonialImage4
    },
]
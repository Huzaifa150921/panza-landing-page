'use client'
import React, { useState } from "react";
import Image from "next/image";

import image1 from '@/public/images/gallery/gallery1.jpg';
import image2 from '@/public/images/gallery/gallery2.jpg';
import image3 from '@/public/images/gallery/gallery3.jpg';
import image4 from '@/public/images/gallery/gallery4.jpeg';
import image5 from '@/public/images/gallery/gallery5.png';
import image6 from '@/public/images/gallery/gallery6.jpg';
import image7 from '@/public/images/gallery/gallery7.jpg';
import image8 from '@/public/images/gallery/gallery8.jpg';
import image9 from '@/public/images/gallery/gallery9.jpg';
import image10 from '@/public/images/gallery/gallery10.jpg';
import image11 from '@/public/images/gallery/gallery11.jpg';
import image12 from '@/public/images/gallery/gallery12.png';

const WorkNavbar = () => {
    const navlinks: string[] = ["All", "Graphic Design", "Web Design", "Landing Pages", "Wordpress"];
    const [active, setActive] = useState<string>("All");

    const images = [
        { src: image1, category: "Graphic Design" },
        { src: image2, category: "Web Design" },
        { src: image3, category: "Landing Pages" },
        { src: image4, category: "Wordpress" },
        { src: image5, category: "Graphic Design" },
        { src: image6, category: "Web Design" },
        { src: image7, category: "Landing Pages" },
        { src: image8, category: "Wordpress" },
        { src: image9, category: "Graphic Design" },
        { src: image10, category: "Web Design" },
        { src: image11, category: "Landing Pages" },
        { src: image12, category: "Wordpress" },
    ];

    const filteredImages =
        active === "All" ? images : images.filter(img => img.category === active);

    return (
        <div>
            <ul className="flex flex-wrap justify-center ">
                {navlinks.map((link, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setActive(link)}
                            className={`p-3 px-6 border transition-all duration-300  
              ${active === link
                                    ? "border-t-2 border-t-work-borderactive text-work-navtextactive"
                                    : "border border-work-border text-work-navtext"}`}
                        >
                            {link}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3  mt-5">
                {filteredImages.map((img, index) => (
                    <div key={index} className="relative w-full h-20  overflow-hidden ">
                        <Image
                            src={img.src}
                            alt={`Gallery ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkNavbar;

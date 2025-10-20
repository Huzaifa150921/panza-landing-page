'use client'
import React, { useState } from "react";
import Image from "next/image";
import { workNavLinks } from "@/app/constants/constants";
import { workGalleryImages } from "@/app/constants/constants";

const WorkNavbar = () => {

    const [active, setActive] = useState<string>("All");



    const filteredImages =
        active === "All" ? workGalleryImages : workGalleryImages.filter(img => img.category === active);

    return (
        <div>
            <ul className="flex flex-wrap justify-center ">
                {workNavLinks.map((link, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setActive(link)}
                            className={`p-3 px-6 border transition-all duration-300  
              ${active === link
                                    ? "border-t-2 border-t-work-borderactive text-work-navtextactive"
                                    : "border border-work-border text-work-navtext"} hover:text-work-navtextactive`}
                        >
                            {link}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-3  mt-5 mx-2 md:mx-0">
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

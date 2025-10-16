import React from "react"

const AboutProgressBar = () => {
    const skills = [
        { name: "USER INTERFACE", value: 70, color: "bg-about-progress1" },
        { name: "WEB DESIGN", value: 85, color: "bg-about-progress2" },
        { name: "WORDPRESS", value: 70, color: "bg-about-progress3" },
        { name: "HTML & CSS", value: 90, color: "bg-about-progress4" },
        { name: "APP DESIGN", value: 80, color: "bg-about-progress5" },
    ]

    return (
        <div className="flex flex-col gap-6 items-center sm:items-start w-[85vw] sm:w-[65vw] md:w-[45vw]">
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="relative w-full h-[5vh] bg-transparent border border-about-progressborder overflow-hidden"
                >
                    <div
                        className={`h-full ${skill.color} transition-all duration-700 ease-out`}
                        style={{ width: `${skill.value}%` }}
                    ></div>
                    <span className="absolute inset-0 flex items-center justify-start p-2 text-about-progresstext font-extrabold text-xs sm:text-sm md:text-base">
                        {skill.name}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default AboutProgressBar

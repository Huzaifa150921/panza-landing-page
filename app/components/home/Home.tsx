import React, { forwardRef } from 'react'
import PrimaryButton from '@/app/components/uielements/buttons/primarybutton/PrimaryButton'

const Home = forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className="bg-home bg-cover bg-center min-h-screen w-full relative">
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 text-center">
                <div className="flex flex-col gap-8 sm:gap-10 md:gap-16 items-center max-w-4xl w-full">
                    <div>
                        <h2 className="text-home-headingprimary text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
                            THE PANZA IS <span className="text-home-headingsecondary">WORDPRESS THEME</span>
                        </h2>
                        <h1 className="text-home-headingprimary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mt-3 mb-3 leading-tight">
                            WE ARE CREATIVE
                        </h1>
                        <h6 className="text-home-body text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            Just Buy And Enjoy These Awesome Features
                        </h6>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <PrimaryButton
                            text="Explore Now"
                            color="text-button-text"
                            bgColor="bg-button-bggreen"
                            borderColor="border-button-border"
                        />
                        <PrimaryButton
                            text="Purchase Now"
                            color="text-button-text"
                            bgColor="bg-button-bgblue"
                            borderColor="border-button-border"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})
Home.displayName = "Home"

export default Home

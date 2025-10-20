'use client'
import React, { useLayoutEffect, useRef } from 'react'
import Button from "@/app/components/uielements/buttons/primarybutton/PrimaryButton"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ServicesSecondary = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const headingRef = useRef<HTMLHeadingElement | null>(null)
    const paraRef = useRef<HTMLParagraphElement | null>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            })

            t1.from(headingRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            })
                .from(paraRef.current, {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                }, '-=1')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={sectionRef}
            className='bg-service h-auto pb-20 pt-20 w-full bg-cover bg-center flex flex-col justify-center items-center text-center px-4 sm:px-8'
        >
            <h1
                ref={headingRef}
                className='text-servicesSecondary-heading text-sm sm:text-2xl md:text-3xl font-extrabold mb-3'
            >
                EVERYTHING IS READY. JUST BUY AND INSTALL NOW
            </h1>
            <p
                ref={paraRef}
                className='text-servicesSecondary-text text-xs sm:text-sm md:text-base mb-10 max-w-[700px]'
            >
                Smooth reliable, responsive ready, perfect portfolio. Unique blog layout and many options for you.
            </p>
            <Button
                bgColor='bg-servicesSecondary-buttonbg'
                borderColor='border-servicesSecondary-buttonborder'
                color='text-servicesSecondary-buttontext'
                text='PURCHASE NOW'
            />
        </div>
    )
}

export default ServicesSecondary

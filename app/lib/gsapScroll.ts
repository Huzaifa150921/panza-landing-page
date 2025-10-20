'use client'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin)
}

export { gsap }

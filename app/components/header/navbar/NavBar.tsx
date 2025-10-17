'use client'
import React, { useLayoutEffect, useRef, useState } from 'react'
import NavbarItems from '@/app/components/header/navbar/navbaritems/NavbarItems'
import Home from "@/app/components/home/Home"
import { FiMenu, FiX } from "react-icons/fi"

const NavBar = () => {
    const [navbarHeight, setNavbarHeight] = useState<number>(0)
    const navbarRef = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [menuOpen, setMenuOpen] = useState<boolean>(false)

    useLayoutEffect(() => {
        setLoading(true)
        if (!navbarRef.current) return
        const handleResize = (entries: ResizeObserverEntry[]) => {
            for (const entry of entries) {
                setNavbarHeight(entry.contentRect.height)
            }
        }
        const resizeObserver = new ResizeObserver(handleResize)
        resizeObserver.observe(navbarRef.current)
        const timer = setTimeout(() => setLoading(false), 900)
        return () => {
            resizeObserver.disconnect()
            clearTimeout(timer)
        }
    }, [])

    return (
        <>
            <div
                ref={navbarRef}
                className="min-h-[10vh] lg:min-h-[15vh] bg-navbar-bg flex items-center justify-between px-6 lg:px-0 lg:justify-evenly  fixed min-w-[100vw] z-50"
            >
                <h1 className="text-navbar-text text-3xl font-extrabold">
                    PANZ<span className="text-navbar-accent">A</span>
                </h1>
                <div className="hidden lg:flex">
                    <NavbarItems navbarHeight={navbarHeight} loading={loading} />
                </div>
                <div className="lg:hidden text-navbar-text">
                    {menuOpen ? (
                        <FiX size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
                    ) : (
                        <FiMenu size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
                    )}
                </div>
            </div>
            <div
                className={`fixed top-[15vh] left-0 min-w-[100vw] bg-navbar-bg flex flex-col items-center justify-center gap-6 py-6 transition-all duration-300 lg:hidden z-[60] ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                    }`}
            >
                <NavbarItems navbarHeight={navbarHeight} loading={loading} isMobile onClose={() => setMenuOpen(false)} />
            </div>
            <Home />
        </>
    )
}

export default NavBar

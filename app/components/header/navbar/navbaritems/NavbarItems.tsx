import React, { useRef, useState, useEffect } from "react"
import { IoSearch } from "react-icons/io5"

type NavbarItemProps = {
    navbarHeight: number
    loading: boolean
    isMobile?: boolean
    onClose?: () => void
}

const navlinks = ["HOME", "ABOUT", "SKILLS", "SERVICE", "WORK", "TESTMONIAL", "BLOG", "TEAM", "CONTACT"]

const NavbarItems = ({ navbarHeight, loading, isMobile, onClose }: NavbarItemProps) => {
    const [active, setActive] = useState("HOME")
    const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 })
    const itemRefs = useRef<Array<HTMLLIElement | null>>([])

    useEffect(() => {
        const activeIndex = navlinks.indexOf(active)
        const current = itemRefs.current[activeIndex]
        if (current) {
            const { offsetLeft, offsetWidth } = current
            setLineStyle({ left: offsetLeft, width: offsetWidth })
        }
    }, [active])

    return (
        <div className="relative inline-block">
            <ul
                className={`list-none ${isMobile ? "flex flex-col items-center gap-4" : "flex gap-5 items-center"} relative`}
            >
                {navlinks.map((link, index) => (
                    <li
                        key={link}
                        ref={(el) => {
                            itemRefs.current[index] = el
                        }}
                        className="relative cursor-pointer"
                        onClick={() => {
                            setActive(link)
                            if (onClose) onClose()
                        }}
                    >
                        <a
                            className={`no-underline text-sm tracking-wide ${active === link ? "text-navbar-accent" : "text-navbar-text"}`}
                            href="#"
                        >
                            {link}
                        </a>
                    </li>
                ))}
                {!isMobile && (
                    <>
                        <IoSearch size={20} className="cursor-pointer ml-2 text-navbar-text" />
                        <span
                            className={`absolute h-[2px] bg-navbar-accent rounded transition-all duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
                            style={{
                                left: lineStyle.left,
                                width: lineStyle.width,
                                top: navbarHeight / 1.6,
                            }}
                        />
                    </>
                )}
            </ul>
        </div>
    )
}

export default NavbarItems

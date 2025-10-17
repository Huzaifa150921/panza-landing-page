import React, { useRef, useState, useEffect } from "react"
import { IoSearch } from "react-icons/io5"

type NavbarItemProps = {
    navbarHeight: number
    loading: boolean
    isMobile?: boolean
    onClose?: () => void
    sections: { [key: string]: React.RefObject<HTMLElement | null> }
}

const navlinks = ["HOME", "FEATURES", "ABOUT", "WORK", "SERVICES", "NEWS", "TESTMONIAL", "TEAM", "CONTACT"]

const NavbarItems = ({ navbarHeight, loading, isMobile, onClose, sections }: NavbarItemProps) => {
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


    const handleClick = (link: string) => {
        setActive(link)
        if (onClose) onClose()
        const sectionRef = sections[link]
        if (sectionRef?.current) {
            const offset = navbarHeight || 0
            const top = sectionRef.current.offsetTop - offset
            window.scrollTo({ top, behavior: "smooth" })
        }
    }


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

                    >
                        <a
                            className={`no-underline text-sm tracking-wide ${active === link ? "text-navbar-accent" : "text-navbar-text"}`}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                handleClick(link)
                            }}
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
        </div >
    )
}

export default NavbarItems

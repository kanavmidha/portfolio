'use client'
import { navLinks } from "@/utils/api/links"
import Link from "next/link"
import { useState } from "react"
import HamburgerIcon from "./HamburgerIcon"


export default function HamburgerNav() {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <>
            <HamburgerIcon
                onClick={handleClick}
                clicked={clicked}
            />
            <div className={`
                bg-beige
                fixed
                top-2
                rounded-[3rem]
                m-2
                ml-[10%]
                h-[95%]
                w-[90%]
                transform
                transition
                duration-[600ms]
                z-[1]
                border-night
                border-[2px]
                overflow-hidden
                ${clicked ? '-translate-x-4' : 'translate-x-full'}
                `}>
                <nav className={`
                    absolute
                    right-[35px]
                    top-20
                    text-right
                    transition-[height]
                    duration-[600ms]
                    overflow-hidden
                    text-black
                    `}>
                    <ul>
                        {navLinks.map((link, index) => {
                            return (
                                <li key={index} className="
                                    py-[0.15rem]
                                    lg:py-2
                                    w-fit
                                    text-right
                                    ml-auto">
                                    <Link href={link.url} className="text-[2rem]
                                        uppercase
                                        relative
                                        after:h-[2px]
                                        after:w-0
                                        after:block
                                        after:absolute
                                        hover:after:w-full
                                        focus-within:after:w-full
                                        after:origin-bottom-left
                                        after:transition-all
                                        after:duration-[200ms]">{link.title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                <svg className="w-[110%] fill-night absolute z-[-1] -top-44 left-32" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" />
                </svg>
                <svg className="w-[90%] fill-off-white absolute z-[-2] -top-16 left-44" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50" />
                </svg>

            </div>
        </>
    )

}
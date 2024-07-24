'use client'
import { navLinks } from "@/utils/api/links"
import Link from "next/link"
import { useEffect, useRef } from "react"
import HamburgerIcon from "./HamburgerIcon"


export default function Navigation (props) {

    const links = useRef([])

    useEffect(()=>{
        links.current.forEach(link=>{
            link.classList.add(props.afterHover)
        })
    },[props.afterHover])

    return ( 
        <>
            <HamburgerIcon/>
            <nav className="absolute 
                right-[32px] 
                transition 
                duration-300 
                h-0 
                overflow-hidden">
                <ul>
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index} className="
                                py-[0.15rem]
                                lg:py-2">
                                <Link ref={(l)=>{links.current[index]=l}} href={link.url} className="text-lg
                                    lg:text-[1.5rem] 
                                    relative 
                                    after:h-[2px] 
                                    after:w-0 
                                    after:block 
                                    after:absolute 
                                    hover:after:w-full 
                                    after:origin-bottom-left
                                    after:transition-all 
                                    after:duration-[200ms]">{link.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
    
}
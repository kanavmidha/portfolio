'use client'

import { useState, useRef } from "react"

export default function HamburgerIcon () {
    const icon = useRef()

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
        <div className={`hamburger-icon
            flex
            flex-col 
            gap-[5px] 
            h-[3rem] 
            w-[3rem] 
            justify-center 
            items-center 
            rounded-full 
            cursor-pointer
            border
            border-white
            mt-2
            `} ref={icon} onClick={handleClick}>
                <span className={`bg-white
                    h-[2px] 
                    rounded-full 
                    transition-[all] 
                    duration-[600ms] 
                    origin-left
                    ${clicked ? 'w-[1.4rem]' : 'w-[1.5rem]'}
                    ${clicked ? 'rotate-45' : 'rotate-0'}
                    ${clicked ? 'translate-x-[3px]' : 'translate-x-0'}
                    ${clicked ? '-translate-y-[4px]' : 'translate-x-0'}
                    `}></span>
                <span className={`bg-white
                    h-[2px] 
                    rounded-full 
                    transition-[all] 
                    duration-[600ms] 
                    origin-left
                    ${clicked ? 'w-[1.4rem]' : 'w-[1.5rem]'}
                    ${clicked ? '-rotate-45' : 'rotate-0'}
                    ${clicked ? 'translate-x-[3px]' : 'translate-x-0'}
                    ${clicked ? 'translate-y-[4px]' : 'translate-x-0'}
                    `}></span>
        </div>
    )
}
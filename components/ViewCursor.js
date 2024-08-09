'use client'
import {useRef, useState, useEffect } from "react"
import gsap from "gsap"

export default function ViewCursor () {

    const cursor = useRef()
    

    const [position, setPosition] = useState({top: 0, left: 0})

    
    // const cursor = document.querySelector('.view-cursor')

    // const scrollValue = window.scrollY

    // console.log(scrollValue())
    useEffect(()=>{
        const cards = document.querySelectorAll('.work-card')

        const mouseMove = (e) => {
                    
            if (cursor) {
                
                const x = e.clientX
                const y = e.clientY

                // console.log(x,y, window.scrollY)
                if (x && y) { setPosition({ top: y, left: x}) }
                

                /* if(cursor.current.classList.contains('hidden')) {
                    cursor.current.classList.replace('hidden', 'block')
                } */
                
            }

            gsap.to(cursor.current, {
                scale: 1,
                display: 'block',
                top: position.top,
                left: position.left,
                duration: 0.3,
                ease: 'power3'
            })

            // cursor.current.style.top = `${position.top - 20}px`
            // cursor.current.style.left = `${position.left}px`
        }

        const mouseLeave = () => {
            gsap.to(cursor.current, {
                transform: 'scale(0)',
                display: 'hidden',
                duration: 0.3,
                ease: 'power3'
            })
        }


        cards.forEach(card=>{
            card.addEventListener('mousemove', mouseMove)
            card.addEventListener('mouseleave', mouseLeave)
        })


        return()=>{
            cards.forEach((card)=>{
                card.removeEventListener('mousemove',mouseMove)
                card.removeEventListener('mouseleave',mouseLeave)
            })
        }
    },[position, cursor])
        


    return(
        <div ref={cursor} className="view-cursor p-8 rounded-full bg-jet text-off-white fixed duration-[200ms] pointer-events-none">
            <span className="absolute top-[30%] right-[25%]">view</span>
        </div>
    )
}
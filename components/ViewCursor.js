'use client'
import { useEffect, useState } from "react"



export default function ViewCursor () {

    const [position, setPosition] = useState({top: 0, left: 0, client: 0})
    
    useEffect(()=>{
        const cards = document.querySelectorAll('.work-card')
        
        const cursor = document.querySelector('.view-cursor')

        // const scrollValue = window.scrollY

        // console.log(scrollValue())
        const mouseMove = (e) => {
                
            if (cursor) {
                
                const x = e.pageX
                const y = e.pageY
                const client = e.clientY

                // console.log(x,y, window.scrollY)
                if (x && y) { setPosition({ top: y, left: x, client: client }) }
                

                if(cursor.classList.contains('hidden')) {
                    cursor.classList.replace('hidden', 'block')
                }
            }
        }

        if (position) {
            cursor.style.top = `${position.top}px`
            cursor.style.left = `${position.left}px`
        } 
            
        cards.forEach(card=>{
            card.addEventListener('mousemove', mouseMove)
        })

        return()=>{
            cards.forEach(card=>{
                card.removeEventListener('mousemove', mouseMove)
            })
        }
    }, [position])

    return(
        <div className="view-cursor hidden p-8 rounded-full bg-jet text-off-white fixed duration-[200ms] pointer-events-none">
            <span className="absolute top-[30%] right-[25%]">view</span>
        </div>
    )
}
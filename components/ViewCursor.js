'use client'
import { useEffect, useState } from "react"



export default function ViewCursor () {

    const [position, setPosition] = useState({top: 0, left: 0})
    
    useEffect(()=>{
        const cards = document.querySelectorAll('.work-card')
        
        const cursor = document.querySelector('.view-cursor')
           
        const mouseMove = (e) => {
                
            if (cursor) {
                

                // console.log(x,y)

                const x = e.pageX - window.scrollX
                const y = e.pageY - window.scrollY

                if (x && y) { setPosition({ top: y, left: x }) }
                

                if(cursor.classList.contains('hidden')) {
                    cursor.classList.replace('hidden', 'block')
                }
            }
        }       
            
        cards.forEach(card=>{
            card.addEventListener('mousemove', mouseMove)
        })

        return()=>{
            cards.forEach(card=>{
                card.removeEventListener('mousemove', mouseMove)
            })
        }
    }, [])

    return(
        <div className="view-cursor hidden p-8 rounded-full bg-jet text-off-white absolute transition-all duration-[300ms]" style={{top:`${position.top}px`, left:`${position.left}px`, transitionTimingFunction: 'ease-in-out'}}>
            <span className="absolute top-[30%] right-[25%]">view</span>
        </div>
    )
}
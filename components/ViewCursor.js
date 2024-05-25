'use client'
import { useEffect, useState } from "react"



export default function ViewCursor () {

    const [position, setPosition] = useState({top: 0, left: 0})
    
    useEffect(()=>{
        const cards = document.querySelectorAll('.work-card')
        
        const cursor = document.querySelector('.view-cursor')

        const scrollValue = (value) => {
            value = window.scrollY
            return value
        }
        console.log(scrollValue())
        const mouseMove = (e) => {
                
            if (cursor) {
                
                const x = e.pageX
                const y = e.pageY
                // console.log(x,y, window.scrollY)
                if (x && y) { setPosition({ top: y, left: x }) }
                

                if(cursor.classList.contains('hidden')) {
                    cursor.classList.replace('hidden', 'block')
                }
            }
        }       

        document.addEventListener('scroll', scrollValue)
            
        cards.forEach(card=>{
            card.addEventListener('mousemove', mouseMove)
        })

        return()=>{
            document.removeEventListener('scroll', scrollValue)
            cards.forEach(card=>{
                card.removeEventListener('mousemove', mouseMove)
            })
        }
    }, [])

    return(
        <div className="view-cursor hidden p-8 rounded-full bg-jet text-off-white absolute duration-[200ms]" style={{top:`${position.top}px`, left:`${position.left}px`, transitionTimingFunction: 'ease-out'}}>
            <span className="absolute top-[30%] right-[25%]">view</span>
        </div>
    )
}
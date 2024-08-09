'use client'
import ReactLenis from "@studio-freight/react-lenis"

export default function SmoothScrolling({children}) {   
    return (
        <ReactLenis root
            options={{
                duration: 1.4
            }}
        > 
            {children}
        </ReactLenis>
    )
} 
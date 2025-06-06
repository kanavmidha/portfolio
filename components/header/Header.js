'use client'

import Link from "next/link"
import Navigation from "./Navigation"
import { useEffect, useState } from "react"

export default function Header ({
    location
}) {

    const [inViewport, setInViewport] = useState(true)

    // useEffect()

    return (
        <header className="relative flex justify-between md:items-center pt-5 px-8 xl:px-12 w-full z-[1]">
            <h1 className="w-14 hover:scale-125 focus:scale-125 focus-within:scale-125 transition"><Link href={'/'}><svg className="fill-night" viewBox="0 0 68.04 86.08"><g><g><path d="M15.2,66.8H3.2V13.2h12Zm33.36,0H34.4l-10-14.48H9.68V41.6H24.32L34.56,26.72H48.8L34.16,46.08Z" /><path d="M65.64,61.69a1.2,1.2,0,0,1-1.68,0l-2.05-2a1.18,1.18,0,0,1,0-1.68L64,55.91a1.18,1.18,0,0,1,1.68,0l2,2.05a1.2,1.2,0,0,1,0,1.68Zm-9.52,0a1.2,1.2,0,0,1-1.68,0l-2-2a1.18,1.18,0,0,1,0-1.68l2-2.05a1.18,1.18,0,0,1,1.68,0L58.17,58a1.2,1.2,0,0,1,0,1.68Zm4.76,4.76a1.18,1.18,0,0,1-1.68,0l-2.05-2a1.18,1.18,0,0,1,0-1.68l2.05-2a1.2,1.2,0,0,1,1.68,0l2,2a1.2,1.2,0,0,1,0,1.68Zm0-9.52a1.2,1.2,0,0,1-1.68,0l-2.05-2a1.18,1.18,0,0,1,0-1.68l2.05-2.05a1.18,1.18,0,0,1,1.68,0l2,2.05a1.2,1.2,0,0,1,0,1.68Z" /></g></g></svg></Link></h1>
            <Navigation
                location={location}/>
        </header>
    )
}
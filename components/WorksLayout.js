'use client'

import { useState } from "react"

export default function WorksLayout ({
    a,
    link,
    image,
    lgImg,
    smImg,
    h3,
    name,
    role,
}) {

    const [isHover, setIsHover] = useState(false)

    const onEnter = () => {
        setIsHover(true)
    }

    const onLeave = () => {
        setIsHover(false)
    }

    return (
        <a className={a} href={link} onMouseEnter={ onEnter } onMouseLeave={ onLeave } target="_blank">
            <div>
                <h3 className={h3}>{name}</h3>
                <picture className={image}>
                    <source srcSet={lgImg} media="(min-width:500px)"></source>
                    <img className={image} src={smImg}></img>
                </picture>
                <div className="flex flex-row gap-2 py-2">
                    {role && (
                        role.map((r,index)=>{
                            return (
                                <div key={index} className="px-2 py-1 bg-night text-white font-light border border-white rounded-full inline-block">{r}</div>
                                
                            )
                        })    
                    )}
                </div>
            </div>
        </a>
    )
}
'use client'
import { navLinks } from "@/utils/api/links"
import CustomLink from "../CustomLink"

export default function Navigation ({
    location
}) {


    return (
        <nav className={`
            text-right
            transition-[height]
            duration-[600ms]
            overflow-hidden
            text-night
            `}>
            <ul className="md:flex flex-row">
                {navLinks.map((link, index) => {
                    return (
                        <li key={index} className="
                            py-[0.15rem]
                            md:px-[0.5rem]
                            lg:py-2
                            w-fit
                            text-right
                            mr-auto
                            font-sans
                            font-semibold">
                            <CustomLink
                                path={link.url}
                                location={location}
                                title={link.title}
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    ) 
}

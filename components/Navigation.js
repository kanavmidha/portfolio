import { navLinks } from "@/utils/api/links"
import Link from "next/link"


export default function Navigation () {
    return ( 
        <nav>
            <ul>
                {navLinks.map((link, index) => {
                    return (
                        <li key={index} className="py-2">
                            <Link href={link.url} className="text-lg xl:text-[1.5rem]">{link.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
    
}
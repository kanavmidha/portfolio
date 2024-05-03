import { navLinks } from "@/utils/api/links"
import Link from "next/link"


export default function Navigation () {
    return ( 
        <nav>
            <ul>
                {navLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link href={link.url}>{link.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
    
}
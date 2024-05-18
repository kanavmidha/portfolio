import { navLinks } from "@/utils/api/links"
import Link from "next/link"


export default function Navigation (props) {

    const linkStyles = `text-lg xl:text-[1.5rem] relative after:h-[2px] after:w-0 after:${props.underlineColor} after:block after:absolute hover:after:w-full after:origin-bottom-left after:transition-all after:duration-[200ms]`

    return ( 
        <nav>
            <ul>
                {navLinks.map((link, index) => {
                    return (
                        <li key={index} className="py-1 lg:py-2">
                            <Link href={link.url} className={linkStyles}>{link.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
    
}
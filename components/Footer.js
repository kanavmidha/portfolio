import Link from "next/link"
import Navigation from "./Navigation"

export default function Footer () {
    return (
        <footer>
            <span>Want to take your brand to the modern era?</span>
            <Link href={'/contact'}>Get in touch</Link> 
            <span>with me!</span>
            <div>
                <h3>Navigation</h3>
                <Navigation/>
            </div>

            <div>
                <h3>Profile</h3>
                <Link href={'https://www.linkedin.com/in/kanav-midha-24781b259/'}>LinkedIn</Link>
                <Link href={'https://github.com/kanavmidha'}>Github</Link>
            </div>

            <button>Back to Top <span><svg viewBox="0 0 33 25">
                <path d="M13.4357 1.84205L0.88686 20.3326C0.306928 21.1866 0 22.047 0 22.7621C0 24.1447 1.10003 25 2.94133 25L30.0629 25C31.9021 25 33 24.1458 33 22.7664C33 22.0502 32.6928 21.2035 32.1113 20.3477L19.5627 1.84852C18.7544 0.658838 17.6667 0 16.4985 0C15.3312 -0.000268936 14.2437 0.651024 13.4357 1.84205Z"/>
            </svg>
</span></button>
        </footer>
    )
}
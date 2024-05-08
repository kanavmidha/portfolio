import Link from "next/link"
import Navigation from "./Navigation"

export default function Footer () {
    return (
        <footer className="bg-beige text-black px-8 py-8">
            <div className=" flex flex-col items-center max-xs:max-w-[25rem] sm:max-w-[37.75rem] mx-auto">
                <span className="text-center text-lg">Want to take your brand to the modern era?</span>
                <Link href={'/contact'} className="text-[2.5rem] text-center font-serif underline xs:text-[4rem] sm:text-[6rem]">Get in touch</Link>
                <span className="text-lg w-fit ml-auto block">with me!</span>
            </div>
            
            <div className="flex justify-between mt-6 xs:max-w-[25rem]">
                <div className="mb-3">
                    <h3 className="text-[1.5rem] uppercase">Navigation</h3>
                    <Navigation/>
                </div>
                <div className="flex flex-col mb-3">
                    <h3 className="text-[1.5rem] uppercase">Profile</h3>
                    <Link href={'https://www.linkedin.com/in/kanav-midha-24781b259/'} className="text-lg">LinkedIn</Link>
                    <Link href={'https://github.com/kanavmidha'} className="text-lg">Github</Link>
                </div>
            </div>

            <button className="py-3 px-4 w-max bg-black text-beige rounded-full ml-auto block">Back to Top <span className="w-min inline-block"><svg className="w-4 fill-beige ml-2" viewBox="0 0 33 25">
                <path d="M13.4357 1.84205L0.88686 20.3326C0.306928 21.1866 0 22.047 0 22.7621C0 24.1447 1.10003 25 2.94133 25L30.0629 25C31.9021 25 33 24.1458 33 22.7664C33 22.0502 32.6928 21.2035 32.1113 20.3477L19.5627 1.84852C18.7544 0.658838 17.6667 0 16.4985 0C15.3312 -0.000268936 14.2437 0.651024 13.4357 1.84205Z"/>
            </svg>
</span></button>
        </footer>
    )
}
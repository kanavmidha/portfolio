'use client'
import Link from "next/link"
import ScrollTop from "../ScrollTop"
import FooterNav from "./FooterNav"
import ProfileLinks from "./ProfileLinks"

export default function Footer ({
    location,
    backgroundColor
}) {


    return (
        <div className={backgroundColor}>
            <footer className="px-8 py-8 sm:px-14 lg:px-20">
                <div className=" flex flex-col items-center max-xs:max-w-[25rem] sm:max-w-[37.75rem] md:max-w-[50rem] lg:max-w-[60rem] xl:max-w-[70rem] mx-auto">
                    <span className="text-center text-lg lg:text-2xl">Want to take your brand to the modern era?</span>
                    <Link href={'/contact'} className="text-[2.5rem]/[1] xs:text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem] text-center font-serif relative after:h-1 after:w-0 xs:after:bottom-[10px] sm:after:bottom-[25px] after:block after:absolute after:bottom-0 hover:after:w-full after:origin-bottom-left after:transition-all after:duration-[500ms]">Get in touch</Link>
                    <span className="text-lg lg:text-2xl w-fit ml-auto block">with me!</span>
                </div>
            
                <div className="flex justify-between lg:gap-40 mt-6 xs:max-w-[25rem] xl:max-w-[35rem]">
                    <div className="mb-3">
                        <h3 className="text-[1.5rem] xl:text-[2.15rem] uppercase">Navigation</h3>
                        <FooterNav
                            location={location}
                        />
                    </div>
                    <div className="flex flex-col mb-3">
                        <h3 className="text-[1.5rem] xl:text-[2.15rem] uppercase">Profile</h3>
                        <ProfileLinks
                            location={location}    
                        />
                    </div>
                </div>
                <ScrollTop
                    location={location}
                />
            </footer>
        </div>
    )
}
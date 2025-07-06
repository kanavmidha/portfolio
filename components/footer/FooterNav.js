'use client'
import CustomLink from "@/components/CustomLink";

export default function FooterNav({location}) {

    let interactiveClasses

    if (location === 'home') {
        interactiveClasses = 'hover:after:bg-night focus-within:after:bg-night active:after:bg-night'
    } else {
        if (location === 'contact') {
            interactiveClasses = 'hover:after:bg-beige focus-within:after:bg-beige active:after:bg-beige'
        }
    }

    return (
        <div className="flex flex-col text-lg *:py-[0.15rem]">
            <CustomLink
                title='Home'
                path='/'
                interactiveClasses={interactiveClasses}
            />
            <CustomLink
                title='Services'
                path='/#services'
                interactiveClasses={interactiveClasses}
            />
            <CustomLink
                title='Works'
                path='/#works'
                interactiveClasses={interactiveClasses}
            />
            <CustomLink
                title='About'
                path='/#about'
                interactiveClasses={interactiveClasses}
            />
            <CustomLink
                title='Contact'
                path='/contact'
                interactiveClasses={interactiveClasses}
            />
        </div>
    )
}
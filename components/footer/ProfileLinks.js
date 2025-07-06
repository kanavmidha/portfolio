import CustomLink from "../CustomLink";
import DownloadLink from "../DownloadLink";

export default function ProfileLinks ({
    location
}) {

    let interactiveClasses

    if (location === 'home') {
        interactiveClasses = 'hover:after:bg-night focus-within:after:bg-night active:after:bg-night'
    } else {
        if (location === 'contact') {
            interactiveClasses = 'hover:after:bg-beige focus-within:after:bg-beige active:after:bg-beige'
        }
    }

    return (
        <div className="
            flex
            flex-col
            text-lg
            *:py-[0.15rem]">
            <CustomLink
                title='LinkedIn'
                path='https://www.linkedin.com/in/kanav-midha-24781b259/'
                interactiveClasses={interactiveClasses}
            />
            <CustomLink
                title='Github'
                path='https://github.com/kanavmidha'
                interactiveClasses={interactiveClasses}
            />
            <DownloadLink
                title='Resume'
                path='kanav-resume.pdf'
                interactiveClasses={interactiveClasses}
            />
        </div>
    )
}
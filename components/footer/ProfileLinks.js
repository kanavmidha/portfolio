import CustomLink from "../CustomLink";
import DownloadLink from "../DownloadLink";

export default function ProfileLinks ({
    location
}) {
    return (
        <div className="
            flex
            flex-col
            text-lg
            *:py-[0.15rem]">
            <CustomLink
                title='LinkedIn'
                location={location}
                path='https://www.linkedin.com/in/kanav-midha-24781b259/'
            />
            <CustomLink
                title='Github'
                location={location}
                path='https://github.com/kanavmidha'
            />
            <DownloadLink
                title='Resume'
                location={location}
                path='kanav-resume.pdf'
            />
        </div>
    )
}
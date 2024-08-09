import CustomLink from "@/components/CustomLink";

export default function FooterNav({
    location
}) {
    return (
        <div className="flex flex-col text-lg *:py-[0.15rem]">
            <CustomLink
                title='Home'
                path='/'
                location={location}
            />
            <CustomLink
                title='Services'
                path='/#services'
                location={location}
            />
            <CustomLink
                title='Works'
                path='/#works'
                location={location}
            />
            <CustomLink
                title='About'
                path='/#about'
                location={location}
            />
            <CustomLink
                title='Contact'
                path='/contact'
                location={location}
            />
        </div>
    )
}
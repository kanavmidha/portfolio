'use client'

export default function HamburgerIcon ({
    onClick,
    clicked
}) {

    /* const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!clicked)
    } */

    return (
        <div className={`fixed
            top-4
            right-[1.5rem]
            flex
            flex-col 
            gap-[5px] 
            h-[3rem] 
            w-[3rem] 
            justify-center 
            items-center 
            rounded-full 
            cursor-pointer
            border
            mt-2
            z-20
            transition
            duration-[600ms]
            ${clicked ? 'border-black' : 'border-white'}
            `} onClick={onClick}>
                <span className={`
                    h-[2px] 
                    rounded-full 
                    transition-[all] 
                    duration-[600ms] 
                    origin-left
                    ${clicked ? 'w-[1.4rem]' : 'w-[1.5rem]'}
                    ${clicked ? 'rotate-45' : 'rotate-0'}
                    ${clicked ? 'translate-x-[3px]' : 'translate-x-0'}
                    ${clicked ? '-translate-y-[4px]' : 'translate-x-0'}
                    ${clicked ? 'bg-black' : 'bg-white'}
                    `}></span>
                <span className={`
                    h-[2px] 
                    rounded-full 
                    transition-[all] 
                    duration-[600ms] 
                    origin-left
                    ${clicked ? 'w-[1.4rem]' : 'w-[1.5rem]'}
                    ${clicked ? '-rotate-45' : 'rotate-0'}
                    ${clicked ? 'translate-x-[3px]' : 'translate-x-0'}
                    ${clicked ? 'translate-y-[4px]' : 'translate-x-0'}
                    ${clicked ? 'bg-black' : 'bg-white'}
                    `}></span>
        </div>
    )
}
'use client'
import { useEffect } from "react"

export default function ScrollTop (props) {

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo(0, 0)
        }

        const button = document.querySelector('.scroll-top')
        const svg = document.querySelector('.up-arrow')

        if (button) {
            if (button.classList.contains('bg-beige')) {
                svg.classList.add('fill-night')
            } else {
                svg.classList.add('fill-beige')
            }
        }

        if (window) {
            button.addEventListener('click', scrollToTop)
        }

        return () => {
            if (window) {
                button.removeEventListener('click', scrollToTop)
            }
        }        
    },[])

    const buttonClasses = `scroll-top py-3 px-4 w-max xl:text-2xl rounded-full ml-auto block ${props.buttonClass}`

    return (
        <button className={buttonClasses}>Back to Top 
            <span className="w-min inline-block">
                <svg className="up-arrow w-4 ml-2" viewBox="0 0 33 25">
                    <path d="M13.4357 1.84205L0.88686 20.3326C0.306928 21.1866 0 22.047 0 22.7621C0 24.1447 1.10003 25 2.94133 25L30.0629 25C31.9021 25 33 24.1458 33 22.7664C33 22.0502 32.6928 21.2035 32.1113 20.3477L19.5627 1.84852C18.7544 0.658838 17.6667 0 16.4985 0C15.3312 -0.000268936 14.2437 0.651024 13.4357 1.84205Z" />
                </svg>
            </span>
        </button>
    )
}
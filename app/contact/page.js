import Header from "@/components/Header"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"

export const metadata = {
    title: 'Contact',
    icons: [
        {
            url: '/favicon.png',
            rel: 'icon',
            type: 'image/png',
        }
    ]
}


export default function Page () {
    return (
        <div className="bg-beige text-night">
            <Header
                logo='fill-night'
                afterHover='after:bg-night'
            />
            <main className="pb-10">
                <section className="px-8 sm:px-14 h-[80vh] grid place-items-start pt-40">
                    <h2 className="font-serif text-[2rem] my-auto uppercase sm:text-[3rem] lg:text-[4.5rem] max-sm:max-w-[22.25rem] sm:max-w-[38rem] lg:max-w-[50rem]">You made the right decision - Let&apos;s get connected!</h2>
                </section>
                <section className="px-8 sm:px-14 lg:my-20 lg:mt-32">
                    {/* <p className="text-lg lg:text-2xl">The contact form is under development. It will be available soon!</p>
                    <p className="text-lg mt-6 lg:mt-10 lg:text-2xl">Please email me at <span>kanavmiddha0001@gmail.com</span></p> */}
                    <ContactForm/>
                </section>
            </main>
            <Footer
                background='bg-night text-beige'
                buttonClass='bg-beige text-night lg:w-[11.25rem] lg:text-xl'
                afterHover='after:bg-beige'
            />
        </div>
    )
}
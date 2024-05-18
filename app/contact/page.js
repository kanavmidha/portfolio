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
        <div className="bg-beige">
            <Header
                logo='fill-night'
            />
            <main className="pb-10">
                <section className="px-6 h-[80vh] grid place-items-center">
                    <h2 className="font-serif text-[2rem] uppercase">You made the right decision - Let's get connected!</h2>
                </section>
                <section className="px-6"><ContactForm/></section>
            </main>
            <Footer
                background='bg-night text-beige'
                buttonClass='bg-beige text-night'
            />
        </div>
    )
}
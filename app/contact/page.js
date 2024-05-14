import Header from "@/components/Header"

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
        <>
            <Header/>
            <main>
                <h2>You made the right decision. Let's get connected!</h2>
            </main>
        </>
    )
}
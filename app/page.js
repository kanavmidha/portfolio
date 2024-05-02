// 'use client'
import Navigation from "@/components/Navigation";
// import { useEffect } from "react";


export const metadata = {
  title: 'Kanav Midha - Freelance Developer',
  description: 'An enthusiastic freelancer web developer and designer based in Canada looking for opportunities across Canada.'
}

export default function Home() {
  
//   useEffect(()=>{
//   const initialScreen = document.querySelector('.initial-screen')

//   initialScreen.addEventListener('animationend', () => {
//     initialScreen.remove()
//   })
// }, [])

  return (
    <main>
      {/* <div className="initial-screen flex justify-center items-center bg-black text-white flex-col gap-4 text-lg w-svw h-screen fixed top-0 left-0 animate-slide-up">
        <p>&copy; Kanav Midha</p>
        <p>2024</p>
      </div> */}
      <Navigation/>
      <h1 className="font-serif">This is the home page.</h1>
    </main>
  );
}

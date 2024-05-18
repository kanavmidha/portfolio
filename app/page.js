// 'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorksLayout from "@/components/WorksLayout";
import { works } from "@/utils/api/works";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import atomicImprov from "@/public/atomicImprov.png"
// import { useEffect } from "react";

export const metadata = {
  title: 'Kanav Midha',
  description: 'An enthusiastic freelancer web developer and designer based in Canada looking for opportunities across Canada.',
  icons: [
    {
      url: '/favicon.png',
      rel: 'icon',
      type: 'image/png',
    }
  ]
}

export default function Home() {
  
//   useEffect(()=>{
//   const initialScreen = document.querySelector('.initial-screen')

//   initialScreen.addEventListener('animationend', () => {
//     initialScreen.remove()
//   })
// }, [])

  return (
    <div className="bg-night text-white">
      <Header
        logo='fill-white'
        underlineColor='bg-white'
      />
      <main>
        {/* <div className="initial-screen flex justify-center items-center bg-black text-white flex-col gap-4 text-lg w-svw h-screen fixed top-0 left-0 animate-slide-up">
          <p>&copy; Kanav Midha</p>
          <p>2024</p>
        </div> */}
        <section className="px-8 h-dvh grid place-items-center relative pt-36">
          <h2 className="intro animate-slide-down text-[3rem] uppercase font-serif text-center max-w-[33.12rem] mx-auto sm:text-[4rem] lg:text-[6rem] lg:max-w-[50rem] xl:text-[7rem] xl:max-w-[60rem]">Hi There, I'm <span className="w-fit inline-block ml-2"><svg className="star w-9 sm:w-11 lg:w-16 xl:w-20 fill-white hidden xs:block animate-slow-spin" viewBox="0 0 64 64"><g><g><path d="M34.29,0H29.71V26.48L11,7.76,7.76,11,26.48,29.71H0v4.58H26.48L7.76,53,11,56.24,29.71,37.52V64h4.58V37.52L53,56.24,56.24,53,37.52,34.29H64V29.71H37.52L56.24,11,53,7.76,34.29,26.48Z" /></g></g></svg></span> Kanav Midha</h2>
          <span className="absolute hidden xl:flex rotate-90 items-center text-jet text-xl right-[-7rem] bottom-[18rem] before:mr-3 before:flex before:w-20 before:fixed before:bg-jet before:h-1 before:left-[-6rem] before:animate-scroll-down">scroll to find out your brand solution</span>
        </section>

        <section id="services" className="rounded-[2rem] bg-beige mt-8 px-8 sm:px-14 lg:px-20 text-night py-8 scale-95 animate-enter-zoom">
          <h2 className="text-[2.5rem] xl:text-[5rem] font-serif uppercase overflow-clip"><span className="translate-y-20 animate-text-reveal inline-block">What I do.</span></h2>
          <div className="mt-6 sm:grid grid-cols-10">
            <h3 className="text-[2rem] xl:text-[3rem] font-serif mb-3 col-span-full"><span className="mr-2">01.</span> Web Development</h3>
              <p className="mb-3 text-lg xl:text-2xl col-span-5 md:col-span-4">I create custom-coded websites as unique as your brand. I focus on usability, scalability, performance and accessibility to tailor the website to your specific brand needs.</p>
              <div className=" flex flex-col gap-3 col-end-[-1] col-span-3">
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">Databases</span>
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">CMS Integration</span>
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">Motion & Animations</span>
              </div>
          </div>
          
          <div className="mt-6 sm:grid grid-cols-10">
            <h3 className="text-[2rem] xl:text-[3rem] font-serif mb-3 col-span-full"><span className="mr-2">02.</span> Web Design</h3>
              <p className="mb-3 text-lg xl:text-2xl col-span-5 md:col-span-4">Your website wants to be alive, I got you covered! I create awe-inspiring designs for your business to give it a new life. I focus on modern design principles to tailor your website to current trends that help it reach to a greater audience.</p>
              <div className=" flex flex-col gap-3 col-end-[-1] col-span-3">
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">UI/UX</span>
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">User Research</span>
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">Responsive Design</span>
              </div>
          </div>

          <div className="mt-6 sm:grid grid-cols-10">
            <h3 className="text-[2rem] xl:text-[3rem] font-serif mb-3 col-span-full"><span className="mr-2">03.</span> SEO</h3>
              <p className="mb-3 text-lg xl:text-2xl col-span-5 md:col-span-4">Your website also wants to be popular. I got that covered too! SEO is very important for a website to reach audience, hence, I incorporate the best SEO practices making your brand gain more user traffic.</p>
              <div className=" flex flex-col gap-3 col-end-[-1] col-span-3">
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">Technical SEO</span>
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">Page Optimization</span>
                <span className="block text-[1.5rem] xl:text-[2.15rem] font-serif">SEO Audits & Analytics</span>
              </div>
          </div>
          <div id="works" className="my-8">
            <h2 className="font-serif uppercase text-[2.5rem] xl:text-[5rem] col-span-full overflow-clip"><span className="translate-y-20 animate-text-reveal inline-block">My Works.</span></h2>
            {works.map((work, index) => {
              return (
                <div key={index} className="lg:grid grid-cols-10 mt-6">
                  <span className="text-[6rem] md:text-[7rem] xl:text-[9rem] font-serif mt-3 lg:sticky top-4 col-span-2 h-min">0{index+1}.</span>
                  <WorksLayout
                    a="mt-10 work-card col-span-7 col-end-[-1]"
                    image="rounded-[1rem] mx-auto"
                    h3="text-[2rem] xl:text-[3rem] font-serif mt-3"
                    p="text-xl"
                    link={work.link}
                    lgImg={work.lgImg}
                    smImg={work.smImg}
                    name={work.name}
                    description={work.description.map((p, index)=>{
                      return(
                        <p className="text-lg xl:text-2xl mt-3" key={index}>{p}</p>
                      )
                    })}
                  />
                </div>
              )
            })}
          </div>
        </section>

        <section id="about" className="py-8 px-8 sm:px-14 lg:px-20 text-beige">
          <h2 className="text-[2.5rem] xl:text-[5rem] font-serif uppercase mb-3">A little about me.</h2>
          <p className="text-lg mb-6 xl:text-2xl">I used to work as a graphic designer with my father in his office and it really attracted me to the digital world. Since then, I have had an eye for digital design. Later on, I discovered what programming is and I was absolutely amazed. Therefore, I found a field that was a mix of both, 'Web Design and Development.
          </p>
          <p className="text-lg mb-6 xl:text-2xl">Hence, I recently graduated from NAIT with the DMIT diploma specialized in Web Design and Development. And now, I aspire to provide digital design solutions for a diverse group including startups and well-known businesses. With a passion for Design and Development, I take projects from ideation to production. Bringing websites to life and to more audience is my goal.</p>

          <div className="mb-6">
            <h3 className="text-[2rem] xl:text-[3rem] font-serif">my expertise</h3>
            <div className="sm:flex justify-between">
              <p className="text-lg xl:text-2xl mt-3 mb-4 sm:w-[50%]">With proficiency in design and development, I provide your brand with diverse services such as branding, website development, prototyping etc.</p>
              <div className="flex flex-col text-[1.5rem] xl:text-[2.15rem] font-serif gap-2">
                <span>Branding</span>
                <span>UI/UX Design</span>
                <span>Animations</span>
                <span>Custom CMS</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[2rem] xl:text-[4rem] font-serif">my digital toolbox</h3>
            <div className="sm:flex justify-between">
              <p className="text-lg xl:text-2xl mt-3 mb-4 sm:w-[50%]">I keep up with latest trends in the market and follow user experience  data. Therefore, my tech stack include various technologies to build your brand from.</p>
              <div className="flex flex-col text-[1.5rem] xl:text-[2.15rem] font-serif gap-2">
                <span>JavaScript</span>
                <span>HTML & CSS</span>
                <span>ReactJS</span>
                <span>Wordpress</span>
                <span>Tailwind CSS</span>
                <span>Figma</span>
                <span>Adobe Suite</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer
        background='bg-beige text-night'
        buttonClass= 'bg-night text-beige'
        underlineColor='bg-night'
      />
    </div>
  );
}

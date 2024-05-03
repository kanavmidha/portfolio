// 'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import { useEffect } from "react";


export const metadata = {
  title: 'Kanav Midha - Freelance Developer',
  description: 'An enthusiastic freelancer web developer and designer based in Canada looking for opportunities across Canada.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon.png',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/favicon-dark.png',
      media: '(prefers-color-scheme: dark)'
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
    <div className="custom-container bg-night text-white">
      <Header/>
      <main>
        {/* <div className="initial-screen flex justify-center items-center bg-black text-white flex-col gap-4 text-lg w-svw h-screen fixed top-0 left-0 animate-slide-up">
          <p>&copy; Kanav Midha</p>
          <p>2024</p>
        </div> */}
        <h2>Hi There, I'm Kanav Midha</h2>
        <span>scroll to find out your brand solution</span>

        <section id="#services">
          <h2>What I do.</h2>
          <div>
            <h3><span>01.</span> Web Development</h3>
            <p>I create custom-coded websites as unique as your brand. I focus on usability, scalability, performance and accessibility to tailor the website to your specific brand needs.</p>
            <span>Databases</span>
            <span>CMS Integration</span>
            <span>Motion & Animations</span>
          </div>
          
          <div>
            <h3><span>02.</span> Web Design</h3>
            <p>Your website wants to be alive, I got you covered! I create awe-inspiring designs for your business to give it a new life. I focus on modern design principles to tailor your website to current trends that help it reach to a greater audience.</p>
            <span>UI/UX</span>
            <span>User Research</span>
            <span>Responsive Design</span>
          </div>

          <div>
            <h3><span>03.</span> SEO</h3>
            <p>Your website also wants to be popular. I got you covered, again! SEO is very important for a website to reach audience, hence, I incorporate the best SEO practices making your brand gain more user traffic.</p>
            <span>Technical SEO</span>
            <span>Page Optimization</span>
            <span>SEO Audits & Analytics</span>
          </div>
        </section>

        <section id="#about">
          <h2>A little about me.</h2>
          <p>I aspire to provide digital design solutions for a diverse group including startups and well-known businesses.  With a passion for Design and Development, I take projects from ideation to production. Bringing websites to life and to more audience is my goal.</p>

          <div>
            <h3>my expertise</h3>
            <p>With proficiency in design and development, I provide your brand with diverse services such as branding, website development, prototyping etc.</p>

            <span>Branding</span>
            <span>UI/UX Design</span>
            <span>Animations</span>
            <span>Custom CMS</span>
          </div>

          <div>
            <h3>my digital toolbox</h3>
            <p>I keep up with latest trends in the market and follow user experience  data. Therefore, my tech stack include various technologies to build your brand from.</p>
            <span>JavaScript</span>
            <span>HTML & CSS</span>
            <span>ReactJS</span>
            <span>Wordpress</span>
            <span>Tailwind CSS</span>
            <span>Figma</span>
            <span>Adobe Suite</span>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

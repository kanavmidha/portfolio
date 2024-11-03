import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import WorksLayout from "@/components/WorksLayout";
import { works } from "@/utils/api/works";
import ViewCursor from "@/components/ViewCursor";
import Services from "@/components/Services";

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
//   const initialScreen = document.querySelector(&apos;.initial-screen&apos;)

//   initialScreen.addEventListener(&apos;animationend&apos;, () => {
//     initialScreen.remove()
//   })
// }, [])

  return (
    <div id="background" className="bg-beige text-night">
      <Header
      location='home'/>
      <main>
        {/* <div className="initial-screen flex justify-center items-center bg-black text-white flex-col gap-4 text-lg w-svw h-screen fixed top-0 left-0 animate-slide-up">
          <p>&copy; Kanav Midha</p>
          <p>2024</p>
        </div> */}
        <section className="intro animate-slide-down px-8 h-[70dvh] relative pt-14 pb-20 md:grid md:items-center">
          <div className="max-w-[22rem] sm:max-w-[30rem] grid place-items-start">
            <h2 className="text-[3.5rem]/[1] uppercase font-serif text-left max-w-[33.12rem] sm:text-[4rem] lg:text-[6rem] lg:max-w-[50rem] xl:text-[7rem] xl:max-w-[60rem]">Kanav Midha</h2>
            <p className="font-sans text-lg mt-2">Hi! I&apos;m a full stack web developer leveraging my skills to help businesses grow online.</p>
            <a href="/contact" className="
              bg-night
              text-beige
              rounded-full
              px-4
              py-2
              mt-4
            "><button>Let&apos;s Connect</button></a>
          </div>
          <span className="absolute hidden md:flex rotate-90 items-center text-jet text-sm right-[-3rem] bottom-[7.5rem] before:mr-3 before:rounded-full before:flex before:w-10 before:fixed before:bg-jet before:h-[2px] before:left-[-4.25rem] before:animate-scroll-down">scroll to find out your brand solution</span>
        </section>

        <div className="bg-night rounded-[2rem] mt-8 px-8">
          <section id="services" className="sm:px-14 lg:px-20 text-white py-8 scale-95 animate-enter-zoom">
            <div className="container mx-auto">
              <h2 className="text-[3rem] xl:text-[5rem] py-3 font-serif uppercase overflow-clip">What I do.</h2>
                  <Services
                    heading="Web Development"
                    body="I create custom-coded websites as unique as your brand. I focus on usability, scalability, performance and accessibility to tailor the website to your specific brand needs."
                    bullets={["Databases", "CMS Integration", "Motion & Animations"]}
                    classes="top-[15vh] mb-[5.7em] lg:mb-[3.8em]"
                  />
                  <Services
                    heading="Web Design"
                    body="Your website wants to be alive, I got you covered! I create awe-inspiring designs for your business to give it a new life. I focus on modern design principles to tailor your website to current trends that help it reach to a greater audience."
                    bullets={["UI/UX", "User Research", "Responsive Design"]}
                    classes="top-[calc(15vh+2.5em)] mb-[1.5em] lg:top-[calc(15vh+2em)] lg:mb-[3em]"
                  />
                  <Services
                    heading="SEO"
                    body="Your website also wants to be popular. I got that covered too! SEO is very important for a website to reach audience, hence, I incorporate the best SEO practices making your brand gain more user traffic."
                    bullets={["Technical SEO", "Page Optimization", "SEO Audits & Analytics"]}
                classes="top-[calc(15vh+5em)] mb-0 lg:top-[calc(15vh+4em)]"
                  />
            </div>
          </section>
          <section id="works" className="my-8 sm:px-14 lg:px-20 relative">
            <h2 className="font-serif text-white uppercase text-[3rem] xl:text-[5rem] col-span-full overflow-clip"><span className="translate-y-20 animate-text-reveal inline-block">My Works.</span></h2>
            <ViewCursor/>
            <div className="works-layout">
              {works.map((work, index) => {
                return (
                  <div key={index} id={`work${index}`} className="work-card mt-6 col-span-7 col-end-[-1] text-white">
                    {/* <span className="text-[6rem] md:text-[7rem] xl:text-[9rem] font-serif mt-3 lg:sticky top-4 col-span-2 h-min">0{index+1}.</span> */}
                    <WorksLayout
                      a=""
                      image="rounded-[1rem] mx-auto my-4"
                      h3="text-[2rem]/[1] xl:text-[3rem] font-serif py-6"
                      p="text-lg"
                      link={work.link}
                      lgImg={work.lgImg}
                      smImg={work.smImg}
                      name={work.name}
                      role={["Design", "Development"]}
                    />
                  </div>
                )
              })}
            </div>
          </section>
          <section id="about" className="py-8 sm:px-14 lg:px-20 text-white">
            <div className="container mx-auto">
              <h2 className="text-[3rem] xl:text-[5rem] font-serif uppercase mb-3">A little about me.</h2>
              <div className="lg:grid grid-cols-12">
                <picture className="my-6 grayscale rounded-[15px] max-w-[20rem] xl:max-w-[25rem] mx-auto col-end-[-1] col-span-5 lg:inline-grid lg:my-0">
                  <img className="my-6 grayscale rounded-[15px] max-w-[20rem] xl:max-w-[25rem] mx-auto col-end-[-1] col-span-5 lg:inline-grid lg:my-0" src="/profile.jpg" alt="Image of Kanav Midha leaning on a pillar, passing a soft smile."></img>
                </picture>
                <div className="col-start-1 col-span-6 row-start-1">
                  <p className="text-lg mb-6">I used to work as a graphic designer with my father in his office and it really attracted me to the digital world. Since then, I have had an eye for digital design. Later on, I discovered what programming is and I was absolutely amazed. Therefore, I found a field that was a mix of both, &apos;Web Design and Development&apos;.
                  </p>
                  <p className="text-lg mb-6">Hence, I recently graduated from NAIT with the DMIT diploma specialized in Web Design and Development. And now, I aspire to provide digital design solutions for a diverse group including startups and well-known businesses. With a passion for Design and Development, I take projects from ideation to production. Bringing websites to life and to more audience is my goal.</p>
                </div>
              </div>
              <div>
                <h3 className="text-[2rem] xl:text-[4rem] font-serif">My skills</h3>
                <div className="sm:flex gap-10 justify-between">
                  <p className="text-lg mt-3 mb-4 grow-[2] max-w-[25rem]">I keep up with latest trends in the market and follow user experience  data. Therefore, my tech stack include various technologies to build your brand from.</p>
                  <div className="flex flex-wrap text-lg font-sans gap-4 *:border *:border-white *:py-1 *:px-2 *:rounded-xl max-w-[75%] sm:mt-4 lg:max-w-[50%]">
                    <span>JavaScript</span>
                    <span>HTML & CSS</span>
                    <span>ReactJS</span>
                    <span>NextJS</span>
                    <span>Wordpress</span>
                    <span>Tailwind CSS</span>
                    <span>Figma</span>
                    <span>Graphic Design</span>
                    <span>Adobe Suite</span>
                    <span>Custom CMS</span>
                    <span>MongoDB</span>
                    <span>MySQL</span>
                    <span>PHP</span>
                    <span>SEO Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer
        location='home'
        backgroundColor='beige'
      />
    </div>
  );
}

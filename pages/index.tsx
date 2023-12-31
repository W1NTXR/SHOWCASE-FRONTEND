import Header from "@/components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Saaransh Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About/>
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills/>
      </section>
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      <section id="contact" className="snap-start">
        <Contact/>
      </section>
    </div>
  );
}

export default Home;
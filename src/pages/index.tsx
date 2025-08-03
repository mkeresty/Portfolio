"use client";

import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import About from "components/About/About";
import Projects from "components/Projects/Projects";
import ContactMe from "components/Contact/ContactMe";
import Experience from "components/Experiences/Experience";
import React, { useEffect, useState } from "react";
import SkillsSection from "components/SkillsSection/SkillsSection";
import Carousel from "components/Carousel/Carousel";
import ProjectsMobile from "components/ProjectsMobile/ProjectsMobile";
import aboutInfo from "../../about.js";
import Patents from "components/Patents/Patents";



export default function Home() {
  const about = aboutInfo;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  return (
    <div className="bg-white-200 dark:bg-[rgb(36,36,36)] text-gray-800 dark:text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 sm:scrollbar-thin sm:scrollbar-thumb-[#F7AB0A]/80 sm:scrollbar-transparent sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full">
      <Head>
        <title>Mason Keresty</title>
      </Head>

      <Header data={about[5]} />

      <section id="hero" className="snap-start">
        <Hero data={about[1]} />
      </section>

      <section id="about" className="snap-center">
        <About data={about[0]} />
      </section>

      <section id="experience" className="snap-start">
        <Experience data={about[2]} />
      </section>

      <section id="skills" className="snap-start">
        <SkillsSection data={about[3]} />
      </section>

<section id="projects" className="snap-start snap-mandatory snap-always max-h-screen overflow-clip">
  {width > 768 ? (
    <Carousel data={about[4]} />
  ) : (
    <ProjectsMobile data={about[4]} />
  )}
</section>


      <section id="patents" className="snap-start">
        <Patents data={about[6]} />
      </section>
    </div>
  );
}

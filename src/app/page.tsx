'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
    </>
  );
}

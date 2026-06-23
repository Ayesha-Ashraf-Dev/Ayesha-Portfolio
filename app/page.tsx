"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Debug: Log when component mounts
  useEffect(() => {
    console.log("Home mounted, isMounted:", isMounted);
  }, [isMounted]);

  return (
    <div data-theme="light" className="relative">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Services />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
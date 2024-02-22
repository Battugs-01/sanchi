"use client";

import About from "@/components/system/about";
import Company from "@/components/system/company";
import Header from "@/components/system/header";
import Hero from "@/components/system/hero";
import News from "@/components/system/news";
import Partners from "@/components/system/partners";
import Regions from "@/components/system/regions";
import Services from "@/components/system/services";
import Work from "@/components/system/work";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const Landing = () => {
  const searchParams = useSearchParams();

  const section = searchParams.get("section");

  useEffect(() => {
    if (section) {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <Hero />
      <About />
      <Company />
      <Work />
      <Services />
      <Regions />
      <Partners />
      <News />
    </div>
  );
};

export default Landing;

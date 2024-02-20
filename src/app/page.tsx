import About from "@/components/system/about";
import Company from "@/components/system/company";
import Header from "@/components/system/header";
import Hero from "@/components/system/hero";
import News from "@/components/system/news";
import Partners from "@/components/system/partners";
import Regions from "@/components/system/regions";
import Services from "@/components/system/services";
import Work from "@/components/system/work";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <Header />
      <Hero />
      <About />
      <Company />
      <Work />
      <Services />
      <Regions />
      <Partners />
      <News />
    </main>
  );
}

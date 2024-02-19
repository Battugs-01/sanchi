import About from "@/components/system/about";
import Company from "@/components/system/company";
import Header from "@/components/system/header";
import Hero from "@/components/system/hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full relative">
      <Header />
      <Hero />
      <About />
      <Company />
    </main>
  );
}

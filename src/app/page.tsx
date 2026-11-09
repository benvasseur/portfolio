import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LiveTrace from "@/components/LiveTrace";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LiveTrace />
        <About />
        <CaseStudies />
        <Experience />
        <Skills />
      </main>
      {/* Evaluated at build time (static export), so it updates on each deploy. */}
      <Contact year={new Date().getFullYear()} />
    </>
  );
}

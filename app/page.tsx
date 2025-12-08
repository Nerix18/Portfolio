import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

    
      <section
        className="relative isolate bg-[#111315] glow-blobs animate-blobs before:content-[''] before:absolute before:inset-0 before:pointer-events-none before:-z-10 before:blur-[80px]"
      >
        <section id="sluzby">
          <Services />
        </section>

        <section id="projekty">
          <Projects />
        </section>

       
          <TechStack />

        <section id="kontakt">
          <Contact />
        </section>
      </section>
    </>
  );
}

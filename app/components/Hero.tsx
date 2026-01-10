"use client";
import { IoMdArrowForward } from "react-icons/io";
import ScrollRevealSection from "./ScrollRevealSection";

export default function Hero() {
  const handleScrollToContact = () => {
    const el = document.getElementById("kontakt");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (typeof window !== "undefined") {
      window.location.hash = "#kontakt";
    }
  };

  return (
    <section
      id="hero"
      className="lg:h-[89vh] h-[80vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover -z-10 opacity-50"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        preload="metadata"
        poster="backupposter.png"
      >
        <source src="/0001-02dddd50_loop.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollRevealSection>
          <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto text-left lg:text-center">
            <h1 className="font-bold leading-tight tracking-tight text-white text-lg sm:text-2xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 text-[1.5rem]">
              <span className="text-[#d0ff00]">Ahoj, volám sa Richard</span>
              <span className="block sm:inline"> a som web developer a web dizajnér</span>
            </h1>
            <p className="sm:text-lg md:text-xl leading-relaxed font-light text-[#D4D4D4]/80 max-w-prose md:mx-auto text-[1rem]">
             Venujem sa tvorbe moderných webových stránok, webdizajnu a po novom skúšam aj online marketing. Baví ma pretvárať nápady na funkčné a vizuálne príťažlivé projekty.
              Ak ťa zaujali moje práce alebo máš vlastný nápad, pokojne ma kontaktuj, spolu môžeme vytvoriť niečo skvelé.
            </p>
            <div className="mt-8 sm:mt-10 flex justify-start md:justify-center">
              <button
                onClick={handleScrollToContact}
                className="group inline-flex items-center gap-2 text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d0ff00]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black font-medium rounded-full text-sm px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 shadow-[0_10px_40px_#d0ff00]/50 border border-[#D0FF00] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.99] cursor-pointer"
                aria-label="Kontaktuj ma"
              >
                <span className="font-medium md:text-[1.2rem] text-[1rem]">👋 Kontaktuj ma</span>
                <IoMdArrowForward className="size-5 sm:size-6 transform transition-transform duration-300 group-hover:rotate-45deg" />
              </button>
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
}

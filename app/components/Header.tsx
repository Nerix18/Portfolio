"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Domov", target: "hero" },
  { label: "Služby", target: "sluzby" },
  { label: "Projekty", target: "projekty" },
  { label: "Kontakt", target: "kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(open);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 10);

      if (openRef.current && y <= 10) {
        setOpen(false);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200;
      
      const sectionElements = navLinks.map((link) => {
        const el = document.getElementById(link.target);
        if (!el) return null;
        
        const rect = el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = top + rect.height;
        
        return {
          id: link.target,
          top,
          bottom,
          height: rect.height,
        };
      }).filter((section): section is NonNullable<typeof section> => section !== null);

      if (sectionElements.length === 0) return;

      let newActiveSection = sectionElements[0].id;

      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const nextSection = sectionElements[i + 1];

        if (scrollPosition >= section.top && scrollPosition < section.bottom) {
          newActiveSection = section.id;
          break;
        }

        if (nextSection && scrollPosition >= section.bottom && scrollPosition < nextSection.top) {
          const distanceToThis = scrollPosition - section.bottom;
          const distanceToNext = nextSection.top - scrollPosition;
          newActiveSection = distanceToThis < distanceToNext ? section.id : nextSection.id;
          break;
        }

        if (scrollPosition >= section.top) {
          newActiveSection = section.id;
        }
      }

      const lastSection = sectionElements[sectionElements.length - 1];
      const windowBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (windowBottom >= documentHeight - 100) {
        newActiveSection = lastSection.id;
      }

      setActiveSection(newActiveSection);
    };

    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateActiveSection);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const hoverFx =
    "hover:text-black hover:bg-[#d0ff00] hover:rounded-full hover:scale-110 hover:py-2 hover:px-4 hover:shadow-[0_0px_40px_#d0ff00] transition-all duration-300";

  const activeFx =
    "text-black bg-[#d0ff00] rounded-full py-2 px-4 shadow-[0_0px_40px_#d0ff00] scale-105";

  const closeMenu = () => setOpen(false);

  const hrefFor = (hash: string) => `#${hash}`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    closeMenu();
    
    const element = document.getElementById(target);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(target);
    }
  };

  return (
    <section className="">
      <div
        className={`fixed left-0 w-full z-50 transition-all duration-500 px-4 py-4 lg:py-10
          ${scrolled ? "top-4" : "top-0"}`}
      >
        <div className="hidden lg:flex w-full items-center justify-center uppercase">
          <nav
            className={`flex items-center gap-6 py-4 text-lg lg:text-xl font-medium transition-all justify-center rounded-full lg:max-w-2xl w-full 
              ${
                scrolled
                  ? "border border-white/15 bg-white/10 backdrop-blur-md"
                  : "border-transparent bg-transparent backdrop-blur-0"
              }
            `}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <Link
                  key={link.label}
                  href={hrefFor(link.target)}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`
                    transition-all duration-300 transform
                    ${hoverFx}
                    ${isActive ? activeFx : ""}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div
          className={`lg:hidden uppercase transition-all duration-300 rounded-2xl
            ${
              scrolled || open
                ? "border-b border-white/15 bg-white/10 backdrop-blur-md py-2"
                : "bg-transparent border-transparent"
            }
          `}
        >
          <div className="flex items-center justify-between px-4 py-2">
            <div className="w-8 h-8" />
            <button
              aria-label="Otvorit navigáciu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="rounded-xl focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer"
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            open ? "h-6" : "h-0"
          } transition-all duration-300 lg:hidden`}
        />

        <div
          id="mobile-menu"
          className={`
            lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out rounded-2xl
            ${
              open
                ? "max-h-96 opacity-100 border border-white/15 bg-white/10 backdrop-blur-md"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="flex flex-col items-start gap-2 pb-4 px-8 py-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <Link
                  key={link.label}
                  href={hrefFor(link.target)}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`
                    w-full text-left py-2 text-base font-medium transition-all
                    ${hoverFx}
                    ${isActive ? activeFx : ""}
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div className="h-20 lg:h-24" />
    </section>
  );
}
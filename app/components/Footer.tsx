"use client";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const navLinks = [
  { label: "Domov", href: "#" },
  { label: "Služby", href: "#" },
  { label: "Projekty", href: "#" },
  { label: "Kontakt", href: "#" },
] as const;

export default function Footer() {
  return (
    <section className="w-full overflow-hidden h-full pt-10 relative bg-[#D0FF00] rounded-tr-3xl rounded-tl-3xl text-[#000000]">
      {/* Kontajner – do 1024px zarovnaný vľavo, potom centrovaný */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 text-left lg:justify-items-center">
        {/* Ľavý stĺpec */}
        <div className="w-full max-w-[260px]">
          <h2 className="font-semibold text-xl inline-block">
            Richard Hodáň
          </h2>
          <p className="pt-4 text-sm">
            Spojím dizajn, marketing a technológie do jedného celku.
          </p>
          <p className="pt-4 text-sm">WEBY · UI/UX DIZAJN · SEO/MARKETING</p>
          <div className="flex gap-4 cursor-pointer pt-4">

            <a
            href="https://www.instagram.com/hodan.rich/"
            target=""
            rel=""
            >
            <IoLogoInstagram className=" py-1 px-2 hover:scale-110 transition duration-300 transform" />
            </a>

             <a
            href="https://www.facebook.com/richard.o.hodan"
            target=""
            rel=""
            >
            <FaFacebook className=" py-1 px-2 hover:scale-110 transition duration-300 transform" />
            </a>

             <a
            href="https://www.linkedin.com"
            target=""
            rel=""
            >
            <FaLinkedin className=" py-1 px-2 hover:scale-110 transition duration-300 transform" />
            </a>
          </div>
        </div>

        {/* Stredný stĺpec – Menu */}
        <div className="w-full max-w-[200px] flex flex-col items-start lg:items-center">
          <h3 className="text-xl font-semibold mb-4 uppercase">Menu</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-all duration-500 hover:text-[#757575] hover:scale-110 transform inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Pravý stĺpec */}
        <div className="w-full max-w-[260px]">
          <h3 className="text-xl font-semibold mb-4 uppercase">Kontakt</h3>
          <div className="space-y-2 text-sm">
            <p className="flex gap-2 items-center">
              <MdEmail className="w-10 h-10 rounded-xl py-2 px-2" />
              hodanrichard@gmail.com
            </p>
            <p className="flex gap-2 items-center">
              <FaPhoneAlt className="w-10 h-10 rounded-xl py-2 px-3" />
              +421 918 945 660
            </p>
            <p className="flex gap-2 items-center">
              <FaMapMarkerAlt className="w-10 h-10 rounded-xl py-2 px-3" />
              Schiffelova 21, 908 51, Holíč
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-black/50 my-6"></div>

      <div className="px-4 flex justify-center items-center py-2">
        <p className="text-black/50 text-sm text-center">
          Created by Richard Hodáň @2025 · All rights reserved
        </p>
      </div>
    </section>
  );
}

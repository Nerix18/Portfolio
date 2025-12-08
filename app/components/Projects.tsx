'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowForward } from "react-icons/io"
import ScrollRevealSection from './ScrollRevealSection'

export default function Projects() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section id="projekty" className="w-full overflow-hidden h-full py-16 relative">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto lg:px-0 md:px-4 px-4 sm:px-4">
        <ScrollRevealSection>
          <div className="flex flex-col mt-4 px-2">
            <h2 className="text-[#ffffff] font-light text-3xl sm:text-4xl py-4 text-left lg:text-center">VYBRANÉ PROJEKTY</h2>
            <p className="text-md sm:text-lg md:text-xl text-[#D4D4D4]/80 font-light pt-2 text-left lg:text-center">
              Výber projektov, ktoré formovali moju tvorbu a prístup k práci.
            </p>
          </div>
        </ScrollRevealSection>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-20 lg:px-24 xl:px-32 max-w-[1200px] mx-auto items-stretch">
          
          <ScrollRevealSection>
            <div className="bg-[#131313]/30 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl p-6 sm:p-8 flex flex-col h-full w-full lg:w-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-full max-w-[320px] h-64 sm:h-72 transform-gpu animate-float">
                  <Image
                    src="/terasoviny1.png"
                    width={800}
                    height={600}
                    alt="terasoviny projekt"
                    className="w-full h-full rounded-xl object-cover lg:scale-150 scale-120 pl-6"
                    priority
                  />
                </div>
              </div>
              <div className="text-left flex flex-col flex-1">
                <div>
                  <h2 className="text-[#D0FF00] text-xl sm:text-2xl mb-3 tracking-wide font-semibold uppercase">
                    TERASOVINY
                  </h2>
                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Web prezentuje realizáciu drevených terás, ukážky prác a jednoduchý kontakt pre zákazníkov.
                  </p>
                </div>
                <Link
                  href="https://terasoviny.sk" 
                  className="mt-auto group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center cursor-pointer hover:scale-105 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 w-full block"
                >
                  <span className="flex items-center justify-center gap-2 text-md sm:text-xl font-light">
                    Zobraziť projekt
                    <IoMdArrowForward className="transform transition-transform duration-500 size-6" />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollRevealSection>

         
          <ScrollRevealSection>
            <div className="bg-[#131313]/30 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl p-6 sm:p-8 flex flex-col h-full w-full lg:w-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-full max-w-[320px] h-64 sm:h-72 transform-gpu animate-float">
                  <Image
                    src="/vibavi1.png"
                    width={800}
                    height={600}
                    alt="vibavi projekt"
                    className="w-full h-full rounded-xl object-cover lg:scale-150 scale-120 pl-6"
                    priority
                  />
                </div>
              </div>
              <div className="text-left flex flex-col flex-1">
                <div>
                  <h2 className="text-[#D0FF00] text-xl sm:text-2xl mb-3 tracking-wide font-semibold uppercase">
                    VIBAVI
                  </h2>
                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Stránka pre tvorcov foto a video obsahu s portfóliom, ponukou služieb a moderným vizuálom.
                  </p>
                </div>
                <Link
                  href="/vibavi" 
                  className="mt-auto group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center cursor-pointer hover:scale-105 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 w-full block"
                >
                  <span className="flex items-center justify-center gap-2 text-md sm:text-xl font-light">
                    Zobraziť projekt
                    <IoMdArrowForward className="transform transition-transform duration-500 size-6" />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection>
            <div className="bg-[#131313]/30 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl p-6 sm:p-8 flex flex-col h-full w-full lg:w-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-full max-w-[320px] h-64 sm:h-72 transform-gpu animate-float">
                  <Image
                    src="/ckklampiarstvo1.png"
                    width={800}
                    height={600}
                    alt="ckklampiarstvo projekt"
                    className="w-full h-full rounded-xl object-cover lg:scale-150 scale-120 pl-6"
                    priority
                  />
                </div>
              </div>
              <div className="text-left flex flex-col flex-1">
                <div>
                  <h2 className="text-[#D0FF00] text-xl sm:text-2xl mb-3 tracking-wide font-semibold uppercase">
                    CK - KLAMPIARSTVO
                  </h2>
                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Prezentačný web klampiarskej firmy s ponukou služieb, ukážkami prác a orientáciou na profesionalitu.
                  </p>
                </div>
                <Link
                  href="https://ck.nicolaswinkler.sk" 
                  className="mt-auto group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center cursor-pointer hover:scale-105 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 w-full block"
                >
                  <span className="flex items-center justify-center gap-2 text-md lg:text-xl font-light">
                    Zobraziť projekt
                    <IoMdArrowForward className="transform transition-transform duration-500 size-6" />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection>
            <div className="bg-[#131313]/30 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl p-6 sm:p-8 flex flex-col h-full w-full lg:w-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-full max-w-[320px] h-64 sm:h-72 transform-gpu animate-float">
                  <Image
                    src="/archistav1.png"
                    width={800}
                    height={600}
                    alt="archistav"
                    className="w-full h-full rounded-xl object-cover lg:scale-150 scale-120 pl-6"
                    priority
                  />
                </div>
              </div>
              <div className="text-left flex flex-col flex-1">
                <div>
                  <h2 className="text-[#D0FF00] text-xl sm:text-2xl mb-3 tracking-wide font-semibold uppercase">
                    ARCHISTAV S.R.O.
                  </h2>
                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Stránka architektonickej a stavebnej spoločnosti s portfóliom návrhov a realizácií.
                  </p>
                </div>
                <Link
                  href="https://www.archistav.sk"
                  className="mt-auto group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center cursor-pointer hover:scale-105 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 w-full block"
                >
                  <span className="flex items-center justify-center gap-2 text-md sm:text-xl font-light">
                    Zobraziť projekt
                    <IoMdArrowForward className="transform transition-transform duration-500 size-6" />
                  </span>
                </Link>
              </div>
            </div>
          </ScrollRevealSection>

          
          <div className={`
            col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch
            transition-all duration-1000 ease-in-out origin-top
            ${showMore 
              ? 'opacity-100 scale-y-100 max-h-[2000px] translate-y-0' 
              : 'opacity-0 scale-y-0 max-h-0 -translate-y-10 overflow-hidden'
            }
          `}>
            <div className={`
              bg-[#131313]/30 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl p-6 sm:p-8 flex flex-col h-full w-full lg:w-auto
              transition-all duration-700 ease-out
              ${showMore 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }
            `}
              style={{ transitionDelay: showMore ? '100ms' : '0ms' }}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-full max-w-[320px] h-64 sm:h-72 transform-gpu animate-float">
                  <Image
                    src="/opg1.png"
                    width={800}
                    height={600}
                    alt="opg"
                    className="w-full h-full rounded-xl object-cover lg:scale-150 scale-120 pl-6"
                  />
                </div>
              </div>
              <div className="text-left flex flex-col flex-1">
                <div>
                  <h2 className="text-[#D0FF00] text-xl sm:text-2xl mb-3 tracking-wide font-semibold uppercase">
                    OPG
                  </h2>
                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Jednoduchý prezentačný web farmaceutickej distribučnej firmy, ktorý predstavuje spoločnosť a jej hlavné služby.
                  </p>
                </div>
                <Link
                  href="https://opgroup.cz"
                  className="mt-auto group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center cursor-pointer hover:scale-105 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 w-full block"
                >
                  <span className="flex items-center justify-center gap-2 text-md sm:text-xl font-light">
                    Zobraziť projekt
                    <IoMdArrowForward className="transform transition-transform duration-500 size-6" />
                  </span>
                </Link>
              </div>
            </div>

            {/* KRROSTAV - Card 6 */}
            <div className={`
              bg-[#131313]/30 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl p-6 sm:p-8 flex flex-col h-full w-full lg:w-auto
              transition-all duration-700 ease-out
              ${showMore 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
              }
            `}
              style={{ transitionDelay: showMore ? '200ms' : '0ms' }}>
              <div className="flex items-center justify-center mb-6">
                <div className="w-full max-w-[320px] h-64 sm:h-72 transform-gpu animate-float">
                  <Image
                    src="/krrostav1.png"
                    width={800}
                    height={600}
                    alt="krrostav"
                    className="w-full h-full rounded-xl object-cover lg:scale-150 scale-120 pl-6"
                  />
                </div>
              </div>
              <div className="text-left flex flex-col flex-1">
                <div>
                  <h2 className="text-[#D0FF00] text-xl sm:text-2xl mb-3 tracking-wide font-semibold uppercase">
                    KRROSTAV S.R.O.
                  </h2>
                  <p className="text-[#D4D4D4] text-sm sm:text-base leading-relaxed mb-6 flex-1">
                    Web pre stavebnú firmu zameranú na murárske a stavebné práce s prehľadom realizácií a rýchlym kontaktom.
                  </p>
                </div>
                <Link
                  href="https://krrostav.sk"
                  className="mt-auto group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-8 py-2 text-center cursor-pointer hover:scale-105 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50 w-full block"
                >
                  <span className="flex items-center justify-center gap-2 text-md sm:text-xl font-light">
                    Zobraziť projekt
                    <IoMdArrowForward className="transform transition-transform duration-500 size-6" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex items-center justify-center py-16 sm:py-[5%] ">
        <ScrollRevealSection>
          <button 
            onClick={() => setShowMore(!showMore)}
            className="group text-white bg-linear-to-r from-[#89d104] to-[#d0ff00] hover:bg-linear-to-br focus:outline-none font-medium rounded-3xl text-sm px-20 lg:px-28 py-2 text-center mb-4 cursor-pointer hover:scale-110 transition-all duration-700 border border-[#D0FF00] shadow-[0_0px_40px_#d0ff00]/50"
          >
            <span className="flex items-center gap-2 text-lg sm:text-lg font-medium">
              {showMore ? 'Zobraziť menej' : 'Zobraziť viac'} 
              <IoMdArrowForward 
                className={`size-5 sm:size-6 transform transition-transform duration-300 ${showMore ? 'rotate--90deg' : 'group-hover:rotate-90deg'}`} 
              />
            </span>
          </button>
        </ScrollRevealSection>
      </div>
    </section>
  )
}

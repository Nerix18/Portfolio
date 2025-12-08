import { FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import ScrollRevealSection from "./ScrollRevealSection";

export default function Services() {
  return (
    <section id="sluzby" className="relative overflow-hidden w-full py-10 rounded-3xl">
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-4 sm:px-4">
        <div className="bg-[#0E0E0E]/20 rounded-3xl border border-[#4c4c4c] backdrop-blur-3xl sm:px-4 md:px-2 lg:px-0 py-8">
          {/* Heading */}
          <div className="w-full max-w-[1500px] flex justify-start lg:justify-center items-start lg:items-center flex-col text-left lg:text-center pl-6 lg:pl-0">
            <ScrollRevealSection>
              <h2 className="my-2 font-light text-[#ffffff] text-3xl sm:text-4xl">
                SLUŽBY
              </h2>
              <h4 className="pt-2 font-light text-[#D4D4D4]/80 text-md sm:text-xl">
                Digitálne riešenia bez kompromisov.
              </h4>
            </ScrollRevealSection>
          </div>

          {/* Cards wrapper */}
          {/* Desktop & notebook: zachované; Tablet+Mobil: stacked full-width */}
          <div className="mx-auto mt-10 md:mt-16 flex w-full flex-col lg:flex-row justify-center xl:justify-center gap-12 sm:gap-6 lg:gap-8 2xl:gap-14 max-w-[1800px] items-center md:gap-">
            {/* Card 1 */}
            <div className="w-[95%] lg:h-[420px] lg:basis-[320px] md:h-[300px] rounded-3xl bg-[#131313]/30 backdrop-blur-xl px-5 sm:px-6 py-6 sm:py-8 border border-[#4c4c4c] overflow-hidden transition-all duration-500 md:hover:-translate-y-5 md:hover:shadow-xl md:hover:scale-105 lg:max-w-[520px] max-w-none h-full md:flex md:justify-center md:items-center">
              <ScrollRevealSection>
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-r from-[#89d104] to-[#d0ff00] rounded-2xl my-3 sm:my-4 flex items-center justify-center">
                  <MdDesignServices className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-black" />
                </div>
                <h5 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-tight mb-2">
                  Web <span className="text-[#D0FF00]">Dizajn</span>
                </h5>
                <p className="text-[11px] sm:text-[12px] text-[#D4D4D4]/80 mb-2">UI/UX Dizajn</p>
                <h4 className="text-[13px] sm:text-[14px] text-white/80">
                  Moderný a funkčný dizajn, ktorý osloví vašich zákazníkov. Tvorím vizuálne riešenia s dôrazom na používateľskú skúsenosť a estetiku, ktorá podporí vašu značku.
                </h4>
              </ScrollRevealSection>
            </div>

            {/* Card 2 (highlight) */}
            <div className="w-[95%] lg:h-[420px] lg:basis-[320px] md:h-[300px] items-center justify-center rounded-3xl bg-[#131313]/30 backdrop-blur-2xl px-5 sm:px-6 py-6 sm:py-8 border-2 border-[#d0ff00] overflow-hidden transition-all duration-500 md:hover:-translate-y-5 md:hover:shadow-xl md:hover:scale-105 lg:max-w-[520px] max-w-none md:flex md:justify-center md:items-center">
              <ScrollRevealSection>
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-r from-[#89d104] to-[#d0ff00] rounded-2xl my-3 sm:my-4 flex items-center justify-center">
                  <FaLaptopCode className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-black" />
                </div>
                <h5 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-tight mb-2">
                  Web <span className="text-[#D0FF00]">Development</span>
                </h5>
                <p className="text-[11px] sm:text-[12px] text-[#D4D4D4]/80 mb-2">Front-end Development</p>
                <h4 className="text-[13px] sm:text-[14px] text-white/80">
                  Premieňam nápad na funkčný a spoľahlivý web. Vyvíjam rýchle, bezpečné a prispôsobené WordPress/Custom weby a e-shopy, ktoré rastú spolu s vaším biznisom.
                </h4>
              </ScrollRevealSection>
            </div>

            {/* Card 3 */}
            <div className="w-[95%] lg:h-[420px] lg:basis-[320px] md:h-[300px] rounded-3xl bg-[#131313]/30 backdrop-blur-xl px-5 sm:px-6 py-6 sm:py-8 border border-[#4c4c4c] overflow-hidden transition-all duration-500 md:hover:-translate-y-5 md:hover:shadow-xl md:hover:scale-105 lg:max-w-[520px] max-w-none h-full md:flex md:justify-center md:items-center">
              <ScrollRevealSection>
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-linear-to-r from-[#89d104] to-[#d0ff00] rounded-2xl my-3 sm:my-4 flex items-center justify-center">
                  <FaMoneyBillTrendUp className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 text-black" />
                </div>
                <h5 className="font-bold text-[22px] sm:text-[24px] md:text-[28px] leading-tight mb-2">
                  Mark<span className="text-[#D0FF00]">eting</span>
                </h5>
                <p className="text-[11px] sm:text-[12px] text-[#D4D4D4]/80 mb-2">SEO/PPC</p>
                <h4 className="text-[13px] sm:text-[14px] text-white/80">
                  Pomáham značkám rásť cez cielené online kampane a stratégiu, ktorá prináša výsledky. Od sociálnych sietí až po performance marketing – všetko s dôrazom na merateľný efekt.
                </h4>
              </ScrollRevealSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
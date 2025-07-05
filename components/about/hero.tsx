"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] sm:h-screen flex items-center overflow-hidden">
      <Image
        src="/claylab assets/general/HeroSectionImages/aboutUsHero.png"
        alt="Background"
        fill
        className="object-cover object-center "
      />

      <div className="absolute inset-0 bg-black/40 "></div>

      <div className="flex flex-col gap-4 sm:gap-6 mx-4 sm:mx-8 md:mx-14 mt-16 sm:mt-32 text-start max-w-full sm:max-w-4xl z-10">
        <p style={{ fontWeight: "100" }} className="text-2xl sm:text-5xl md:text-7xl max-w-full sm:max-w-2xl text-white mb-2 sm:mb-6 leading-tight font-sourceSans font-thin" >
          It started with three teachers, a handful of students, and a vision full of hope.
        </p>
        <h3 className="text-2xl sm:text-5xl md:text-7xl mb-2 sm:mb-[-32] text-white font-roughScript z-[5]">Our Story</h3>
        <p style={{ fontWeight: "100" }} className="text-sm sm:text-base md:text-sm text-white/70 mb-4 sm:mb-8 max-w-full sm:max-w-6xl z-[10] font-sourceSans font-thin">
          On April 27th, 2020, Claylab was born out of love - not as an institution, but as a promise. A promise that learning could feel like joy, not pressure. That students could bloom, shine, and fly, given the right care. Today, that promise lives on through our mentorship program — reaching students across India, nurturing their passions, and helping them become confident leaders of tomorrow.
        </p>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"

export default function Hero() {

 const donateUrl = "https://give.do/fundraisers/scholarships-for-500-student-leaders-from-less-privileged-background";

  return (
    <section className="relative w-full min-h-[60vh] sm:h-screen bg-transparent flex flex-col items-center overflow-hidden">

      <section className="w-full flex justify-center  my-10 sm:my-24 py-2 sm:py-12 px-2 sm:px-4">




        <div className=" bg-gradient-to-r from-[#C3D7C401] to-[#bfe2c1] w-full flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden">
          
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 py-6 sm:py-8 gap-3 sm:gap-4">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-[#1A1A1A] leading-snug">
              Claylab is built by a community join us in shaping future-ready schools.
            </h2>

            <p className="text-[#1A1A1A] text-sm sm:text-xl leading-relaxed py-16">
             Thousands of volunteers and donors have already powered Claylab’s journey. Together, we can ensure every teenager builds the skills for life, leadership, and livelihoods.
            </p>

            <button 
            onClick={() => window.open(donateUrl, "_blank")}
            className="px-8 sm:px-12 py-2 w-full sm:w-min whitespace-nowrap text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg transition-all text-base sm:text-lg">
              Donate
            </button>
          </div>
          <div className="w-full md:w-1/2 relative min-h-[220px] sm:min-h-[400px] md:min-h-[100%]">
            <Image
              src="/claylab assets/general/HeroSectionImages/supportUsHero.png"
              alt="Student at chalkboard"
              fill
              className="object-cover object-center rounded-2xl" 
            />
          </div>
        </div>
      </section>
    </section>
  )
}

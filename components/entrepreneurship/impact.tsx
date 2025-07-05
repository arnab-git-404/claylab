import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Impact = () => {
  return <div className="relative flex flex-col items-center justify-center align-center gap-6 sm:gap-8 group">
    <Image src={"/claylab assets/entrepreneurshipProgram/applySectionBg.png"} alt={"wifi-icon"} height={180} width={56161532} className="h-auto max-w-full transition-transform duration-300  " />
    <section className="max-w-full sm:max-w-screen m-auto py-8 sm:py-16 px-2 sm:px-4 flex flex-col items-center text-center gap-4 sm:gap-6 absolute">
      <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-black tracking-wide">
        READY TO TURN YOUR IDEAS INTO IMPACT?
      </h2>

      <p className="text-sm sm:text-base md:text-lg text-[#2D2D2D]">
        Applications for the next cohort are now open.<br />
        Seats are limited – Apply early!
      </p>

      <button className="mt-4 flex items-center gap-2 bg-gradient-to-r from-[#2E9C4B] to-[#76E293] text-white font-medium px-4 sm:px-6 py-2 rounded-full shadow-md transition-all duration-300 text-sm sm:text-base">
        <span>Apply here</span>
        <ArrowRight className='p-1 bg-white text-green-500 rounded-full' />
      </button>

      {/* Optional decorative element on right (as in image) */}
      <div className="hidden sm:block absolute right-0 bottom-0 w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full bg-[#CFEEDC] opacity-40 translate-x-1/2 translate-y-1/2" />
    </section>

  </div>
}

export default Impact

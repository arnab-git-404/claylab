'use client';


import Image from "next/image"
import Heading from '../heading';

export default function ReportsSection() {
  return (
    <section className="text-center py-8 sm:py-12 md:py-16 px-2 sm:px-4 rounded-none shadow-md w-full">
      {/* Icon */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <Image src={"/claylab assets/aboutUs/documentIcon.png"} height={80} width={60} alt={"document icon"} className="h-16 w-auto sm:h-24" />
      </div>


      <Heading text="REPORTS & DOCUMENTATION" />

      {/* Description */}
      <p className="max-w-full sm:max-w-xl mx-auto text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
        We prioritize transparency as we believe it is crucial to foster trust and accountability
        in our actions and initiatives.
      </p>

      {/* Button */}
      <button className="px-6 sm:px-12 py-2 text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg transition-all text-xs sm:text-base">
        More Reports
      </button>

    </section>
  );
}

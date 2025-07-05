"use client";

import Heading from "../heading";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/claylab assets/home/pastEvents/husniati-salma-cGjGtaRu_14-unsplash 1.png",
  "/claylab assets/home/pastEvents/husniati-salma-cGjGtaRu_14-unsplash 1.png",
  "/claylab assets/home/pastEvents/husniati-salma-cGjGtaRu_14-unsplash 1.png",
  "/claylab assets/home/pastEvents/husniati-salma-cGjGtaRu_14-unsplash 1.png",
  "/claylab assets/home/pastEvents/husniati-salma-cGjGtaRu_14-unsplash 1.png",
];

const PastEvents = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goTo = (index: number) => setActiveIndex(index);

  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
      <Heading text="Past Events" />

      <div className="relative flex items-center justify-center mt-6 sm:mt-8">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-2 z-40 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        {/* Carousel */}
        <div className="relative flex justify-center items-center w-full max-w-full sm:max-w-6xl overflow-hidden h-[180px] sm:h-[300px]">
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            const isPrev = index === (activeIndex - 1 + images.length) % images.length;
            const isNext = index === (activeIndex + 1) % images.length;

            const baseStyles =
              "absolute transition-all duration-500 ease-in-out rounded-xl shadow-md overflow-hidden";

            if (isActive) {
              return (
                <div
                  key={index}
                  className={`${baseStyles} z-30 w-[80%] sm:w-[60%] h-full scale-100 shadow-md bg-white`}
                >
                  <Image
                    src={img}
                    alt={`Event ${index + 1}`}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            if (isPrev) {
              return (
                <div
                  key={index}
                  className={`${baseStyles} z-20 left-0 w-[40%] sm:w-[30%] h-[85%] scale-95 opacity-60`}
                >
                  <Image
                    src={img}
                    alt={`Event ${index + 1}`}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            if (isNext) {
              return (
                <div
                  key={index}
                  className={`${baseStyles} z-20 right-0 w-[40%] sm:w-[30%] h-[85%] scale-95 opacity-60`}
                >
                  <Image
                    src={img}
                    alt={`Event ${index + 1}`}
                    width={600}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="hidden sm:flex absolute right-2 z-40 bg-white/80 hover:bg-white shadow-md p-2 rounded-full"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
              index === activeIndex ? "bg-green-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Gallery Button */}
      <div className="flex justify-center mt-4 sm:mt-6">
        <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm hover:bg-green-700 transition">
          GALLERY
        </button>
      </div>
    </section>
  );
};

export default PastEvents;

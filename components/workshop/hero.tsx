"use client";

import Image from "next/image";
import { MapPin} from "lucide-react";

export default function Hero() {
  const donateUrl =
    "https://give.do/fundraisers/scholarships-for-500-student-leaders-from-less-privileged-background";

  return (
    <section className="relative min-h-[60vh] sm:h-screen bg-transparent flex flex-col items-center overflow-hidden">
      <section className="flex justify-center my-10 sm:my-24 py-2 sm:py-12">
        <div className="max-w-7xl bg-gradient-to-r from-[#C3D7C401] to-[#bfe2c1] w-full flex flex-col md:flex-row justify-between rounded-2xl overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 py-6 sm:py-8 gap-3 sm:gap-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] leading-snug">
              Book Talk
            </h2>

            <div className="mt-1">
              <div className="flex flex-wrap gap-2">
                <div className="inline-block px-3 py-1 text-xs font-medium text-black bg-white rounded-full">
                  equality
                </div>

                <div className="inline-block px-3 py-1 text-xs font-medium text-black bg-white rounded-full">
                  employment
                </div>
                <div className="inline-block px-3 py-1 text-xs font-medium text-black bg-white rounded-full">
                  education
                </div>
              </div>
            </div>

            <h3 className="flex items-center text-xl font-light text-gray-800">
              <MapPin className="w-5 h-5 mr-2" />
              Haryana
            </h3>

            <p className="text-[#1A1A1A] text-sm sm:text-base leading-relaxed">
              Harpreet Kaur, Diksha Goswami, and Dipti Rana of Grade 11 of
              Nanakmatta Public School, Nanakmatta, Uttarakhand, run this
              project. Through this project, they help the students develop a
              habit and love for reading. In the last two months, they have
              organized two Book Talk events with the participation of almost
              200 students and covering more than 10 books.
            </p>
            <div className="flex items-center gap-8">
              <button
                onClick={() => window.open(donateUrl, "_blank")}
                className="px-4 sm:px-12 py-2 w-full sm:w-min whitespace-nowrap text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg transition-all text-base sm:text-lg"
              >
                Support The Program
              </button>
              <Image
                src={"/claylab assets/workshop/WifiIcon.png"}
                alt={"wifi-icon"}
                height={16}
                width={16}
                className="h-auto w-6"
              />
            </div>
          </div>
          <div className="relative w-full md:w-1/2 sm:max-w-7xl min-h-[220px] sm:min-h-[400px] md:min-h-[560px] md:max-w-[594px] md:h-[560px] shadow-[-10px_2px_20px_rgba(0,0,0,0.4)]">
            <Image
              src="/claylab assets/workshop/hero.avif"
              alt="Student at chalkboard"
              fill
              className="object-cover object-center rounded-2xl"
            />
            <div className="absolute top-0 left-0 h-full w-10 rounded-l-2xl bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </section>
  );
}

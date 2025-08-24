// // import Image from 'next/image'

// // const Syllabus = () => {
// //   return <div className='py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16 gap-3 sm:gap-4 flex flex-col '>

// //     <h3 className='text-center font-roughScript text-4xl sm:text-7xl font-bold text-green-800 mb-[-2%]'>Syllabus</h3>
// //     <Image src={"/claylab assets/general/brushGraphics1.png"} height={8} width={180} className="max-w-xs sm:max-w-3xl mx-auto" alt={"underline"} />

// //     <Image src={"/claylab assets/entrepreneurshipProgram/syllabus.png"} height={180} width={52200} className="mx-auto my-4 sm:my-8 max-w-full sm:max-w-6xl" alt={"syllabus-bg"} />
// //   </div>
// // }

// // export default Syllabus

"use client";
import React, { useState, useEffect } from "react";
import { IoMdRocket } from "react-icons/io";
import Image from "next/image";

interface JourneyPhase {
  title: string;
  description: string;
  color: string;
  duration: number; // in seconds
}

const Syllabus = () => {
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const phases: JourneyPhase[] = [
    {
      title: "Ideation & Mapping",
      description: "Brainstorming and identifying opportunities",
      color: "#10B981",
      duration: 1,
    },
    {
      title: "Building Solutions",
      description: "Developing user-centered solutions",
      color: "#F59E0B",
      duration: 1,
    },
    {
      title: "Piloting",
      description: "Testing solutions in a controlled environment",
      color: "#EF4444",
      duration: 1,
    },
    {
      title: "Reflection & Innovation",
      description: "Analyzing results and innovating",
      color: "#EC4899",
      duration: 1,
    },
    {
      title: "Full-Scale Execution",
      description: "Implementing solutions on a large scale",
      color: "#8B5CF6",
      duration: 1,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < phases.length - 1) {
        setCurrentPhase((prev) => prev + 1);
      } else {
        // Auto restart after completion
        setCurrentPhase(0);
      }
    }, phases[currentPhase].duration * 1000);

    return () => clearTimeout(timer);
  }, [currentPhase, phases]);

  // const getRocketPosition = (): string => {
  //   const basePosition = 400; // Starting position from bottom
  //   const stepHeight = 205; // Height between each phase
  //   const targetPosition = basePosition - (currentPhase * stepHeight);

  //   return `translateY(-${basePosition - targetPosition}px)`;
  // };

  // const getRocketPosition = (): string => {
  //   const stepHeight = 225; // Height between each phase
  //   const targetPosition = currentPhase * stepHeight;

  //   return `translateY(-${targetPosition}px)`;
  // };

  const getRocketPosition = (): string => {
    // Since phases are in reverse order (flex-col-reverse), we need to calculate from top
    const totalPhases = phases.length;
    const stepHeight = 195; // Adjust this to match your actual spacing between phases
    const reverseIndex = totalPhases - 1 - currentPhase; // Reverse the index
    const targetPosition = reverseIndex * stepHeight;

    return `translateY(${targetPosition}px)`;
  };

  const getPhaseOpacity = (index: number): number => {
    return index <= currentPhase ? 1 : 0.4;
  };

  const getPhaseScale = (index: number): number => {
    return index === currentPhase ? 1 : 1;
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16 gap-3 sm:gap-4 flex flex-col">
      <h3 className="text-4xl sm:text-5xl font-bold text-green-800 mb-[-2%] underline ">
        Syllabus
      </h3>

      <div className="  mx-auto my-8 w-full">
        <div className="flex flex-col lg:flex-row gap-36">
          {/* Left Side - Timeline */}
          <div className=" relative">

          <div className="flex flex-col items-center  ">
            {/* Journey Timeline */}
            <div className="relative flex flex-col items-center">
              <div className="absolute right-2.5 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-black opacity-60 z-5"></div>

              {/* Phases */}
              <div className="flex flex-col-reverse items-center space-y-reverse space-y-20">
                {phases.map((phase, index) => (
                  <div
                    key={index}
                    className="flex items-center w-full max-w-2xl relative"
                    style={{
                      opacity: getPhaseOpacity(index),
                      transform: `scale(${getPhaseScale(index)})`,
                      transition: "opacity 0.5s ease, transform 0.3s ease",
                    }}
                  >
                    {/* Phase Content */}
                    <div className="bg-white rounded-lg p-6 shadow-lg mr-8 flex-1">
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: phase.color }}
                      >
                        {phase.title}
                      </h3>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>

                    {/* Timeline Circle */}
                    <div className="relative z-10">
                      <div
                        className="w-6 h-6 rounded-full border-4 border-white shadow-lg"
                        style={{ backgroundColor: phase.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rocket */}
              {/* <div
                      className="absolute right-0 z-20 transition-transform duration-1000 ease-in-out"
                      style={{
                        transform: getRocketPosition(),
                        bottom: '20px'
                      }}
                    >
                      <div className="text-4xl filter drop-shadow-lg">
                        <IoMdRocket className='text-red-800 ' />
                      </div>
                      
                      {/* Rocket Trail Effect 
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-5 bg-gradient-to-b from-orange-400 via-yellow-300 to-transparent rounded-full opacity-80 animate-pulse"></div>
                      </div>
                    </div> */}

              {/* ROcket Position  */}
              {/* <div
                      className="absolute right-3 z-20 transition-transform duration-1000 ease-in-out"
                      style={{
                        transform: `${getRocketPosition()} translateX(50%)`,
                        bottom: '20px'
                      }}
                    >
                      <div className="text-4xl filter drop-shadow-lg">
                        <IoMdRocket className='text-red-800 ' />
                      </div>
                      
                      {/* Rocket Trail Effect 
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-3 h-5 bg-gradient-to-b from-orange-400 via-yellow-300 to-transparent rounded-full opacity-80 animate-pulse"></div>
                      </div>
                    </div> */}

              {/* Rocket */}
              <div
                className="absolute right-3 z-20 transition-transform duration-1000 ease-in-out"
                style={{
                  transform: `${getRocketPosition()} translateX(50%)`,
                  top: "20px", // Changed from bottom to top
                }}
              >
                <div className="text-4xl filter drop-shadow-lg">
                  <IoMdRocket className="text-red-500 " />
                </div>

                {/* Rocket Trail Effect */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-5 bg-gradient-to-b from-orange-600 via-yellow-600 to-transparent rounded-full opacity-100 animate-pulse"></div>
                </div>
              </div>

              {/* Current Phase Indicator */}
              {/* <div className="fixed top-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg">
                      <div className="text-sm font-semibold">Current Phase:</div>
                      <div style={{ color: phases[currentPhase].color }}>
                        {phases[currentPhase].title}
                      </div>
                      <div className="text-xs text-gray-300 mt-1">
                        Phase {currentPhase + 1} of {phases.length}
                      </div>
                    </div> */}

              {/* Progress Bar */}
              {/* <div className=" bottom-4 transform w-80 mt-6-translate-x-2 ">
                <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out rounded-full"
                    style={{
                      width: `${((currentPhase + 1) / phases.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="text-center text-black text-sm mt-2">
                  Journey Progress:{" "}
                  {Math.round(((currentPhase + 1) / phases.length) * 100)}%
                </div>
              </div> */}

              <div className="w-80 mt-6 mx-auto ml-5">
                <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out rounded-full"
                    style={{
                      width: `${((currentPhase + 1) / phases.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="text-center text-black text-sm mt-2">
                  Journey Progress:{" "}
                  {Math.round(((currentPhase + 1) / phases.length) * 100)}%
                </div>
              </div>

            </div>
          </div>

          </div>

          {/* Right Side - Description */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="">
              <h2 className="text-4xl font-bold text-gray-800 underline">
                Course Overview
              </h2>
              <p className="text-3xl font-semibold text-gray-700 leading-relaxed mb-20">
                Students take a 9-month journey of building real projects,
                structured around 6 stages:
              </p>

              <div className="space-y-10 text-xl">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 font-bold text-xl">1.</span>
                  <span className="text-gray-800 font-semibold">
                    Ideation & Opportunity Mapping
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-xl">2.</span>
                  <span className="text-gray-800 font-semibold">
                    Building User-Centred Feasible Solutions
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-pink-600 font-bold text-xl">3.</span>
                  <span className="text-gray-800 font-semibold">
                    Piloting to Test the Waters
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold text-xl">4.</span>
                  <span className="text-gray-800 font-semibold">
                    Reflection & Innovation
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl">5.</span>
                  <span className="text-gray-800 font-semibold">
                    Full-Scale Execution
                  </span>
                </div>
              </div>

              {/* <div className="mt-8 p-4 bg-yellow-100 rounded-lg border-l-4 border-yellow-500">
                <h6 className="font-bold text-gray-800 mb-2">Storytelling & Pitching</h6>
                <p className="text-gray-700">Learn to effectively communicate your ideas and present your solutions to stakeholders.</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default Syllabus;

'use client'
import React, { useState, useEffect } from 'react';
import { IoMdRocket } from "react-icons/io";


interface JourneyPhase {
  title: string;
  description: string;
  color: string;
  duration: number; // in seconds
}

const RocketJourneyAnimation: React.FC = () => {

  const [currentPhase, setCurrentPhase] = useState<number>(0);
  // const [isAnimating, setIsAnimating] = useState<boolean>(true);

  const phases: JourneyPhase[] = [
    {
      title: "Ideation & Mapping",
      description: "Brainstorming and identifying opportunities",
      color: "#10B981",
      duration: 2
    },
    {
      title: "Building Solutions",
      description: "Developing user-centered solutions",
      color: "#F59E0B",
      duration: 2
    },
    {
      title: "Piloting",
      description: "Testing solutions in a controlled environment",
      color: "#EF4444",
      duration: 2
    },
    {
      title: "Reflection & Innovation",
      description: "Analyzing results and innovating",
      color: "#EC4899",
      duration: 2
    },
    {
      title: "Full-Scale Execution",
      description: "Implementing solutions on a large scale",
      color: "#8B5CF6",
      duration: 3
    }
  ];


  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentPhase < phases.length - 1) {
        setCurrentPhase(prev => prev + 1);
      } else {
        // Auto restart after completion
        setCurrentPhase(0);
      }
    }, phases[currentPhase].duration * 1000);

    return () => clearTimeout(timer);
  }, [currentPhase, phases]);

  const getRocketPosition = (): string => {
    const basePosition = 400; // Starting position from bottom
    const stepHeight = 100; // Height between each phase
    const targetPosition = basePosition - (currentPhase * stepHeight);
    
    return `translateY(-${basePosition - targetPosition}px)`;
  };

  const getPhaseOpacity = (index: number): number => {
    return index <= currentPhase ? 1 : 0.4;
  };

  const getPhaseScale = (index: number): number => {
    return index === currentPhase ? 1 : 1;
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8">
      {/* Journey Timeline */}
      <div className="relative flex flex-col items-center">
        
        <div className="absolute right-3 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-white opacity-60 z-5"></div>

        {/* Phases */}
        <div className="flex flex-col-reverse items-center space-y-reverse space-y-20">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="flex items-center w-full max-w-2xl relative"
              style={{
                opacity: getPhaseOpacity(index),
                transform: `scale(${getPhaseScale(index)})`,
                transition: 'opacity 0.5s ease, transform 0.3s ease'
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
                >
                </div>
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
      
        <div
          className="absolute right-3 z-20 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `${getRocketPosition()} translateX(50%)`,
            bottom: '20px'
          }}
        >
          <div className="text-4xl filter drop-shadow-lg">
            <IoMdRocket className='text-red-800 ' />
          </div>
          
          {/* Rocket Trail Effect */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-5 bg-gradient-to-b from-orange-400 via-yellow-300 to-transparent rounded-full opacity-80 animate-pulse"></div>
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
        <div className=" bottom-4 transform-x  w-80 mt-6 text-center ">
          <div className=" -translate-x-6 bg-gray-700 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out rounded-full"
              style={{
                width: `${((currentPhase + 1) / phases.length) * 100}%`
              }}
            ></div>
          </div>
          <div className="text-center text-white text-sm mt-2">
            Journey Progress: {Math.round(((currentPhase + 1) / phases.length) * 100)}%
          </div>
        </div>

      </div>
    </div>
  );
};

export default RocketJourneyAnimation;
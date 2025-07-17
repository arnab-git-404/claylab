"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
  member: {
    name: string;
    role: string;
    image: string;
  };
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  manualOverride: boolean;
  setManualOverride: (value: boolean) => void;
}

export default function TeamMemberRow({
  member,
  index,
  activeIndex,
  setActiveIndex,
  manualOverride,
  setManualOverride,
}: Props) {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-40% 0px -40% 0px",
  });

  useEffect(() => {
    if (!manualOverride && inView && activeIndex !== index) {
      setManualOverride(false);
      if (index > activeIndex) setActiveIndex(activeIndex + 1);
      else if (index < activeIndex) setActiveIndex(activeIndex - 1);
    }
  }, [inView]);

  const handleClick = () => {
    setActiveIndex(index);
    setManualOverride(activeIndex === index ? !manualOverride : true);
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="relative w-full flex items-center justify-between px-4 py-6 cursor-pointer transition-colors duration-300 hover:bg-green-50"
    >
      <span className={`text-lg md:text-xl font-medium ${activeIndex === index ? "text-green-800 font-bold" : "text-black"}`}>
        {member.name}
      </span>

      {activeIndex === index && (
        <div className="absolute top-[30%] left-[45%] transform -translate-y-1/2 z-10 w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-xl overflow-hidden shadow-md transition-all duration-300">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <span className={`text-sm md:text-base text-right ${activeIndex === index ? "text-green-800 font-bold" : "text-black"}`}>
        {member.role}
      </span>

      <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#FFFFFF] via-[#474747] to-[#FFFFFF]" />
    </div>
  );
}

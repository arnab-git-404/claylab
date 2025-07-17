"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Ashish",
    role: "Director",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Vivek",
    role: "Chief Executive officer & Director",
    image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Purva",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Brototy",
    role: "Co–Founder",
    image: "https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
  },
  {
    name: "Aarti",
    role: "Senior Program Manager",
    image: "https://images.unsplash.com/photo-1681779279774-79d871470b6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
  },
  {
    name: "Tabassum",
    role: "Program Manager",
    image: "https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
  },
  {
    name: "Neha Garg",
    role: "Associate",
    image: "https://images.unsplash.com/photo-1564805280186-5d7056d538ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
  },
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);

  return (
    <section className="py-8 sm:py-12 px-2 sm:px-4 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
        <span className="border-b-4 border-green-600 pb-2">Our Team</span>
      </h2>

      <div className="relative w-full flex flex-col gap-4">
        {team.map((member, index) => {
          const [ref, inView] = useInView({
            threshold: 1,
            rootMargin: "-40% 0px -40% 0px",
            triggerOnce: false,
          });

          useEffect(() => {
            if (!manualOverride && inView && activeIndex !== index) {
              setManualOverride(false);
              setActiveIndex((prev) => {
                if (index > prev) return prev + 1;
                if (index < prev) return prev - 1;
                return prev;
              });
            }
          }, [inView, index, activeIndex, manualOverride]);

          return (
            <div
              key={member.name}
              ref={ref}
              onClick={() => {
                setActiveIndex(index);
                setManualOverride((prev) => activeIndex === index ? !prev : true);
              }}
              className="relative w-full flex items-center justify-between px-4 py-6 cursor-pointer transition-colors duration-300 hover:bg-green-50"
            >
              {/* Left: Name */}
              <span className={`text-lg md:text-xl font-medium ${activeIndex === index ? "text-green-800 font-bold" : "text-black"}`}>
                {member.name}
              </span>

              {/* Center: Image */}
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

              {/* Right: Role */}
              <span className={`text-sm md:text-base text-right ${activeIndex === index ? "text-green-800 font-bold" : "text-black"}`}>
                {member.role}
              </span>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#FFFFFF] via-[#474747] to-[#FFFFFF]" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

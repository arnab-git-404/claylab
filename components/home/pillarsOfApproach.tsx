"use client";

import Heading from "../heading";
import Image from "next/image";

const pillars = [
  {
    title: "Quality Education",
    description: "We focus on providing strong foundational knowledge that empowers learners for life.",
    image: "/claylab assets/home/pillarsOfApproach/Component 1pillarsOfApproach.png",
  },
  {
    title: "Community-Driven Support",
    description: "Youth are supported by a collective network of mentors, peers, and community members.",
    image: "/claylab assets/home/pillarsOfApproach/Component 2pillarsOfApproach.png",
  },
  {
    title: "Child-Centered Learning",
    description: "We adapt learning styles and pace to suit each child's unique needs and talents.",
    image: "/claylab assets/home/pillarsOfApproach/Component 3pillarsOfApproach.png",
  },
  {
    title: "Mentorship with Heart",
    description: "Our mentors lead with empathy, compassion, and commitment to growth.",
    image: "/claylab assets/home/pillarsOfApproach/Component 4pillarsOfApproach.png",
  },
];

const PillarsOfApproach = () => {
  return (
    <section className="py-8 sm:py-10 px-2 sm:px-4 md:px-16">
      <Heading text="Pillars of Approach" />
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="relative h-[220px] sm:h-[400px] rounded-lg overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-105 cursor-pointer transition-transform"
          >
            {/* Background Image */}
            <Image
              src={pillar.image}
              alt={pillar.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30">
              {/* Title */}
              <div className="absolute bottom-2 sm:bottom-4 w-full text-center px-2 sm:px-4 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-5">
                <h3 className="text-white text-lg sm:text-4xl text-start font-semibold">{pillar.title}</h3>
              </div>

              {/* Description */}
              <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-4 text-center">
                <p className="text-white text-xs sm:text-xl max-w-xs opacity-0 translate-y-5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PillarsOfApproach;

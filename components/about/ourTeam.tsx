// "use client";

// import {useState} from "react";
// import TeamMemberRow from "./TeamMemberRow";

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
// }

// const team: TeamMember[] = [
//   {
//     name: "Ashish",
//     role: "Director",
//     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Vivek",
//     role: "Chief Executive officer & Director",
//     image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Purva",
//     role: "Chief Executive Officer",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     name: "Brototy",
//     role: "Co–Founder",
//     image: "https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
//   },
//   {
//     name: "Aarti",
//     role: "Senior Program Manager",
//     image: "https://images.unsplash.com/photo-1681779279774-79d871470b6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
//   },
//   {
//     name: "Tabassum",
//     role: "Program Manager",
//     image: "https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
//   },
//   {
//     name: "Neha Garg",
//     role: "Associate",
//     image: "https://images.unsplash.com/photo-1564805280186-5d7056d538ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
//   },
// ];

// export default function OurTeam() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [manualOverride, setManualOverride] = useState(false);

//   return (
//     <section className="py-8 sm:py-12 px-2 sm:px-4 md:px-16">
//       <h2 className="text-4xl md:text-5xl font-bold mb-16 text-left">
//         <span className="border-b-4 border-green-600 pb-2">Our Team</span>
//       </h2>

//       <div className="relative w-full flex flex-col gap-4">
//         {team.map((member, index) => (
//           <TeamMemberRow
//             key={member.name}
//             member={member}
//             index={index}
//             activeIndex={activeIndex}
//             setActiveIndex={setActiveIndex}
//             manualOverride={manualOverride}
//             setManualOverride={setManualOverride}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }









// NEW UI FOR TEAM SECTION
// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { LinkedinIcon, ChevronLeft, ChevronRight } from "lucide-react";

// interface TeamMember {
//   name: string;
//   role: string;
//   image: string;
//   linkedin: string;
// }

// const team: TeamMember[] = [
//   {
//     name: "Ashish",
//     role: "Director",
//     image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     linkedin: "https://linkedin.com/in/ashish"
//   },
//   {
//     name: "Vivek",
//     role: "Chief Executive Officer & Director",
//     image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     linkedin: "https://linkedin.com/in/vivek"
//   },
//   {
//     name: "Purva",
//     role: "Chief Executive Officer",
//     image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     linkedin: "https://linkedin.com/in/purva"
//   },
//   {
//     name: "Brototy",
//     role: "Co–Founder",
//     image: "https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
//     linkedin: "https://linkedin.com/in/brototy"
//   },
//   {
//     name: "Aarti",
//     role: "Senior Program Manager",
//     image: "https://images.unsplash.com/photo-1681779279774-79d871470b6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
//     linkedin: "https://linkedin.com/in/aarti"
//   },
//   {
//     name: "Tabassum",
//     role: "Program Manager",
//     image: "https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
//     linkedin: "https://linkedin.com/in/tabassum"
//   },
//   {
//     name: "Neha Garg",
//     role: "Associate",
//     image: "https://images.unsplash.com/photo-1564805280186-5d7056d538ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
//     linkedin: "https://linkedin.com/in/nehagarg"
//   },
// ];

// const TeamMemberCard = ({ member }: { member: TeamMember }) => {
//   return (
//     <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
//       {/* Card Content */}
//       <div className="p-6">
//         {/* Profile Image */}
//         <div className="relative w-24 h-24 mx-auto mb-4">
//           <Image
//             src={member.image}
//             alt={member.name}
//             fill
//             className="rounded-full object-cover ring-4 ring-green-100 group-hover:ring-green-200 transition-all duration-300"
//           />
//           {/* LinkedIn Badge */}
//           <a
//             href={member.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
//           >
//             <LinkedinIcon size={16} />
//           </a>
//         </div>
        
//         {/* Member Info */}
//         <div className="text-center">
//           <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
//             {member.name}
//           </h3>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             {member.role}
//           </p>
//         </div>
//       </div>
      
//       {/* Hover Effect Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
//     </div>
//   );
// };

// export default function OurTeam() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 4;
//   const totalPages = Math.ceil(team.length / itemsPerPage);
  
//   const getCurrentTeamMembers = () => {
//     const start = currentPage * itemsPerPage;
//     return team.slice(start, start + itemsPerPage);
//   };

//   const nextPage = () => {
//     setCurrentPage((prev) => (prev + 1) % totalPages);
//   };

//   const prevPage = () => {
//     setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   return (
//     <section className="py-16 px-4 md:px-8 lg:px-16 ">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Meet Our{" "}
//             <span className="text-green-600 relative">
//               Team
//               <div className="absolute -bottom-2 left-0 right-0 h-1 bg-green-600 rounded-full" />
//             </span>
//           </h2>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Passionate professionals dedicated to driving innovation and excellence in everything we do.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {getCurrentTeamMembers().map((member) => (
//             <TeamMemberCard key={member.name} member={member} />
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-center gap-4">
//             <button
//               onClick={prevPage}
//               className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-green-300 transition-all duration-300 disabled:opacity-50"
//               disabled={currentPage === 0}
//             >
//               <ChevronLeft size={20} className="text-gray-600" />
//             </button>
            
//             <div className="flex gap-2">
//               {Array.from({ length: totalPages }, (_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setCurrentPage(i)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     i === currentPage
//                       ? "bg-green-600 shadow-lg"
//                       : "bg-gray-300 hover:bg-gray-400"
//                   }`}
//                 />
//               ))}
//             </div>
            
//             <button
//               onClick={nextPage}
//               className="p-2 rounded-full bg-white shadow-md hover:shadow-lg border border-gray-200 hover:border-green-300 transition-all duration-300 disabled:opacity-50"
//               disabled={currentPage === totalPages - 1}
//             >
//               <ChevronRight size={20} className="text-gray-600" />
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


// TRYING COURASAL 

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LinkedinIcon, ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const team: TeamMember[] = [
  {
    name: "Ashish",
    role: "Director",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkedin: "https://linkedin.com/in/ashish"
  },
  {
    name: "Vivek",
    role: "Chief Executive Officer & Director",
    image: "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1625&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkedin: "https://linkedin.com/in/vivek"
  },
  {
    name: "Purva",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    linkedin: "https://linkedin.com/in/purva"
  },
  {
    name: "Brototy",
    role: "Co–Founder",
    image: "https://images.unsplash.com/photo-1688001247541-43bbd88f77b9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQxfHx8ZW58MHx8fHx8",
    linkedin: "https://linkedin.com/in/brototy"
  },
  {
    name: "Aarti",
    role: "Senior Program Manager",
    image: "https://images.unsplash.com/photo-1681779279774-79d871470b6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    linkedin: "https://linkedin.com/in/aarti"
  },
  {
    name: "Tabassum",
    role: "Program Manager",
    image: "https://images.unsplash.com/photo-1566498107258-afcb40b506e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8",
    linkedin: "https://linkedin.com/in/tabassum"
  },
  {
    name: "Neha Garg",
    role: "Associate",
    image: "https://images.unsplash.com/photo-1564805280186-5d7056d538ca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8",
    linkedin: "https://linkedin.com/in/nehagarg"
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="rounded-full object-cover"
        />
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute -bottom-1 -right-1 bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-full shadow-md transition-all duration-300 hover:scale-110"
        >
          <LinkedinIcon size={12} />
        </a>
      </div>
      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
        {member.name}
      </h3>
      <p className="text-gray-600 text-sm">{member.role}</p>
    </div>
  );
};

export default function OurTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, team.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="text-green-600 relative">
              Team
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-green-600 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionate professionals dedicated to driving innovation and excellence.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
              }}
            >
              {team.map((member) => (
                <div 
                  key={member.name}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / cardsToShow}% - ${(cardsToShow - 1) * 24 / cardsToShow}px)` }}
                >
                  <TeamMemberCard member={member} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "bg-green-600 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
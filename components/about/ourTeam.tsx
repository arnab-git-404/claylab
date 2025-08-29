"use client";

import {useState} from "react";
import TeamMemberRow from "./TeamMemberRow";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

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


const team: TeamMember[] = [
  {
    name: "Vivek Kaushik",
    role: "CEO / Co-founder / Director",
    image: "/claylab assets/aboutUs/team/Vivek Kaushik.jpg",
    linkedin: "https://www.linkedin.com/in/viveksrkaushik"
  },
  {
    name: "Ashish Alawadhi",
    role: "Director",
    image: "/claylab assets/aboutUs/team/Ashish Alawadhi.jpg",
    linkedin: "https://www.linkedin.com/in/ashish-alawadhi-6b72a323"
  },
  {
    name: "Purva Parwani",
    role: "COO / Co-founder",
    image: "/claylab assets/aboutUs/team/Purva Parwani.jfif",
    linkedin: "https://linkedin.com/in/purva"
  },
  {
    name: "Brototy Mishra",
    role: "Co-founder, Advisory Board Member",
    image: "/claylab assets/aboutUs/team/Brototy Mishra.jpg",
    linkedin: "https://www.linkedin.com/in/brototy-mishra"
  },
  {
    name: "Aarti Singh",
    role: "Senior Program Manager",
    image: "/claylab assets/aboutUs/team/Aarti Singh.jpg",
    linkedin: "https://www.linkedin.com/in/aarti-singh"
  },
  {
    name: "Tabassum Shaikh",
    role: "Program Manager - Curriculum and Learning",
    image: "/claylab assets/aboutUs/team/Tabassum Shaikh.jpg",
    linkedin: "https://www.linkedin.com/in/tabassumshaikh88"
  },
  {
    name: "Pardeep Bansal",
    role: "Program Manager and Student Coach",
    image: "/claylab assets/aboutUs/team/Pardeep Bansal.jpg",
    linkedin: "https://www.linkedin.com/in/pardeep-bansal-307605317"
  },
  {
    name: "Muskan Shaikh",
    role: "Program Associate, Outreach & School Relations",
    image: "/claylab assets/aboutUs/team/Muskan Shaikh.jpg",
    linkedin: "https://www.linkedin.com/in/muskan-shaikh-b0a2b3282"
  },
  {
    name: "Vishakha Jain",
    role: "Student Entrepreneurship Coach",
    image: "/claylab assets/aboutUs/team/Vishakha Jain.jpg",
    linkedin: "https://www.linkedin.com/in/vishakha-nitin-jain"
  }
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
        {team.map((member, index) => (
          <TeamMemberRow
            key={member.name}
            member={member}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            manualOverride={manualOverride}
            setManualOverride={setManualOverride}
          />
        ))}
      </div>
    </section>
  );
}









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

const teamMembers = [
  {
    name: "John Doe",
    role: "Planning head",
    image: "/claylab assets/workshop/workshopMember1.png",
  },
  {
    name: "Jane Smith",
    role: "Planning head",
    image: "/claylab assets/workshop/workshopMember2.png",
  },
  {
    name: "Alice Johnson",
    role: "Publicity head",
    image: "/claylab assets/workshop/workshopMember3.png",
  },
];

export default function TeamSection() {
  return (
    <section className="pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row flex-wrap justify-between sm:justify-between gap-16">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative w-full max-w-[334px] sm:w-[45%] md:w-[30%] aspect-square mx-auto"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute bottom-0 w-full text-white text-center text-2xl font-sans py-4 rounded-b-lg">
              {member.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

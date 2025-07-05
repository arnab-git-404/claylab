import Heading from "../heading"
import Image from 'next/image'


export const mentorshipSteps = [
  {
    id: 'I',
    title: 'Apply mentorship',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/63d5361a-6f2b-4d23-818d-6e6da3c26d8a 2.png',
    bg: 'bg-[#e1f0e6]',
  },
  {
    id: 'II',
    title: 'Get matched',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5-1.png',
    bg: 'bg-[#e1f0e6]',
  },
  {
    id: 'III',
    title: 'Start mentoring',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5-2.png',
    bg: 'bg-[#d1ebd8]',
  },
  {
    id: 'IV',
    title: 'Grow together',
    image: '/claylab assets/mentorshipProgram/mentorshipJourney/ChatGPT Image Jun 19, 2025, 10_38_44 PM 5.png',
    bg: 'bg-[#d1ebd8]',
  },
];


const MentorshipJourney = () => {
  return <div className="flex flex-col gap-4 px-4 md:px-16  ">

    <Heading text={"Ready to start your mentorship journey"} />
    <div className="py-12 px-4">
      <div className="max-w-6xl flex justify-between gap-6">
        {mentorshipSteps.map((step, index) => (
          <div
            key={index}
            className={` ${index%2==0 ? "bg-gradient-to-b from-green-200 to-green-800" : "bg-[#C3D7C4]"} rounded-2xl p-5 flex flex-col items-center text-center shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
          >
            <Image
              src={step.image}
              alt={step.title}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="mt-3 flex items-center gap-2 font-serif">
              <span className="text-2xl flex justify-center align-center items-center font-bold rounded-full bg-gray-200 h-10 w-10">
                {step.id}
              </span>
              <span className={`text-xl font-bold ${index%2==0 ? "text-white" : "text-green-700"}`}>{step.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}

export default MentorshipJourney
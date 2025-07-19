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
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="px-6">
        {/* Header */}
        <div className="text-left mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <Heading text="Ready to start your mentorship journey" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
          {mentorshipSteps.map((step, index) => (
            <div
              key={step.id}
              className={`
                ${index % 2 === 0 
                  ? "bg-gradient-to-b from-green-200 to-green-800" 
                  : "bg-[#C3D7C4]"
                } 
                rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center text-center 
                shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg 
                cursor-pointer group
              `}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-square mb-4 sm:mb-5 md:mb-6 overflow-hidden rounded-lg">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Step Info */}
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 font-serif">
                {/* Step Number */}
                <span className="text-lg sm:text-xl md:text-2xl flex justify-center items-center font-bold rounded-full bg-gray-200 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 flex-shrink-0">
                  {step.id}
                </span>
                
                {/* Step Title */}
                <span className={`
                  text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center sm:text-left
                  ${index % 2 === 0 ? "text-white" : "text-green-700"}
                `}>
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default MentorshipJourney
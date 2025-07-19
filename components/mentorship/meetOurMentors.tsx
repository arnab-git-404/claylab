// import Image from 'next/image'
// import Heading from '../heading'

// const MentorsImage = [
//   {
//     ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 10.png"
//   }, {
//     ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 11.png"
//   }, {
//     ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 12.png"
//   }, {
//     ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 9.png"
//   }
// ]

// const MeetMentors = () => {

//   return (
//     <section className="relative py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16">
//       <Heading text="Meet Our Mentors" />
//       <div className="relative mt-8 sm:mt-12 flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 max-w-full lg:max-w-7xl mx-auto">
//         {/* Sticky Image Grid */}
//         <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4">
//           {MentorsImage.map((imageData) => (
//             <Image
//               key={imageData.ImageUrl}
//               src={imageData.ImageUrl}
//               alt="mentor image"
//               height={400}
//               width={300}
//               className="rounded-xl object-cover"
//             />
//           ))}
//         </div>

//         {/* Scrollable Description */}
//         <div className="sticky top-20 h-fit self-start flex flex-col gap-8 text-2xl leading-relaxed w-full lg:w-1/2 px-2 lg:px-12">
//           <p>
//             Our mentors come from every corner of India — teachers, engineers, artists, scientists —
//             all united by one goal: to guide and uplift young learners with compassion and clarity.
//           </p>

//           <p>
//             They&apos;re not just teachers. They&apos;re listeners, supporters, and lifelong learners themselves.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MeetMentors

import Image from "next/image";
import Heading from "../heading";

const MentorsImage = [
  {
    ImageUrl:
      "/claylab assets/mentorshipProgram/meetOurMentors/Component 10.png",
    place: "Bengalaru",
    Name: "Rohan Mehta",
    description:
      "AI researcher with over 12 years of experience in deep learning and computer vision.",
  },
  {
    ImageUrl:
      "/claylab assets/mentorshipProgram/meetOurMentors/Component 11.png",
    place: "Pune",
    Name: "Nidhi Verma",
    description:
      "Lead software engineer mentoring aspiring full-stack developers since 2015",
  },
  {
    ImageUrl:
      "/claylab assets/mentorshipProgram/meetOurMentors/Component 12.png",
    place: "Delhi",
    Name: "Ajay Kumar",
    description:
      "Data Scientist at Google with a passion for teaching machine learning and statistics.",
  },
  {
    ImageUrl:
      "/claylab assets/mentorshipProgram/meetOurMentors/Component 9.png",
    place: "Mumbai",
    Name: "Aditi Sharma",
    description:
      "Data Scientist at Google with a passion for teaching machine learning and statistics.",
  },
];

const MeetMentors = () => {
  return (
    <section className="relative sm:py-10 md:py-2 lg:py-18 px-4 sm:px-6 lg:px-8">
      <div className=" px-6 mx-auto">
        <div className="text-left mb-12 sm:mb-16 lg:mb-20">
          <Heading text="Meet Our Mentors" />
        </div>

        <div className="flex flex-col xl:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Image Grid */}
          <div className="w-full xl:w-1/2 order-2 xl:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {MentorsImage.map((imageData, index) => (
                <div
                  key={imageData.ImageUrl}
                  className="relative aspect-[3/4] w-full group overflow-hidden rounded-xl sm:rounded-2xl bg-gray-100"
                >
                  {/* Image */}
                  <Image
                    src={imageData.ImageUrl}
                    alt={`Mentor ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay for Headings */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300" />

                  {/* Heading 1 (Top Left → moves down) */}
                  <h4 className="absolute top-3 left-3 text-lg text-white font-openSans transition-all duration-500 transform  sm:group-hover:translate-y-56 group-hover:translate-y-64 group-hover:text-green-700 flex items-center space-x-1">
                    <span>|</span>
                    <span className="text-base mt-1">{imageData.place}</span>
                  </h4>

                  {/* Heading 2 (Bottom → moves slightly up) */}
                  <h3 className="absolute bottom-3 left-3 text-3xl text-white font-openSans transition-all duration-500 transform group-hover:-translate-y-[70px]">
                    {imageData.Name}
                  </h3>

                  {/* Heading 3 (Description → fade in just above heading2) */}
                  <p className="absolute bottom-2 left-3 right-4 text-base font-regular text-gray-200 opacity-0 transition-all duration-500 transform group-hover:opacity-100">
                    {imageData.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="w-full xl:w-1/2 order-1 xl:order-2 xl:sticky xl:top-24 xl:self-start">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:pl-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose text-gray-700 font-light">
                  Our mentors come from every corner of India — teachers,
                  engineers, artists, scientists — all united by one goal: to
                  guide and uplift young learners with compassion and clarity.
                </p>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose text-gray-700 font-light">
                  They&apos;re not just teachers. They&apos;re listeners,
                  supporters, and lifelong learners themselves.
                </p>
              </div>

              {/* Optional CTA Button */}
              <div className="pt-4 sm:pt-6 lg:pt-8">
                <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Learn More About Our Mentors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMentors;

import Image from 'next/image'
import Heading from '../heading'

const MentorsImage = [
  {
    ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 10.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 11.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 12.png"
  }, {
    ImageUrl: "/claylab assets/mentorshipProgram/meetOurMentors/Component 9.png"
  }
]

const MeetMentors = () => {

  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-2 sm:px-4 md:px-16">
      <Heading text="Meet Our Mentors" />
      <div className="relative mt-8 sm:mt-12 flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 max-w-full lg:max-w-7xl mx-auto">
        {/* Sticky Image Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-2 sm:gap-4">
          {MentorsImage.map((imageData) => (
            <Image
              key={imageData.ImageUrl}
              src={imageData.ImageUrl}
              alt="mentor image"
              height={400}
              width={300}
              className="rounded-xl object-cover"
            />
          ))}
        </div>

        {/* Scrollable Description */}
        <div className="sticky top-20 h-fit self-start flex flex-col gap-8 text-2xl leading-relaxed w-full lg:w-1/2 px-2 lg:px-12">
          <p>
            Our mentors come from every corner of India — teachers, engineers, artists, scientists —
            all united by one goal: to guide and uplift young learners with compassion and clarity.
          </p>

          <p>
            They're not just teachers. They're listeners, supporters, and lifelong learners themselves.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MeetMentors
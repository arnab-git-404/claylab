'use client';

export default function OurJourney() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-2 sm:px-4">
      <div className="max-w-full md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Sticky Section */}
        <div className="sticky top-20 h-fit self-start ">
          <div className="space-y-4 sm:space-y-6 my-auto">
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-roughScript text-green-900 leading-tight">
              Our Journey
            </h2>
            <p className="text-lg sm:text-2xl font-medium max-w-md">
              It started with three teachers, a handful of students, and a vision full of hope.
            </p>
          </div>
        </div>

        {/* Right Scrollable Section */}
        <div className="space-y-6 sm:space-y-12 text-base sm:text-lg md:text-xl text-gray-800">
          <p>
            Every child deserves joyful, quality education — one that's just a few clicks away.
            <br />
            We dream of classrooms without borders, where students explore their interests,
            lead passion projects, and grow as changemakers.
          </p>

          <p>
            CLAY stands for Centre for Learning, Affection, and joy.
            <br />
            We believe learning should uplift, not overwhelm.
            <br />
            With mentorship rooted in love and purpose, we help students bloom, shine, and fly.
          </p>

          <p>
            Born during the lockdown in April 2020, Claylab began with 3 teachers and a few students.
            <br />
            By July, it became a registered not-for-profit.
            <br />
            Today, it's a growing community of mentors and learners rewriting what education can be.
          </p>
        </div>
      </div>
    </section>
  );
}

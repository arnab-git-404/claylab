"use client"

const stats = [
  {
    number: "1000+",
    label: "Students supported",
  },
  {
    number: "100+",
    label: "Mentors engaged",
  },
  {
    number: "5+",
    label: "Programs tracked",
  },
  {
    number: "1000+",
    label: `children helping everyday`,
  },
]

export default function Stats() {
  return (
    <div className="py-10 sm:py-10 flex flex-col ">
      <div className="w-5xl sm:w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-2 sm:px-4 gap-4 sm:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col text-center gap-2 sm:gap-6 w-full sm:w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="text-2xl sm:text-4xl underline">{stat.number}</div>
            <div className="text-lg sm:text-3xl flex flex-col text-center max-w-56 gap-2 sm:gap-6">{stat.label}</div>
          </div>
        ))}
      </div>
      <img
        src="/claylab assets/general/brushGraphics2.png"
        alt="Brush underline"
        className="mx-auto w-2/3"
      />
    </div>
  )
}


const stats = [
  {
    value: "96%",
    description: [
      "Mentors feel they are making",
      "a positive difference in the society",
      "while volunteering at ClayClub."
    ]
  },
  {
    value: "92%",
    description: [
      "Mentees reported that the program",
      "helped them do better in school",
      "activities and in academics."
    ]
  },
  {
    value: "75%",
    description: [
      "Mentees showed improved career readiness",
      "from level 2 to level 3",
      "on our rubric."
    ]
  }
]

const statsRow2 = [
  {
    value: "25%",
    description: [
      "Mentees participated in structures",
      "apart from mentorship like Clay talkies,",
      "competitions for pairs, etc."
    ]
  },
  {
    value: "16%",
    description: [
      "Super Mentors and SM Coach trainings",
      "were conducted",
      "for our Mentors."
    ]
  }
]


const StatisticsCommon = () => {
  return <>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`rounded-2xl p-6 flex flex-col justify-between h-48 ${index === 0
            ? "bg-gradient-to-tr from-[#00391C] to-[#009F4E]"
            : "bg-gradient-to-r from-green-100 to-green-100/30"
            } ${index === 0 ? "md:col-span-1" : "md:col-span-1"} min-w-[200px]`}
        >
          <h2
            className={`text-6xl font-openSans font-light ${index === 0 ? "text-[#56C189]" : "text-[#00391C]"
              }`}
          >
            {stat.value}
          </h2>
          <div
            className={`flex flex-col text-sm text-right ${index === 0 ? "text-white " : "text-[#00391C]"
              }`}
          >
            {stat.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {statsRow2.map((stat, index) => (
        <div
          key={index}
          className={`rounded-2xl p-6 flex flex-col justify-between h-48 ${index === -1
            ? "bg-gradient-to-tr from-[#00391C] to-[#009F4E]"
            : "bg-gradient-to-r from-green-100 to-green-100/30"
            } ${index === -1 ? "md:col-span-1" : "md:col-span-1"} min-w-[200px]`}
        >
          <h2
            className={`text-6xl font-openSans font-light ${index === -1 ? "text-[#56C189]" : "text-[#00391C]"
              }`}
          >
            {stat.value}
          </h2>
          <div
            className={`flex flex-col text-sm text-right ${index === -1 ? "text-white " : "text-[#00391C]"
              }`}
          >
            {stat.description.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>

}

export default StatisticsCommon
// "use client";

// import React, { useState } from "react";
// import Image from "next/image";

// const faqs = [
//   {
//     question: "If I want to know more, whom shall I contact?",
//     answer:
//       "You can reach out to our team at support@claylab.in or via our contact page for any queries.",
//   },
//   {
//     question: "Can I know the child's name whom I am supporting?",
//     answer:
//       "Due to privacy reasons, we do not disclose full identities. However, we share updates and progress reports.",
//   },
//   {
//     question: "Who are your beneficiaries?",
//     answer:
//       "Our beneficiaries are primarily Grade 10 students from under-resourced communities seeking mentorship and academic guidance.",
//   },
//   {
//     question: "Will I receive any updates after I start supporting Claylab?",
//     answer:
//       "Yes, we provide regular updates on the mentee's progress and milestones through email or dashboard.",
//   },
//   {
//     question: "Do I need teaching experience to volunteer?",
//     answer:
//       "Not at all! We welcome passionate individuals from all backgrounds who are willing to learn and support students.",
//   },
//   {
//     question: "I'm an organization. How can we partner with Claylab?",
//     answer:
//       "We'd love to collaborate! Please email us at partnerships@claylab.in to explore partnership opportunities.",
//   },
//   {
//     question: "Can I sponsor a specific student or program?",
//     answer:
//       "Yes, you can choose to support a student or contribute to a specific initiative based on your interest.",
//   },
//   {
//     question: "What's the best way to start helping today?",
//     answer:
//       "You can donate, become a mentor, or spread the word about Claylab within your network. Every action counts!",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-16 md:px-24 gap-8 md:gap-12 font-sans">
//       {/* Left Text Section */}
//       <div className="w-full md:w-1/2 pl-0 sm:pl-4 text-left relative mb-8 md:mb-0">
//         <Image
//           className="absolute top-0 z-0 w-32 h-32 sm:w-48 sm:h-48"
//           src={"/claylab assets/general/circleGraphics.png"}
//           height={200}
//           width={200}
//           alt={"bg image graphics"}
//         />
//         <h1 className="text-2xl sm:text-4xl md:text-5xl relative z-10 font-light leading-tight text-green-800 space-y-2">
//           <div>
//             Your <span className="italic font-semibold text-green-800">answers</span>
//           </div>
//           <div>to popular</div>
//           <div>questions</div>
//           <div className="mt-2 gap-2 flex flex-col">
//             <p className="text-3xl sm:text-5xl font-normal">Apply now</p>
//             <Image
//               src={"/claylab assets/general/brushGraphics1.png"}
//               height={8}
//               width={180}
//               className="max-w-xs sm:max-w-2xl mr-auto"
//               alt={"underline"}
//             />
//           </div>
//         </h1>
//       </div>

//       {/* Right Accordion FAQ Section */}
//       <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 max-h-[60vh] sm:max-h-[75vh] overflow-y-auto pr-0 sm:pr-2">
//         {faqs.map((faq, i) => (
//           <div
//             key={i}
//             className="bg-[#F4F8F5] p-2 px-3 rounded-xl shadow-sm text-[#23572A] cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-green-50 hover:shadow-md"
//             onClick={() => toggleFAQ(i)}
//           >
//             <div className="text-base sm:text-lg md:text-xl font-semibold flex justify-between items-center">
//               {faq.question}
//               <span className="text-xl">
//                 {openIndex === i ? "−" : "+"}
//               </span>
//             </div>
//             {openIndex === i && (
//               <p className="text-sm sm:text-base pt-3 leading-relaxed">
//                 {faq.answer}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "If I want to know more, whom shall I contact?",
    answer:
      "You can reach out to our team at support@claylab.in or via our contact page for any queries.",
  },
  {
    question: "Can I know the child's name whom I am supporting?",
    answer:
      "Due to privacy reasons, we do not disclose full identities. However, we share updates and progress reports.",
  },
  {
    question: "Who are your beneficiaries?",
    answer:
      "Our beneficiaries are primarily Grade 10 students from under-resourced communities seeking mentorship and academic guidance.",
  },
  {
    question: "Will I receive any updates after I start supporting Claylab?",
    answer:
      "Yes, we provide regular updates on the mentee's progress and milestones through email or dashboard.",
  },
  {
    question: "Do I need teaching experience to volunteer?",
    answer:
      "Not at all! We welcome passionate individuals from all backgrounds who are willing to learn and support students.",
  },
  {
    question: "I'm an organization. How can we partner with Claylab?",
    answer:
      "We'd love to collaborate! Please email us at partnerships@claylab.in to explore partnership opportunities.",
  },
  {
    question: "Can I sponsor a specific student or program?",
    answer:
      "Yes, you can choose to support a student or contribute to a specific initiative based on your interest.",
  },
  {
    question: "What's the best way to start helping today?",
    answer:
      "You can donate, become a mentor, or spread the word about Claylab within your network. Every action counts!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

    <div className="min-h-screen bg-clay-light-hover py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative min-h-[600px] lg:min-h-[700px]">
            {/* Background Graphics */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                className="absolute top-8 left-8 z-0 w-40 h-40 sm:w-56 sm:h-56 opacity-30"
                src={"/claylab assets/general/circleGraphics.png"}
                height={224}
                width={224}
                alt={"bg image graphics"}
              />
              <div className="absolute bottom-20 right-8 w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-20"></div>
              <div className="absolute top-1/3 right-16 w-16 h-16 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full opacity-25"></div>
            </div>

            <div className="relative z-10 text-center lg:text-left px-4 sm:px-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-tight text-green-800 mb-8">
                <div className="mb-2">
                  Your <span className="italic font-bold text-green-700 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">answers</span>
                </div>
                <div className="mb-2">to popular</div>
                <div className="mb-6">questions</div>
              </h1>
              
              <div className="flex flex-col items-center lg:items-start gap-4">
                <p className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-green-700 bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Apply now
                </p>
                <Image
                  src={"/claylab assets/general/brushGraphics1.png"}
                  height={12}
                  width={240}
                  className="w-48 sm:w-60 lg:w-72"
                  alt={"underline"}
                />
                <button className="mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:from-green-700 hover:to-green-800 transform transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>

          {/* Right FAQ Section */}
          <div className="w-full lg:w-1/2 flex flex-col min-h-[600px] lg:min-h-[700px]">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 h-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              
              <div className="flex flex-col gap-4 max-h-[500px] lg:max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200/50 p-4 px-5 rounded-2xl cursor-pointer transition-all duration-300  hover:shadow-lg group ${
                      openIndex === i ? 'bg-gradient-to-r from-green-100 to-green-200/70 shadow-md' : ''
                    }`}
                    onClick={() => toggleFAQ(i)}
                  >
                    <div className="text-base sm:text-lg font-semibold flex justify-between items-center text-green-800 group-hover:text-green-900">
                      <span className="flex-1 pr-4">{faq.question}</span>
                      <span className={`text-2xl font-bold transition-transform duration-300 ${
                        openIndex === i ? 'rotate-180' : ''
                      }`}>
                        {openIndex === i ? "−" : "+"}
                      </span>
                    </div>
                    {openIndex === i && (
                      <div className="mt-4 pt-3 border-t border-green-200/50">
                        <p className="text-sm sm:text-base leading-relaxed text-green-700 animate-fadeIn">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

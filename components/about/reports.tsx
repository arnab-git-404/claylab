// // 'use client';

// // import Image from "next/image"
// // import Heading from '../heading';

// // export default function ReportsSection() {

// // const reports = [
// //   {
// //     title: "Annual Report 2020-21",
// //     description: "A comprehensive overview of our activities in 2022.",
// //     link: "/reports/annual-report-2022.pdf"
// //   },
// //   {
// //     title: "Impact Assessment 2021-22",
// //     description: "An analysis of the impact of our programs in 2021.",
// //     link: "/reports/impact-assessment-2021.pdf"
// //   },
// //   {
// //     title: "Financial Statement Q4 2022-23",
// //     description: "Our financial performance for the fourth quarter of 2022.",
// //     link: "/reports/financial-statement-q4-2022.pdf"
// //   },
// //   {
// //     title: "Annual Report 2023-24",
// //     description: "A comprehensive overview of our activities in 2021.",
// //     link: "/reports/annual-report-2021.pdf"
// //   },
// //   {
// //     title: "Impact Assessment 2024-25",
// //     description: "Coming Soon . . .",
// //     link: ""
// //   },
// //   {
// //     title: "Registration documents",
// //     description: "Our financial performance for the fourth quarter of 2023.",
// //     link: "/reports/financial-statement-q4-2023.pdf"
// //   }
// // ];

// //   return (
// //     <section className="text-center py-8 sm:py-12 md:py-16 px-2 sm:px-4 rounded-none shadow-md w-full">
// //       {/* Icon */}
// //       <div className="flex justify-center mb-4 sm:mb-6">
// //         <Image src={"/claylab assets/aboutUs/documentIcon.png"} height={80} width={60} alt={"document icon"} className="h-16 w-auto sm:h-24" />
// //       </div>

// //       <Heading text="REPORTS & DOCUMENTATION" />

// //       {/* Description */}
// //       <p className="max-w-full sm:max-w-xl mx-auto text-gray-700 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
// //         We prioritize transparency as we believe it is crucial to foster trust and accountability
// //         in our actions and initiatives.
// //       </p>

// //       {/* Button */}
// //       <button className="px-6 sm:px-12 py-2 text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg transition-all text-xs sm:text-base">
// //         More Reports
// //       </button>

// //     </section>
// //   );
// // }

// 'use client';

// import Image from "next/image"
// import Heading from '../heading';

// export default function ReportsSection() {

// const reports = [
//   {
//     title: "Impact Assessment 2024-25",
//     description: "Coming Soon . . .",
//     link: "",
//     year: "2024-25",
//     type: "impact"
//   },
//   {
//     title: "Annual Report 2023-24",
//     description: "A comprehensive overview of our activities and achievements in 2023-24.",
//     link: "https://drive.google.com/file/d/your-file-id/view", // Replace with actual drive link
//     year: "2023-24",
//     type: "annual"
//   },
//   {
//     title: "Financial Statement Q4 2022-23",
//     description: "Our financial performance for the fourth quarter of 2022-23.",
//     link: "https://drive.google.com/file/d/your-file-id/view", // Replace with actual drive link
//     year: "2022-23",
//     type: "financial"
//   },
//   {
//     title: "Impact Assessment 2021-22",
//     description: "An analysis of the impact of our programs in 2021-22.",
//     link: "https://drive.google.com/file/d/your-file-id/view", // Replace with actual drive link
//     year: "2021-22",
//     type: "impact"
//   },

//   {
//     title: "Registration Documents",
//     description: "Official registration and incorporation documents of the organization.",
//     link: "https://drive.google.com/file/d/your-file-id/view", // Replace with actual drive link
//     year: "",
//     type: "registration"
//   }
// ];

// const getTypeColor = (type: string) => {
//   switch (type) {
//     case 'annual': return 'bg-blue-100 text-blue-800';
//     case 'impact': return 'bg-green-100 text-green-800';
//     case 'financial': return 'bg-purple-100 text-purple-800';
//     case 'registration': return 'bg-orange-100 text-orange-800';
//     default: return 'bg-gray-100 text-gray-800';
//   }
// };

// const handleReportClick = (link: string) => {
//   if (link) {
//     window.open(link, '_blank');
//   }
// };

//   return (
//     <section className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 rounded-none shadow-md w-full max-w-7xl mx-auto">
//       {/* Icon */}
//       <div className="flex justify-center mb-4 sm:mb-6">
//         <Image
//           src={"/claylab assets/aboutUs/documentIcon.png"}
//           height={80}
//           width={60}
//           alt={"document icon"}
//           className="h-16 w-auto sm:h-20 md:h-24"
//         />
//       </div>

//       <Heading text="REPORTS & DOCUMENTATION" />

//       {/* Description */}
//       <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">
//         We prioritize transparency as we believe it is crucial to foster trust and accountability
//         in our actions and initiatives.
//       </p>

//       {/* Reports Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
//         {reports.map((report, index) => (
//           <div
//             key={index}
//             className={`bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 ${
//               report.link ? 'cursor-pointer hover:border-green-300' : 'opacity-75'
//             }`}
//             onClick={() => handleReportClick(report.link)}
//           >
//             {/* Report Type Badge */}
//             <div className="flex justify-between items-start mb-3">
//               <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(report.type)}`}>
//                 {report.type}
//               </span>
//               {report.year && (
//                 <span className="text-xs text-gray-500 font-medium">
//                   {report.year}
//                 </span>
//               )}
//             </div>

//             {/* Document Icon */}
//             <div className="flex justify-center mb-4">
//               <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center">
//                 <svg
//                   className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                 </svg>
//               </div>
//             </div>

//             {/* Report Title */}
//             <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">
//               {report.title}
//             </h3>

//             {/* Report Description */}
//             <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
//               {report.description}
//             </p>

//             {/* Action Button/Status */}
//             <div className="flex justify-center">
//               {report.link ? (
//                 <div className="flex items-center text-green-600 text-xs sm:text-sm font-medium">
//                   <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                   </svg>
//                   View Document
//                 </div>
//               ) : (
//                 <span className="text-amber-600 text-xs sm:text-sm font-medium">
//                   Coming Soon
//                 </span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More Reports Button */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//         <button className="px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-300 transition-all text-sm sm:text-base">
//           View All Reports
//         </button>

//         <p className="text-gray-500 text-xs sm:text-sm">
//           Updated regularly • Last update: {new Date().toLocaleDateString()}
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Heading from "../heading";

export default function ReportsSection() {
  const reports = [
    {
      title: "Annual Report 2024-25",
      description: "Coming Soon . . .",
      link: "",
      year: "2024-25",
      type: "Report",
    },
    {
      title: "Annual Report 2023-24",
      description:
        "A comprehensive overview of our activities and achievements in 2023-24.",
      link: "https://drive.google.com/file/d/1nVU4GJMA8aXNdfCBJvxtrIIwbLYQcZ4u/view?usp=drive_link",
      year: "2023-24",
      type: "Report",
    },
    {
      title: "Annual Report 2022-23",
      description:
        "Our financial performance for the fourth quarter of 2022-23.",
      link: "https://drive.google.com/file/d/10i5fZkw62ShsChlrJoPGbJCPYKuCTcN0/view?usp=drive_link",
      year: "2022-23",
      type: "Report",
    },
    {
      title: "Annual Report 2021-22",
      description: "An analysis of the impact of our programs in 2021-22.",
      link: "https://drive.google.com/file/d/1iMW3eXGSjYmp8yKzPnzftoTCOgQ_Mrtb/view?usp=drive_link",
      year: "2021-22",
      type: "Report",
    },
    {
      title: "Annual Report 2020-21",
      description:
        "A comprehensive overview of our activities and achievements in 2020-21.",
      link: "https://drive.google.com/file/d/1xxiHSrDqDPrzN2kMP0JQnovcvVrQ9fmU/view?usp=drive_link",
      year: "2020-21",
      type: "Report",
    },
    {
      title: "Registration Documents",
      description:
        "Official registration and incorporation documents of the organization.",
      link: "https://drive.google.com/drive/folders/1i576O-p5Dpfx1Ksqlk-_lY6uFNNHCtl3?usp=sharing",
      year: "",
      type: "registration",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "annual":
        return "bg-blue-100 text-blue-800";
      case "impact":
        return "bg-green-100 text-green-800";
      case "financial":
        return "bg-purple-100 text-purple-800";
      case "registration":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleReportClick = (link: string) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <section className="text-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 rounded-none shadow-md w-full mx-auto">
      {/* Icon */}
      <div className="flex justify-center mb-4 sm:mb-6">
        <Image
          src={"/claylab assets/aboutUs/documentIcon.png"}
          height={80}
          width={60}
          alt={"document icon"}
          className="h-16 w-auto sm:h-20 md:h-24  "
        />
      </div>

      <Heading text="REPORTS & DOCUMENTATION" />

      {/* Description */}
      <p className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed">
        We prioritize transparency as we believe it is crucial to foster trust
        and accountability in our actions and initiatives.
      </p>

      {/* Reports Flex Container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 mx-auto">
        {/* OLD Format Report Cards   */}
        {/* {reports.map((report, index) => (
          <div 
            key={index} 
            className={`bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-72 lg:w-80 ${
              report.link ? 'cursor-pointer hover:border-green-300' : 'opacity-75'
            }`}
            onClick={() => handleReportClick(report.link)}
          >
            
            <div className="flex justify-between items-start mb-3">
              <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(report.type)}`}>
                {report.type}
              </span>
              {report.year && (
                <span className="text-xs text-gray-500 font-medium">
                  {report.year}
                </span>
              )}
            </div>
            
            
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg 
                  className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>

         
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-2 line-clamp-2">
              {report.title}
            </h3>

            
            
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">  
              {report.description}
            </p>

         
            <div className="flex justify-center">
              {report.link ? (
                <div className="flex items-center text-green-600 text-xs sm:text-sm font-medium">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View Document
                </div>
              ) : (
                <span className="text-amber-600 text-xs sm:text-sm font-medium">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))} */}

        {reports.map((report, index) => (
          <div
            key={index}
            className={`bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-2xl transition-all duration-300 w-full sm:w-80 lg:w-96 ${
              report.link
                ? "cursor-pointer hover:border-green-300 hover:border-4"
                : "opacity-75"
            }`}
            onClick={() => handleReportClick(report.link)}
          >
            {/* Report Type Badge */}
            <div className="flex justify-between items-start mb-4">
              <span
                className={`px-3 py-1.5 rounded-full text-sm font-medium capitalize ${getTypeColor(
                  report.type
                )}`}
              >
                {report.type}
              </span>
              {report.year && (
                <span className="text-sm text-gray-500 font-medium">
                  {report.year}
                </span>
              )}
            </div>

            {/* Document Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-8 h-8 sm:w-20 sm:h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-2 sm:w-10 sm:h-10 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>

            {/* Report Title */}
            <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-3 line-clamp-2">
              {report.title}
            </h3>

            {/* Report Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
              {/* {report.description} */}
            </p>

            {/* Action Button/Status */}
            <div className="flex justify-center">
              {report.link ? (
                <div className="flex items-center text-green-600 text-sm sm:text-base font-medium">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Document
                </div>
              ) : (
                <span className="text-amber-600 text-sm sm:text-base font-medium">
                  Coming Soon
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* More Reports Button */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="px-6 sm:px-8 lg:px-12 py-2.5 sm:py-3 text-white font-medium rounded-full border border-white bg-gradient-to-r from-green-800 to-green-400 shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-300 transition-all text-sm sm:text-base">
          <p className="text-black text-xs sm:text-lg font-bold">
            Last update :{" "}
            {new Date().toLocaleDateString("en-IN", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </button>
      </div>
    </section>
  );
}

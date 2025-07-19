




// 95% Correct
// import { Mail } from "lucide-react";

// const JoinMovement = () => {
//   return (
//     <section className="flex justify-center py-[64px]">
//       <div
//         className="w-[1400] h-[467px] bg-gradient-to-r from-[#ECF2EC] to-[#BAD3BB] rounded-[16px] flex flex-col items-center justify-center text-center"
//       >
//         <Mail className="w-[48px] h-[48px] text-green-800" />

//         <h2 className="text-[40px] font-semibold mt-[10px]">
//           Join the Movement
//         </h2>

//         <form className="mt-[32px] flex flex-col sm:flex-row gap-[16px] items-center justify-center">
//           <input
//             type="email"
//             placeholder="Your email address"
//             className="rounded-full px-[24px] py-[16px] w-[360px] text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <button
//             type="submit"
//             className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//           >
//             Subscribe →
//           </button>
//         </form>

//         <p className="text-[14px] text-black mt-[32px] leading-relaxed">
//           We respect your inbox—unsubscribe anytime. Join 1,200+ supporters.
//           <br />
//           Make an Impact from Your Inbox
//         </p>
//       </div>
//     </section>
//   );
// };

// export default JoinMovement;




import { Mail } from "lucide-react";

const JoinMovement = () => {
  return (
    <section className="flex justify-center py-[64px] px-4 sm:px-6 md:px-8">
      <div
        className="w-full max-w-[1400px] h-auto min-h-[467px] bg-gradient-to-r from-[#ECF2EC] to-[#BAD3BB] rounded-[16px] flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12"
      >
        <Mail className="w-[48px] h-[48px] text-green-800" />

        <h2 className="text-[32px] sm:text-[40px] font-semibold mt-[10px]">
          Join the Movement
        </h2>

        <form className="mt-[32px] flex flex-col sm:flex-row gap-[16px] items-center justify-center w-full max-w-md sm:max-w-none">
          <input
            type="email"
            placeholder="Your email address"
            className="rounded-full px-[24px] py-[16px] w-full sm:w-[360px] text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
          >
            Subscribe →
          </button>
        </form>

        <p className="text-[14px] text-black mt-[32px] leading-relaxed">
          We respect your inbox—unsubscribe anytime. Join 1,200+ supporters.
          <br />
          Make an Impact from Your Inbox
        </p>
      </div>
    </section>
  );
};

export default JoinMovement;
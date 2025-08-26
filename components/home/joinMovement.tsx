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

// import { Mail } from "lucide-react";

// const JoinMovement = () => {
//   return (
//     <section className="flex justify-center py-[64px] px-4 sm:px-6 md:px-8">
//       <div className="w-full max-w-[1400px] h-auto min-h-[467px] bg-gradient-to-r from-[#ECF2EC] to-[#BAD3BB] rounded-[16px] flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12">
//         <Mail className="w-[48px] h-[48px] text-green-800" />

//         <h2 className="text-[32px] sm:text-[40px] font-semibold mt-[10px]">
//           Join the Movement
//         </h2>

//         <button
//           type="submit"
//           className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//         >
//           Want to Be a Partner
//         </button>
//         <button
//           type="submit"
//           className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//         >
//           Donate
//         </button>

//         <button
//           type="submit"
//           className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//         >
//           Apply Mentorship
//         </button>

// <form className="w-full md:w-2/5 flex flex-col gap-6">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//         />
//         <input
//           type="email"
//           placeholder="Your E-mail"
//           className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//         />
//         <textarea
//           placeholder="Share your thoughts"
//           className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800 resize-none"
//           rows={2}
//         />

//         <button
//           type="submit"
//           className="mt-4 bg-[#2f5e37] text-white text-sm py-2.5 rounded-lg hover:bg-[#264e2f] transition-all"
//         >
//           Apply mentorship
//         </button>
//       </form>

//       </div>
//     </section>
//   );
// };

// export default JoinMovement;










// working -- code
// import { Mail } from "lucide-react";
// import { useState } from "react";

// const JoinMovement = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleApplyMentorship = () => {
//     setShowForm(true);
//   };

//   const handleOtherButtons = () => {
//     setShowForm(false);
//   };

//   return (
//     <section className="flex justify-center py-[64px] px-4 sm:px-6 md:px-8">
//       <div className="w-full max-w-[1400px] h-auto min-h-[467px] bg-gradient-to-r from-[#ECF2EC] to-[#BAD3BB] rounded-[16px] flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12">
//         <Mail className="w-[48px] h-[48px] text-green-800" />

//         <h2 className="text-[32px] sm:text-[40px] font-semibold mt-[10px] mb-8">
//           Join the Movement
//         </h2>

//         {/* Buttons in one line */}
//         <div className="flex flex-col sm:flex-row gap-4 mb-8">
//           <button
//             onClick={handleOtherButtons}
//             className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//           >
//             Want to Be a Partner
//           </button>
//           <button
//             onClick={handleApplyMentorship}
//             className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//           >
//             Apply Mentorship
//           </button>
//           <button
//             onClick={handleOtherButtons}
//             className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//           >
//             Donate To Support Us
//           </button>
//         </div>

//         {/* Form - only visible when Apply Mentorship is clicked */}
//         {showForm && (
//           <form className="w-full md:w-2/5 flex flex-col gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//             />
//             <input
//               type="email"
//               placeholder="Your E-mail"
//               className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//             />
//             <textarea
//               placeholder="Share your thoughts"
//               className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800 resize-none"
//               rows={2}
//             />

//             <button
//               type="submit"
//               className="mt-4 bg-[#2f5e37] text-white text-sm py-2.5 rounded-lg hover:bg-[#264e2f] transition-all"
//             >
//               Apply mentorship
//             </button>
//           </form>
//         )}

//       </div>
//     </section>
//   );
// };
// export default JoinMovement;





// import { Mail } from "lucide-react";
// import { useState } from "react";
// import { toast } from "react-hot-toast";

// const JoinMovement = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleApplyMentorship = () => {
//     setShowForm(true);
//   };

//   const handleOtherButtons = () => {
//     setShowForm(false);
//   };

//   const formSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     toast.success('Form Submitted Successfully !');
//     // Handle form submission logic here
//   };

//   return (
//     <section className="flex justify-center py-[64px] px-4 sm:px-6 md:px-8">
//       <div className="w-full max-w-[1400px] h-auto min-h-[467px] bg-gradient-to-r from-[#ECF2EC] to-[#BAD3BB] rounded-[16px] flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12">
//         <Mail className="w-[48px] h-[48px] text-green-800" />

//         <h2 className="text-[32px] sm:text-[40px] font-semibold mt-[10px] mb-8">
//           Join the Movement
//         </h2>

//         {/* Buttons - hide other buttons when form is shown */}
//         {!showForm ? (
//           <div className="flex flex-col sm:flex-row gap-4 mb-8">
//             <button
//               onClick={handleOtherButtons}
//               className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//             >
//               Want to Be a Partner
//             </button>
//             <button
//               onClick={handleApplyMentorship}
//               className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//             >
//               Apply Mentorship
//             </button>
//             <button
//               onClick={handleOtherButtons}
//               className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
//             >
//               Donate To Support Us
//             </button>
//           </div>
//         ) : (
//           // Show only Apply Mentorship button when form is visible
//           <div className="flex gap-4 mb-8">
            
//             <button
//               className="bg-green-700 text-white px-[32px] py-[16px] rounded-full text-base cursor-default"
//             >
//               Apply Mentorship
//             </button>
//           </div>
//         )}

//         {/* Form - only visible when Apply Mentorship is clicked */}
//         {showForm && (
//           <form onSubmit={formSubmit} className="w-full md:w-2/5 flex flex-col gap-6">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//             />
//             <input
//               type="email"
//               placeholder="Your E-mail"
//               className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
//             />
//             <textarea
//               placeholder="Share your thoughts"
//               className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800 resize-none"
//               rows={2}
//             />
              
//             <button
//               type="submit"
//               className="px-[32px] py-[16px] rounded-full text-base  mt-4 bg-[#2f5e37] text-white hover:bg-[#264e2f] transition-all"
//             >
//               Apply mentorship
//             </button>
//             <button
//               onClick={() => setShowForm(false)}
//               className="bg-gray-500 hover:bg-gray-600 text-white px-[32px] py-[16px] rounded-full text-base transition"
//             >
//               Back
//             </button>

//           </form>
//         )}
        
//       </div>
//     </section>
//   );
// };

// export default JoinMovement;

'use client'
import { Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";


const JoinMovement = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    thoughts: ""
  });

  const handleApplyMentorship = () => {
    setShowForm(true);
  };

  const handleOtherButtons = () => {
    setShowForm(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.thoughts) {
      return toast.error('Please fill in all fields.');
    }
    
    // Clear all form fields
    setFormData({
      name: "",
      email: "",
      thoughts: ""
    });
    toast.success('Form Submitted Successfully !');
  };

  return (
    <section className="flex justify-center py-[64px] px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[1400px] h-auto min-h-[467px] bg-gradient-to-r from-[#ECF2EC] to-[#BAD3BB] rounded-[16px] flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-12">
        <Mail className="w-[48px] h-[48px] text-green-800" />

        <h2 className="text-[32px] sm:text-[40px] font-semibold mt-[10px] mb-8">
          Join the Movement
        </h2>

        {/* Buttons - hide other buttons when form is shown */}
        {!showForm ? (
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={handleOtherButtons}
              className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
            >
              Want to Be a Partner
            </button>
            <button
              onClick={handleApplyMentorship}
              className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
            >
              Apply Mentorship
            </button>
            <button
              onClick={handleOtherButtons}
              className="bg-green-700 hover:bg-green-800 text-white px-[32px] py-[16px] rounded-full text-base transition w-full sm:w-auto"
            >
              <Link href="/support">
                Donate To Support Us
              </Link>
            </button>
          </div>
        ) : (
          // Show only Apply Mentorship button when form is visible
          <div className="flex gap-4 mb-8">
            
            <button
              className="bg-green-700 text-white px-[32px] py-[16px] rounded-full text-base cursor-default"
            >
              Apply Mentorship
            </button>
          </div>
        )}

        {/* Form - only visible when Apply Mentorship is clicked */}
        {showForm && (
          <form onSubmit={formSubmit} className="w-full md:w-2/5 flex flex-col gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your E-mail"
              className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800"
            />
            <textarea
              name="thoughts"
              value={formData.thoughts}
              onChange={handleInputChange}
              placeholder="Share your thoughts"
              className="bg-transparent border-b border-green-600 focus:outline-none focus:border-green-800 text-sm py-2 placeholder:text-green-800 resize-none"
              rows={2}
            />
              
            <button
              type="submit"
              className="px-[32px] py-[16px] rounded-full text-base  mt-4 bg-[#2f5e37] text-white hover:bg-[#264e2f] transition-all"
            >
              Apply mentorship
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-[32px] py-[16px] rounded-full text-base transition"
            >
              Back
            </button>

          </form>
        )}
        
      </div>
    </section>
  );
};

export default JoinMovement;
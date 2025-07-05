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
    <div className="w-full flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-16 md:px-24 gap-8 md:gap-12 font-sans">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 pl-0 sm:pl-4 text-left relative mb-8 md:mb-0">
        <Image
          className="absolute top-0 z-0 w-32 h-32 sm:w-48 sm:h-48"
          src={"/claylab assets/general/circleGraphics.png"}
          height={200}
          width={200}
          alt={"bg image graphics"}
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl relative z-10 font-light leading-tight text-green-800 space-y-2">
          <div>
            Your <span className="italic font-semibold text-green-800">answers</span>
          </div>
          <div>to popular</div>
          <div>questions</div>
          <div className="mt-2 gap-2 flex flex-col">
            <p className="text-3xl sm:text-5xl font-normal">Apply now</p>
            <Image
              src={"/claylab assets/general/brushGraphics1.png"}
              height={8}
              width={180}
              className="max-w-xs sm:max-w-2xl mr-auto"
              alt={"underline"}
            />
          </div>
        </h1>
      </div>

      {/* Right Accordion FAQ Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 max-h-[60vh] sm:max-h-[75vh] overflow-y-auto pr-0 sm:pr-2">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#F4F8F5] p-2 px-3 rounded-xl shadow-sm text-[#23572A] cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-green-50 hover:shadow-md"
            onClick={() => toggleFAQ(i)}
          >
            <div className="text-base sm:text-lg md:text-xl font-semibold flex justify-between items-center">
              {faq.question}
              <span className="text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </div>
            {openIndex === i && (
              <p className="text-sm sm:text-base pt-3 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
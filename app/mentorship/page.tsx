"use client";

import React from "react";
import Hero from "@/components/mentorship/hero";
import MentorshipJourney from "@/components/mentorship/mentorshipJourney";
import MeetMentors from "@/components/mentorship/meetOurMentors";
import PastStories from "@/components/mentorship/pastStories";
import TestimonialsGrid from "@/components/mentorship/testimonials";
import MentorshipForm from "@/components/mentorship/applyMentorhipForm";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <MentorshipJourney />
      <MeetMentors />
      <PastStories />
      <TestimonialsGrid />
      <MentorshipForm />
    </div>
  );
}
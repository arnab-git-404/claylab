"use client";

import React from "react";
import Hero from "@/components/entrepreneurship/hero";
import WorkshopCard from "@/components/entrepreneurship/whatYouGet";
import Statistics from "@/components/entrepreneurship/statistics"
import Syllabus from "@/components/entrepreneurship/syllabus";
import Impact from "@/components/entrepreneurship/impact";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <WorkshopCard />
      <Statistics />
      <Syllabus />
      <Impact />

    </div>
  );
}
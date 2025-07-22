"use client";

import React from "react";
import Hero from "@/components/workshop/hero";
import TeamSection from "@/components/workshop/teamSection";
import Glimpses from "@/components/workshop/glimpse";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <TeamSection />
      <Glimpses />
    </div>
  );
}
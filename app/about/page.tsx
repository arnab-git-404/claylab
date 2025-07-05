"use client";

import React from "react";
import Hero from "@/components/about/hero";
import Claylab from "@/components/about/claylab";
import StatutoryInfo from "@/components/about/statutoryInformation";
import OurJourney from "@/components/about/ourJourney";
import ReportsSection from "@/components/about/reports";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <Claylab />
      {/* <OurTeam /> */}
      <StatutoryInfo />
      <OurJourney />
      <ReportsSection />
    </div>
  );
}
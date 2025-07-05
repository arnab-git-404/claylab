"use client";

import React from "react";
import Hero from "@/components/support/hero";
import TheImpact from "@/components/support/theImpact";
import FAQ from "@/components/support/faq";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <TheImpact />
      <FAQ />
    </div>
  );
}
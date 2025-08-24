
"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/support/hero";
import TheImpact from "@/components/support/theImpact";
import FAQ from "@/components/support/faq";
import CountingNo from "@/components/support/countingNo";
import WaysToSupportUs from "@/components/support/waysToSupportUs";


export default function Home() {

  return (
    <div className="flex flex-col max-w-screen bg-clay-light-hover gap-10">
      <Hero />
      <CountingNo />
      <WaysToSupportUs/>
      {/* <TheImpact /> */}
      <FAQ />
    </div>
  );
}





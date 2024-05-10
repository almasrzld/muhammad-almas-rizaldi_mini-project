"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const LogosSection = () => {
  return (
    <section className="bg-[#F7D3B3]">
      <div className="relative container">
        <Marquee
          className="flex items-center"
          autoFill
          loop={0}
          gradient
          gradientColor="rgb(247 211 179)"
          gradientWidth={200}
          speed={200}
        >
          <Image
            src="/images/hero-soccer-logo-1.png"
            alt="Liga Futsal Profesional Logo"
            width={400}
            height={400}
            className="object-contain mr-5 h-[200px] w-[200px] lg:h-[300px] lg:w-[400px]"
          />
          <Image
            src="/images/hero-soccer-logo-2.png"
            alt="PSSI Logo"
            width={200}
            height={400}
            className="object-contain mr-5 h-[200px] w-[140px] lg:h-[300px] lg:w-[200px]"
          />
          <Image
            src="/images/hero-soccer-logo-3.png"
            alt="Fifa Logo"
            width={220}
            height={500}
            className="object-contain mr-5 w-[200px] h-[140px] lg:h-[300px] lg:w-[220px]"
          />
          <Image
            src="/images/hero-soccer-logo-4.png"
            alt="AFC Logo"
            width={220}
            height={600}
            className="object-contain mr-5 w-[120px] h-[200px] lg:h-[300px] lg:w-[220px]"
          />
          <Image
            src="/images/hero-soccer-logo-5.png"
            alt="Fifa Logo"
            width={200}
            height={400}
            className="object-contain mr-5 w-[200px] h-[140px]  lg:h-[300px] lg:w-[200px]"
          />
        </Marquee>
      </div>
    </section>
  );
};

export default LogosSection;

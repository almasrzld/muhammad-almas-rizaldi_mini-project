import React from "react";
import BlurImage from "@/components/common/image-blur";
import AnimatedText from "@/components/common/animated-text";

const HeaderSection = () => {
  return (
    <section className="container h-[800px] grid justify-between grid-cols-1 lg:grid-cols-12">
      <div className="col-span-1 lg:col-span-5 flex justify-center gap-2 md:gap-5 flex-col">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-primary">
          Alcabris does <br />{" "}
          <span className="text-black">
            <AnimatedText />
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl">
          Clean and well-maintained fields located throughout Java. Reserve now
          before you run out of space!
        </p>
      </div>
      <div className="col-span-1 lg:col-span-7 justify-center md:justify-end flex">
        <div className="w-[300px] sm:w-[500px] md:w-[658px] relative h-full slide-from-right">
          <BlurImage src="/images/home-hero.png" alt="Hero image" contain />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;

"use client";

import React from "react";
import BlurImage from "@/components/common/image-blur";

const HomepageFeature = () => {
  return (
    <main>
      <section className="container h-[800px] grid justify-between grid-cols-12">
        <div className="col-span-5 flex justify-center gap-5 flex-col">
          <h1 className="text-6xl font-black text-primary">
            Alcabris does <br />{" "}
            <span className="text-black">futsal field rental</span>
          </h1>
          <p className="text-2xl">
            Clean and well-maintained fields located throughout Indonesia.
            Reserve now before you run out of space!
          </p>
        </div>
        <div className="col-span-7 justify-end flex">
          <div className="w-[658px] relative h-full">
            <BlurImage src="/images/home-hero.png" alt="Hero image" contain />
          </div>
        </div>
      </section>
      <section className="bg-[#E56E00]/30 ">
        <div className="container flex items-center justify-center">
          <div className="h-[107.27px] w-full relative">
            <BlurImage
              src="/images/hero-soccer-logo-1.png"
              alt="Hero Soccer Logo 1"
              contain
            />
          </div>
          <div className="h-[200px] w-full relative">
            <BlurImage
              src="/images/hero-soccer-logo-2.png"
              alt="Hero Soccer Logo 1"
              contain
            />
          </div>
          <div className="h-[200px] w-full relative">
            <BlurImage
              src="/images/hero-soccer-logo-3.png"
              alt="Hero Soccer Logo 1"
              contain
            />
          </div>
          <div className="h-[88.81px] w-full relative">
            <BlurImage
              src="/images/hero-soccer-logo-4.png"
              alt="Hero Soccer Logo 1"
              contain
            />
          </div>
          <div className="h-[135px] w-full relative">
            <BlurImage
              src="/images/hero-soccer-logo-5.png"
              alt="Hero Soccer Logo 1"
              contain
            />
          </div>
        </div>
      </section>
      <section className="h-40"></section>
      <section className="bg-[#E56E00]/30 rounded-b-[100px] py-20 mb-10">
        <div className="container flex items-center flex-col gap-10">
          <h2 className="text-6xl text-center w-8/12 font-bold leading-tight">
            Well maintained <span className="text-primary">field.</span> Modern{" "}
            <span className="text-primary">technology.</span> Fair{" "}
            <span className="text-primary">referee.</span>
          </h2>
          <p className="text-2xl font-medium text-center">
            Alcabris Soccer is a futsal field rental website with full services.
            With local professionals and advanced technology, we provide
            services ranging from recording, rental, refereeing, to maintenance.
            Additionally, we offer industry-leading financial protection that
            eliminates your risk with guaranteed rental payments of 50% of the
            rental price.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomepageFeature;

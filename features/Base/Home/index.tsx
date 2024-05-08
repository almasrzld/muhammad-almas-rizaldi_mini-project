"use client";

import React from "react";
import BlurImage from "@/components/common/image-blur";
import Image from "next/image";
import Link from "next/link";

const HomepageFeature = () => {
  const BIODATA_ITEMS = [
    {
      title: "Usefull Links",
      links: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Field",
          path: "/field",
        },
        {
          name: "About",
          path: "/about",
        },
      ],
    },
    {
      title: "Our Services",
      links: [
        {
          name: "Referee",
          path: "/",
        },
        {
          name: "Market",
          path: "/",
        },
        {
          name: "Var",
          path: "/",
        },
        {
          name: "Tournament",
          path: "/",
        },
      ],
    },
  ];

  return (
    <main>
      <section className="container h-[800px] grid justify-between grid-cols-12">
        <div className="col-span-5 flex justify-center gap-5 flex-col">
          <h1 className="text-6xl font-black text-primary">
            Alcabris does <br />{" "}
            <span className="text-black">futsal field rental</span>
          </h1>
          <p className="text-2xl">
            Clean and well-maintained fields located throughout Java. Reserve
            now before you run out of space!
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
      <section className="bg-[#E56E00]/30 rounded-t-[100px]">
        <div className="container py-16 grid grid-cols-6 gap-10">
          <div className="col-span-2">
            <Image
              src="/images/logo.png"
              alt="Alcabris Logo"
              width={140}
              height={140}
            />
            <p className="text-lg mt-2 mb-5">
              Jl. Slamet Riyadi No. 6 Rembang, Jawa Tengah Indonesia
            </p>
            <p className="font-semibold text-lg">
              Phone:{" "}
              <a
                href="tel:+62 812 1519 9600"
                rel="noreferrer"
                className="font-normal"
              >
                +62 812 1519 9600
              </a>
            </p>
            <p className="font-semibold text-lg">
              Email:{" "}
              <a
                href="mailto:almasrzld@gmail.com"
                rel="noreferrer"
                className="font-normal"
              >
                almasrzld@gmail.com
              </a>
            </p>
          </div>
          {BIODATA_ITEMS.map((item, index) => (
            <div key={index}>
              <h3 className="font-bold text-2xl">{item.title}</h3>
              <ul className="mt-3 space-y-3">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path as any}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2">
            <h3 className="font-bold text-2xl">Our Social Media</h3>
            <p className="text-lg mt-3">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex items-center gap-5 mt-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <a
                  key={index}
                  href="#"
                  className="h-8 w-8 bg-blue-500 rounded-full"
                ></a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomepageFeature;

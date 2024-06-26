"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TopIcon from "@/public/icons";

const Footer = () => {
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
    <footer>
      <div className="bg-[#E56E00]/30 rounded-t-[60px] md:rounded-t-[100px]">
        <div className="container py-16 grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-10">
          <div className="col-span-2">
            <Image
              src="/images/logo.png"
              alt="Alcabris Logo"
              width={140}
              height={140}
            />
            <p className="text-sm sm:text-base lg:text-lg mt-2 mb-2 md:mb-5">
              Jl. Slamet Riyadi No. 6 Rembang, Jawa Tengah Indonesia
            </p>
            <p className="font-semibold text-sm sm:text-base lg:text-lg">
              Phone:{" "}
              <a
                href="tel:+62 812 1519 9600"
                rel="noreferrer"
                className="font-normal"
              >
                +62 812 1519 9600
              </a>
            </p>
            <p className="font-semibold text-sm sm:text-base lg:text-lg">
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
              <h3 className="font-bold text-base sm:text-xl lg:text-2xl">
                {item.title}
              </h3>
              <ul className="mt-3 space-y-2 md:space-y-3">
                {item.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path as any}
                      className="text-sm sm:text-base lg:text-lg font-medium hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2">
            <h3 className="font-bold text-base sm:text-xl lg:text-2xl">
              Our Social Media
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mt-3">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex items-center gap-5 mt-5">
              {Array.from({ length: 4 }).map((_, index) => (
                <a
                  key={index}
                  href="#"
                  className="md:h-8 md:w-8 w-4 h-4 bg-blue-500 rounded-full"
                ></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E56E00] py-6">
        <div className="container flex md:flex-row flex-col justify-between items-center gap-2 md:gap-0">
          <p className="text-white text-sm sm:text-base lg:text-xl text-center md:text-start">
            © Copyright <span className="font-bold">AlcaBris.</span> All Rights
            Reserved
          </p>
          <button
            className="flex justify-center items-center gap-2"
            onClick={() => {
              if (typeof window !== "undefined")
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <p className="text-white text-sm sm:text-base lg:text-xl hover:text-white/80 transition-opacity">
              Scroll To Top
            </p>
            <TopIcon />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

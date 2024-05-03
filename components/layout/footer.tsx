import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const FOOTER_ITEMS = [
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
    <footer className="bg-[#E56E00]/30 rounded-t-[100px]">
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
        {FOOTER_ITEMS.map((item, index) => (
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
    </footer>
  );
};

export default Footer;

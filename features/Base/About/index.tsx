import React from "react";

import BlurImage from "@/components/common/image-blur";

const AboutFeature = () => {
  return (
    <main className="my-10 md:my-20">
      <div className="container">
        <section className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative h-[400px] md:h-[642px]">
            <BlurImage src="/images/about-image.png" alt="About" contain />
          </div>
          <div className="space-y-1 md:space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              About Us
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-4xl  font-bold">
              Rentals <span className="text-[#E56E00]">& Tournaments</span>
            </h2>
            <p className="text-[#4C4C4C] text-sm sm:text-base lg:text-xl">
              Welcome to Alcabris Soccer! We are the ultimate destination for
              futsal field rentals and exciting tournaments. Our professional
              team is ready to provide the best service, from easy booking
              processes to assistance during events. Experience quality gameplay
              with modern facilities and challenging competitions. Join our
              community and enjoy unforgettable moments on our futsal fields!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutFeature;

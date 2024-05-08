import React from "react";
import TopIcon from "@/public/icons";

const Footer = () => {
  return (
    <footer className="bg-[#E56E00] py-[34px]">
      <div className="container flex justify-between items-center">
        <p className="text-white text-xl">
          © Copyright <span className="font-bold">AlcaBris.</span> All Rights
          Reserved
        </p>
        <div className="flex justify-center items-center gap-2">
          <p className="text-white text-xl">Scroll To Top</p>
          <TopIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

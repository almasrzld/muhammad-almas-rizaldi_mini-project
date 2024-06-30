import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import TranslateAction from "@/components/layout/translate-action";
import AOSInitializer from "@/lib/aos";

const BaseLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <AOSInitializer />
      <Navbar />
      <div className="">{children}</div>
      <Footer />
      <TranslateAction />
    </>
  );
};

export default BaseLayout;

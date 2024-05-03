import React from "react";
import HomepageFeature from "@/features/Base/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alcabris",
};

const Homepage = () => {
  return <HomepageFeature />;
};

export default Homepage;

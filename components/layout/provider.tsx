"use client";
import React from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "../ui/sonner";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NextTopLoader showSpinner={false} color="#E56E00" />
      {children}
      <Toaster />
    </>
  );
};

export default Provider;

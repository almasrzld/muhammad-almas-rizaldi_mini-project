import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Provider from "@/components/layout/provider";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Alcabris Field",
    template: "%s | Alcabris Field",
  },
  description: "Alcabris Field",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

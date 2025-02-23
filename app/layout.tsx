import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google';
import "./globals.css";
import React from "react";
import CustomCursor from "@/app/CustomCursor";

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400','700']
});

export const metadata: Metadata = {
  title: "ZenFolio",
  description: "ZenFolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} cursor-none  antialiased bg-noise bg-white dark:bg-black dark:text-white text-white dark:bg-opacity-100  bg-opacity-20  w-screen h-screen`}
      >
        {/*<CustomCursor />*/}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

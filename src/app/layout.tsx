import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import React from "react";

// @ts-ignore
const vietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heartful Tower",
  description:
    "Selamat datang di Heartful Tower Bekasi,\n" +
    "Apartemen dengan harga terbaik.\n" +
    "Oleh Developer Jepang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vietnamPro.className}>{children}</body>
    </html>
  );
}

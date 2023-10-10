import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}

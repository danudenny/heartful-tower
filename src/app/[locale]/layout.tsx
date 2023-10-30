import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import React, { ReactNode } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

// @ts-ignore
const vietnamPro = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const locales = ["id", "en", "jp"];

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: "Heartful Tower",
  description:
    "Selamat datang di Heartful Tower Bekasi,\n" +
    "Apartemen dengan harga terbaik.\n" +
    "Oleh Developer Jepang",
  keywords: [
    "apartemen",
    "bekasi",
    "heartful",
    "tower",
    "jepang",
    "japanese developer",
    "the desire to thrive",
    "apartemen bekasi",
    "apartemen heartful tower",
    "apartemen heartful tower bekasi",
    "apartemen heartful tower jepang",
    "perumnas",
    "iida group",
    "iida sangyo",
    "iida",
  ],
};

// @ts-ignore
export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  const messages = await getMessages(locale);
  return (
    <html lang="en">
      <body className={vietnamPro.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import axios from 'axios';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { Be_Vietnam_Pro, Space_Grotesk } from 'next/font/google';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import './globals.css';

// @ts-ignore
const vietnamPro = Be_Vietnam_Pro({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
});

const space_grotesk = Space_Grotesk({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const locales = ['id', 'en', 'jp'];

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

async function getTranslates(locale: string): Promise<any> {
    try {
        const result = await axios.get(
            'https://admin.heartfultower.com/api/translations?populate=*'
        );

        // destructuring data
        const { indonesia, japan, english } = result.data.data[0].attributes;

        if (locale === 'id') {
            return indonesia;
        } else if (locale === 'en') {
            return english;
        } else if (locale === 'jp') {
            return japan;
        }

        return result.data.data[0].attributes;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function getMessages(locale: string) {
    try {
        return await getTranslates(locale);
    } catch (error) {
        console.error(error);
        notFound();
    }
}

export const metadata: Metadata = {
    title: 'Heartful Tower',
    description:
        'Selamat datang di Heartful Tower Bekasi,\n' +
        'Apartemen dengan harga terbaik.\n' +
        'Oleh Developer Jepang',
    keywords: [
        'apartemen',
        'bekasi',
        'heartful',
        'tower',
        'jepang',
        'japanese developer',
        'the desire to thrive',
        'apartemen bekasi',
        'apartemen heartful tower',
        'apartemen heartful tower bekasi',
        'apartemen heartful tower jepang',
        'perumnas',
        'iida group',
        'iida sangyo',
        'iida',
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

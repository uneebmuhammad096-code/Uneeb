import type {Metadata, Viewport} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import Navigation from "@/components/home/navigation";
import Footer from "@/components/footer/Footer";
import {siteUrl} from "@/lib/siteConfig";
import React from "react";

const outfit = Outfit({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-outfit",
});

const siteConfig = {
    title: "Muhammad Uneeb | Creative Web Designer & Developer",
    description: "Creative web designer and WordPress developer Muhammad Uneeb builds responsive Elementor websites from Figma designs and improves on-page SEO.",
    author: "Muhammad Uneeb",
    url: siteUrl,
    ogImage: "/og-image.png",
};

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    verification: {
        google: "r9OxUuDVUNa2JTBhcICAMSBHOPXHLzgBrwtduN5YAxs",
    },
    title: {
        default: siteConfig.title,
        template: `%s | Muhammad Uneeb`,
    },
    description: siteConfig.description,
    authors: [{name: siteConfig.author, url: siteConfig.url}],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: "Muhammad Uneeb Portfolio",
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Muhammad Uneeb - Creative Web Designer and Developer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/favicon.svg",
        shortcut: "/favicon.svg",
        apple: "/apple-icon.png",
    },
    alternates: {
        canonical: "/",
    },
    category: "technology",
};

export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "white"},
        {media: "(prefers-color-scheme: dark)", color: "black"},
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        <Providers>
            <Navigation/>
            <main>{children}</main>
            <Footer/>
        </Providers>
        </body>
        </html>
    );
}
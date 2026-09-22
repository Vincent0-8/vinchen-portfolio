import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import AosProvider from "@/components/providers/AosProvider";
import React from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // smoother font load
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vincentchenn.com"),
  title: "Vincent Chen | Full-stack Web Engineer",
  description:
    "Software engineer with hands-on experience in full-stack MERN development, specializing in building clean and performant web applications with React, TypeScript, Express, and MongoDB.",
  keywords: [
    "Vincent Chen",
    "Full-stack Web Engineer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
    "MERN Stack",
    "Tailwind CSS",
  ],
  authors: [{ name: "Vincent Chen" }],
  creator: "Vincent Chen",
  alternates: {
    canonical: "https://vincentchenn.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vincentchenn.com",
    title: "Vincent Chen | Full-stack Web Engineer",
    description:
      "Software engineer with hands-on experience in full-stack MERN development, specializing in building clean and performant web applications with React, TypeScript, Express, and MongoDB.",
    siteName: "Vincent Chen Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vincent Chen | Full-stack Web Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vincent Chen | Full-stack Web Engineer",
    description:
      "Software engineer with hands-on experience in full-stack MERN development, specializing in building clean and performant web applications with React, TypeScript, Express, and MongoDB.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vincent Chen",
    url: "https://vincentchenn.com",
    jobTitle: "Full-stack Web Engineer",
    sameAs: [
      "https://github.com/Vincent0-8",
      "https://www.linkedin.com/in/vincent-chenn/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Full-stack Web Development",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              history.scrollRestoration = "manual";
              window.scrollTo(0, 0);
              console.log(
                "%cVincent Chen | Full-stack Web Engineer\\n%cDesigned and developed with Next.js, TypeScript & Tailwind CSS.\\nContact: me@vincentchenn.com",
                "color: #6c63ff; font-weight: bold; font-size: 14px;",
                "color: #6b7280; font-size: 12px;"
              );
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <AosProvider>
          <Navbar />
          {children}
          <Footer />
        </AosProvider>
      </body>
    </html>
  );
}


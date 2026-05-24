import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://bepel.in"),

  title: "Bepel | Creative Builders",

  description:
    "Bepel official website. Creative builders crafting innovative products and experiences.",

  keywords: [
    "Bepel",
    "bepl",
    "beepel",
    "Bepel official",
    "Creative Builders",
  ],

  openGraph: {
    type: "website",
    url: "https://bepel.in",
    siteName: "Bepel",

    title: "Bepel | Creative Builders",

    description:
      "Creative builders crafting innovative products and experiences.",

    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bepel",
      },
    ],
  },

  icons: {
    icon: "/favicon.svg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bepel",
              url: "https://bepel.in",
              logo: "https://bepel.in/favicon.svg",
              description: "Creative Builders",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}

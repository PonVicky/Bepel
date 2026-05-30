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

  title: {
    default: "Bepel — Independent Product Studio",
    template: "%s | Bepel",
  },

  description:
    "Bepel is an independent product studio. We build useful software, AI tools, and digital products for real-world problems.",

  keywords: [
    "Bepel",
    "bepel.in",
    "independent product studio",
    "SaaS",
    "AI tools",
    "software products",
    "web applications",
    "Stroky",
    "product studio",
    "build in public",
  ],

  alternates: {
    canonical: "https://bepel.in",
  },

  openGraph: {
    type: "website",
    url: "https://bepel.in",
    siteName: "Bepel",
    title: "Bepel — Independent Product Studio",
    description:
      "We build useful software, AI tools, and digital products for real-world problems.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Bepel — Independent Product Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bepel — Independent Product Studio",
    description:
      "We build useful software, AI tools, and digital products for real-world problems.",
    images: ["/og.png"],
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
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bepel.in/#organization",
                  name: "Bepel",
                  url: "https://bepel.in",
                  logo: "https://bepel.in/favicon.svg",
                  description:
                    "Independent product studio building useful software, AI tools, and digital products.",
                  foundingLocation: "Madurai, India",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bepel.in/#website",
                  name: "Bepel",
                  url: "https://bepel.in",
                  publisher: { "@id": "https://bepel.in/#organization" },
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}

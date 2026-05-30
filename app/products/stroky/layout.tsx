import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stroky — Typing Platform",
  description:
    "Stroky is a minimal typing platform focused on speed, rhythm, and consistency. Practice typing tests with real-time WPM and accuracy tracking.",
  alternates: {
    canonical: "https://bepel.in/products/stroky",
  },
  openGraph: {
    type: "website",
    url: "https://bepel.in/products/stroky",
    title: "Stroky — Typing Platform by Bepel",
    description:
      "Stroky is a minimal typing platform focused on speed, rhythm, and consistency. Practice typing tests with real-time WPM and accuracy tracking.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Stroky Typing Platform by Bepel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stroky — Typing Platform by Bepel",
    description:
      "Stroky is a minimal typing platform focused on speed, rhythm, and consistency. Practice typing tests with real-time WPM and accuracy tracking.",
    images: ["/og.png"],
  },
};

export default function StrokyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Stroky",
            description:
              "A minimal typing platform focused on speed, rhythm, and consistency.",
            url: "https://bepel.in/products/stroky",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            author: {
              "@type": "Organization",
              name: "Bepel",
              url: "https://bepel.in",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

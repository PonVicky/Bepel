import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bepel is an independent product studio — not an agency, not a freelance portfolio. Learn why it was built and how we approach building software products.",
  alternates: {
    canonical: "https://bepel.in/about",
  },
  openGraph: {
    type: "website",
    url: "https://bepel.in/about",
    title: "About Bepel — Independent Product Studio",
    description:
      "Bepel is an independent product studio — not an agency, not a freelance portfolio. Learn why it was built and how we approach building software products.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "About Bepel — Independent Product Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bepel — Independent Product Studio",
    description:
      "Bepel is an independent product studio — not an agency, not a freelance portfolio. Learn why it was built and how we approach building software products.",
    images: ["/og.png"],
  },
};

export default function AboutLayout({
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
            "@type": "AboutPage",
            name: "About Bepel",
            description:
              "Bepel is an independent product studio building useful software, AI tools, and digital products.",
            url: "https://bepel.in/about",
            isPartOf: {
              "@type": "WebSite",
              name: "Bepel",
              url: "https://bepel.in",
            },
          }),
        }}
      />
      {children}
    </>
  );
}

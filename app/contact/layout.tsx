import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bepel. Open to product feedback, collaboration, partnerships, and press inquiries. Replies within 48 hours.",
  alternates: {
    canonical: "https://bepel.in/contact",
  },
  openGraph: {
    type: "website",
    url: "https://bepel.in/contact",
    title: "Contact — Bepel",
    description:
      "Get in touch with Bepel. Open to product feedback, collaboration, partnerships, and press inquiries. Replies within 48 hours.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Contact Bepel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Bepel",
    description:
      "Get in touch with Bepel. Open to product feedback, collaboration, partnerships, and press inquiries. Replies within 48 hours.",
    images: ["/og.png"],
  },
};

export default function ContactLayout({
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
            "@type": "ContactPage",
            name: "Contact Bepel",
            description:
              "Get in touch with Bepel — open to product feedback, collaboration, partnerships, and press.",
            url: "https://bepel.in/contact",
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

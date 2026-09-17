import type { Metadata } from "next";
import { Onest, Playfair_Display } from "next/font/google";
import "./globals.css";
import { generateStructuredData, siteConfig } from "@/lib/schema";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  display: "swap",
});


export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://fincia-demo.themetechmount.com"),
  alternates: {
    canonical: "/home-1/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 414,
        height: 430,
        alt: "Finance Consulting WordPress Theme",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/02/cropped-512x512-png-32x32.png",
    apple: "https://fincia-demo.themetechmount.com/wp-content/uploads/2026/02/cropped-512x512-png-180x180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { financialServiceSchema, faqSchema } = generateStructuredData();

  return (
    <html lang="en-US" className={`scroll-smooth ${onest.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(financialServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased text-[#6c6c6c] bg-white selection:bg-[#c8f8a9] selection:text-[#063633]">
        {children}
      </body>
    </html>
  );
}

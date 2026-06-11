import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ghana National Council | Connecting Ghanaians. Empowering Leaders.",
  description:
    "The Ghana National Council (GNC) unites Ghanaian students and community members, promotes Ghanaian culture and heritage, and fosters leadership development and professional networks in Chicago.",
  keywords: [
    "Ghana National Council",
    "GNC",
    "GNC Chicago",
    "Ghanaian community Chicago",
    "Ghana students",
    "African cultural organization",
    "Ghanaian culture",
    "Ghana diaspora",
  ],
  authors: [{ name: "Ghana National Council" }],
  openGraph: {
    title: "Ghana National Council | Connecting Ghanaians. Empowering Leaders.",
    description:
      "Unite with the Ghanaian community. Join GNC to celebrate culture, grow your network, and create lasting impact.",
    type: "website",
    locale: "en_US",
    siteName: "Ghana National Council",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana National Council",
    description: "Connecting Ghanaians. Empowering Leaders. Building Community.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}

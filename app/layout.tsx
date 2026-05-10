import type { Metadata } from "next";
import { Lavishly_Yours, Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

const lavishlyYours = Lavishly_Yours({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lavishly-yours",
  display: "swap",
});

export const metadata: Metadata = {
  title: "sandra almanza web page",
  description:
    "Community operations for technical ecosystems — onboarding, documentation, and content that keeps people engaged.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${lavishlyYours.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}

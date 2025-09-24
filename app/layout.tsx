import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.delightfulbean.com"),
  title: {
    default: "Delightful Bean Coffee Cart",
    template: "%s | Delightful Bean",
  },
  description:
    "Delightful Bean Coffee Cart serves Tampa Bay events with luxury espresso bars, seasonal menus, and bilingual baristas.",
  applicationName: "Delightful Bean Coffee Cart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-cream text-coffee">{children}</body>
    </html>
  );
}

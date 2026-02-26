import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

import { SmoothScroll } from "@/components/smooth-scroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPACE CRAFT | Luxury Interior Design & Architectural Studio",
  description: "Transform your home with SPACE CRAFT. A leading interior design studio for modular kitchens, wardrobes, and curated home interiors. AI-powered design previews available.",
  keywords: ["SPACE CRAFT", "interior designer", "modular kitchen", "wardrobe design", "home interior", "AI interior design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased selection:bg-brand-gold/30 selection:text-brand-charcoal`}
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

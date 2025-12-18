import type { Metadata } from "next";
import { Merriweather_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import { MotionProvider } from "@/contexts/MotionContext";
import PageTransition from "@/components/transitions/PageTransition";


const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather-sans",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cloudstream Systems | Digital Solutions",
  description: "Transforming ideas into digital solutions. Website design and development agency committed to helping businesses establish a powerful online presence.",
  keywords: ["web design", "web development", "branding", "UI/UX", "digital agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweatherSans.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <MotionProvider>
          <SmoothScrollProvider>

            <Header />
            <main>
              <PageTransition>{children}</PageTransition>
            </main>
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}

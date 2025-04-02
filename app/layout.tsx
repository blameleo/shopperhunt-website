import type { Metadata } from "next";
import localFont from "next/font/local";
import { Hanken_Grotesk } from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const grotesk = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ShopperHunt",
  description: "Connecting shoppers to local stores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${grotesk.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

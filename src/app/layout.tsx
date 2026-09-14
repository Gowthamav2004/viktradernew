import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/vikram/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vikramtraders.online'),
  title: "Vikram Traders | High-End Sivakasi Fireworks",
  description: "Premium fireworks at direct factory prices.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Vikram Traders | High-End Sivakasi Fireworks",
    description: "Premium fireworks at direct factory prices.",
    url: 'https://www.vikramtraders.online',
    siteName: 'Vikram Traders',
    images: [
      {
        url: '/og-image.jpg',
        width: 600,
        height: 600,
        alt: 'Vikram Traders',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#050505]">
      <body className={`${inter.className} antialiased bg-[#050505] text-[#e5e5e5]`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

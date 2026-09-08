import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/vikram/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vikram Traders | High-End Sivakasi Fireworks",
  description: "Premium fireworks at direct factory prices.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={`${inter.className} antialiased text-[#e5e5e5]`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

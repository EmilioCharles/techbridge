// src/app/layout.tsx (updated)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // 👈 Import Navbar

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechBridge",
  description: "The next generation of ed-tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* 👈 Add Navbar here */}
        <main>{children}</main>
      </body>
    </html>
  );
}
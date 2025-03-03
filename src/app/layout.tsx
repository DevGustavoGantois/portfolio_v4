import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "./global/navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio GG WEBDESIGN",
  description: "Portfolio de serviços freelancing da GG WEBDESIGN para empresas e pessoas físicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${plusJakartaSans.variable} antialiased bg-gradient-to-b from-black via-[#040404] to-black`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

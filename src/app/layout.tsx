import type { Metadata } from "next";
import {  Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css" ;




const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zavier Lowe Web and Email Devloper",
  description: "Portfolio for Zavier Lowe",
};
<link rel="icon" href="/favicon.ico" sizes="any" />

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className}  antialiased bg-[#FAFAFA] `}
      >
        <div className="   "> 
      
        <main className=" ">
          
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}

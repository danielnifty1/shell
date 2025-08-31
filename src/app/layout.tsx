import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "./components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "Recruiting Without Limits",
       description: "Speed and Scale. We're building a new model for recruitment that combines revenue sharing, a marketing engine, a competitive broker community, and an AI-driven learning platform.",
       icons:"/images/shell.png",

   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        
        {children}

        <Footer />
        <ToastContainer />

      </body>
    </html>
  );
}

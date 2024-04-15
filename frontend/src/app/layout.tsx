import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"
import Head from "next/head";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elektronik",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full ">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className="w-full min-h-[calc(100vh-100px)] relative flex justify-center">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

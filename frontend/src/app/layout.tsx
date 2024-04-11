import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    <html lang="en" className=" ">
      <body className={inter.className}>
        <Navbar />
        <div className="grow w-full min-h-[calc(100vh-100px)] relative flex justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

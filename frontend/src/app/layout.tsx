import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Toaster } from "@/components/ui/sonner"
import { getNavigation } from "@/lib/api"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elektronik",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getNavigation()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar data={data} />
        <div className="w-full min-h-[calc(100vh-100px)] relative flex justify-center">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

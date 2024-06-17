import Providers from "@/components/Providers"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import AlertBar from "@/components/AlertBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elektronik",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.",
}

export const revalidate = 10

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/logo/logo-light.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={inter.className}>
        <AlertBar />
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  )
}

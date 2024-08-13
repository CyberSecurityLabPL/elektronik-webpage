import AlertBar from "@/components/AlertBar"
import Providers from "@/components/Providers"
import { getHotAlert } from "@/lib/api"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Elektronik",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.",
}

export const revalidate = 10

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getHotAlert()
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
      <body className={cn(poppins.className, "*:antialiased")}>
        {data && <AlertBar data={data} />}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

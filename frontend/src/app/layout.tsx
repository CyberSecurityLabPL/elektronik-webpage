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
    "ZSEiS Elektronik – technikum z przyszłością. Oferujemy kierunki techniczne: informatyka, programowanie, elektronika, mechanika pojazdowa i więcej. Dołącz do nas i rozwijaj pasje!",
}

export const dynamic = "force-dynamic"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const data = await getHotAlert()
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/assets/logo/logo_white.svg"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={cn(poppins.className, "*:antialiased")}>
        <Providers>
          <div className="mx-auto max-w-(--breakpoint-4xl)">
            {data && <AlertBar data={data} />}
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}

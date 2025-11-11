import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plan Lekcji - Elektronik",
  description: "Plan lekcji ZSEiS Elektronik",
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen flex-col">{children}</div>
}

export default Layout

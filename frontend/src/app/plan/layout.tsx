import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plan Lekcji - Elektronik",
  description: "Plan lekcji ZSEiS Elektronik",
}

const Layout = async ({ children }: { children: React.ReactNode }) => {
  try {
    return <div className="flex h-screen flex-col">{children}</div>
  } catch (error) {
    return <TimetableError />
  }
}

function TimetableError() {
  return (
    <div>
      <p>Nie udało się pobrać planu lekcji.</p>
      <Link href={"https://zseis.zgora.pl/plan"}>
        Skorzystaj ze starego planu lekcji
      </Link>
    </div>
  )
}

export default Layout

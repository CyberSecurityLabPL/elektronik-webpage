import Footer from "@/components/timetable/Footer"
import Headbar from "@/components/timetable/Headbar"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Plan Lekcji - Elektronik",
  description: "Plan lekcji ZSEiS Elektronik",
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Headbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

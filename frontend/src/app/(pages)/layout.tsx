import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <PageWrapper>
      <Navbar />
      <div className="relative flex min-h-[calc(100vh-128px)] w-full justify-center">
        {children}
      </div>

      <Footer />
    </PageWrapper>
  )
}

export default Layout

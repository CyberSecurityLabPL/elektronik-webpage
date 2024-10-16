import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import { getNavigation } from "@/lib/api"

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const { link_groups: navItems, ...additionalLinks } = await getNavigation()

  return (
    <PageWrapper>
      <Navbar navItems={navItems} additionalLinks={additionalLinks} />
      <div className="page-padding relative flex min-h-[calc(100vh-128px)] w-full flex-col justify-start">
        {children}
      </div>

      <Footer />
    </PageWrapper>
  )
}

export default Layout

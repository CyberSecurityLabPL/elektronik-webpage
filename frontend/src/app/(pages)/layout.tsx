import PageWrapper from "@/components/PageWrapper"

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <PageWrapper>{children}</PageWrapper>
}

export default Layout

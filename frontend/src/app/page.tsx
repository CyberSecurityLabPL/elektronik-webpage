import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Benefits from "@/components/landingpage/Benefits"
import Faq from "@/components/landingpage/Faq"
import Hero from "@/components/landingpage/Hero"
import Hero2 from "@/components/landingpage/Hero2"
import Map from "@/components/landingpage/Map"
import News from "@/components/landingpage/News"
import Overview from "@/components/landingpage/Overview"
import { getLandingPage, getNavigation } from "@/lib/api"
import type { Metadata, ResolvingMetadata } from "next"
import { revalidatePath } from "next/cache"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getLandingPage()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Home() {
  const data = await getLandingPage()
  const { link_groups: navItems } = await getNavigation()

  const Content = [Overview, Benefits, News, Map, Faq]

  return (
    <>
      <Navbar navItems={navItems} />
      <main className="flex w-full flex-col justify-center overflow-x-hidden">
        <header className="flex flex-col ">
          {/* <Hero data={data?.blocks[0]} /> */}
          <Hero2 />
          <div className="h-64 w-full bg-wave-transition bg-repeat-x"></div>
        </header>
        {/* Main content */}

        {Content.map((Component, index) => (
          <Component key={index} data={data?.blocks[index + 1]} />
        ))}
        <Footer />
      </main>
    </>
  )
}

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Benefits from "@/components/landingpage/Benefits"
import Faq from "@/components/landingpage/Faq"
import Hero from "@/components/landingpage/Hero"
import Map from "@/components/landingpage/Map"
import News from "@/components/landingpage/News"
import Overview from "@/components/landingpage/Overview"
import { getLandingPage } from "@/lib/api"
import type { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seo } = await getLandingPage()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Home() {
  const data = await getLandingPage()

  const Content = [Overview, Benefits, News, Map, Faq]

  return (
    <main className="flex w-full flex-col justify-center ">
      <Navbar />
      <header className="flex flex-col ">
        <Hero data={data?.blocks[0]} />
        <div className="h-64 w-full bg-wave-transition bg-repeat-x"></div>
      </header>
      {/* Main content */}

      {Content.map((Component, index) => (
        <Component key={index} data={data?.blocks[index + 1]} />
      ))}
      <Footer />
    </main>
  )
}

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Benefits from "@/components/landingpage/Benefits"
import Faq from "@/components/landingpage/Faq"
import Hero from "@/components/landingpage/Hero"
import Map from "@/components/landingpage/Map"
import News from "@/components/landingpage/News"
import Overview from "@/components/landingpage/Overview"
import Sponsors from "@/components/landingpage/Sponsors"
import { getLandingPage } from "@/lib/api"

export default async function Home() {
  const data = await getLandingPage()

  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col justify-center gap-16">
        <header className="flex flex-col ">
          <Hero data={data?.blocks[0]} />
          <div className="h-64 w-full bg-wave-transition bg-repeat-x"></div>
        </header>
        {/* Main content */}
        <Overview />
        <Benefits />
        <News />
        <Map />
        <Faq />
        <Sponsors />
        <Footer />
      </main>
    </>
  )
}

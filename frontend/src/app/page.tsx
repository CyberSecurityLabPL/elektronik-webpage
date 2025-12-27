import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import Faq from "@/components/landingpage/Faq"
import Hero from "@/components/landingpage/Hero"
import Map from "@/components/landingpage/Map"
import MobileAppSection from "@/components/landingpage/MobileApp"
import News from "@/components/landingpage/News"
import News2 from "@/components/landingpage/News"
import Opinion from "@/components/landingpage/Opinion"
import Overview from "@/components/landingpage/Overview"
import Stats from "@/components/landingpage/Stats"
import { getLandingPage, getNavigation } from "@/lib/api"
import { getSectionByName, getSectionDataByName } from "@/lib/utils"
import { mapMockData, faqMockData } from "@/lib/mockData"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

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
  const { link_groups: navItems, ...additionalLinks } = await getNavigation()

  const faqData = getSectionDataByName("faq", data)

  const FAQschema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity:
      faqData.questions &&
      faqData.questions.length > 0 &&
      faqData.questions.map((item: any) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
  }
  return (
    <PageWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQschema),
        }}
      />
      <Navbar navItems={navItems} additionalLinks={additionalLinks} />
      <main className="flex w-full flex-col items-center justify-center overflow-x-hidden">
        <div className="flex w-full flex-col">
          <Hero data={getSectionDataByName("hero", data)} />
        </div>
        {/* Main content */}
        
        {/* Na testa zeby w strapi nie zmieniac */}
        {/* {data?.blocks.map((section: any, index: number) => {
          if (section.__component === "blocks.hero") return null // Skip Hero block
          const SectionComponent = getSectionByName(section.__component)

          if (section.__component === "blocks.news") {
            return (
              <section key={index} className="w-full pb-32">
                <SectionComponent data={section} />

                <div className="h-64 w-full bg-lines-transition bg-bottom bg-repeat-x hc:bg-lines-transition-hc"></div>
                <div className="h-64 w-full bg-wave-transition bg-repeat-x hc:bg-wave-transition-hc"></div>
              </section>
            )
          } */}

            {/* Na test i do usuniecia */}
            <News />
            <MobileAppSection />
            <Overview />
            <Stats />
            <Opinion />
            <Map data={mapMockData} />
            <Faq data={faqMockData} />
          
          
          {/* return SectionComponent ? (
            <SectionComponent key={index} data={section} />
          ) : null
        })} */}

        <Footer />
      </main>
    </PageWrapper>
  )
}

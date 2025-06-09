import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import Hero from "@/components/landingpage/Hero"
import MobileAppSection from "@/components/landingpage/MobileApp"
import { getLandingPage, getNavigation } from "@/lib/api"
import { getSectionByName, getSectionDataByName } from "@/lib/utils"
import type { Metadata } from "next"

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
          <div className="h-64 w-full bg-lines-transition bg-bottom bg-repeat-x hc:bg-lines-transition-hc"></div>
          <div className="h-64 w-full bg-wave-transition bg-repeat-x hc:bg-wave-transition-hc"></div>
        </div>
        {/* Main content */}
        <MobileAppSection />

        {data?.blocks.map((section: any, index: number) => {
          if (index === 0) return null // Skip the first block (Hero)
          const SectionComponent = getSectionByName(section.__component)
          return SectionComponent ? (
            <SectionComponent key={index} data={section} />
          ) : null
        })}

        <Footer />
      </main>
    </PageWrapper>
  )
}

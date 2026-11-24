import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import PageWrapper from "@/components/PageWrapper"
import AboutQuote from "@/components/landingpage/AboutQuote"
import AppPromo from "@/components/landingpage/AppPromo"
import Faq from "@/components/landingpage/Faq"
import Hero from "@/components/landingpage/Hero"
import Map from "@/components/landingpage/Map"
import News from "@/components/landingpage/News"
import Programs from "@/components/landingpage/Programs"
import Stats from "@/components/landingpage/Stats"
import WhyUs from "@/components/landingpage/WhyUs"
import { getLandingPage, getNavigation } from "@/lib/api"
import { getSectionDataByName } from "@/lib/utils"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLandingPage()

  return {
    title: data?.seo?.metaTitle,
    description: data?.seo?.metaDescription,
    keywords: data?.seo?.keywords,
  }
}

/**
 * Landing page.
 * Hero, News, Map and FAQ use data from Strapi (`landing-page` blocks),
 * Programs uses the recruitment data (`recruitments-page`, same as /nabor),
 * the remaining sections use static content from `src/content/landing.ts`.
 */
export default async function Home() {
  const [data, navigation] = await Promise.all([
    getLandingPage(),
    getNavigation(),
  ])
  const { link_groups: navItems, ...additionalLinks } = navigation ?? {}

  const hero = data ? getSectionDataByName("hero", data) : null
  const news = data ? getSectionDataByName("news", data) : null
  const map = data ? getSectionDataByName("map", data) : null
  const faq = data ? getSectionDataByName("faq", data) : null

  const faqSchema = faq?.questions?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faq.questions.map((item: any) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null

  return (
    <PageWrapper>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar navItems={navItems} additionalLinks={additionalLinks} />
      <main className="flex w-full flex-col items-center overflow-x-hidden">
        <Hero data={hero} />
        <News data={news} />
        <AppPromo />
        <WhyUs />
        <Programs />
        <Stats />
        <AboutQuote />
        {map && <Map data={map} />}
        {faq && <Faq data={faq} />}
      </main>
      <Footer />
    </PageWrapper>
  )
}

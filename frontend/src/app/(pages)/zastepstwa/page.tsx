import {
  getExactSubstitutions,
  getSubstitutions,
  getSubstitutionsPage,
} from "@/lib/api"

import { Metadata } from "next"
import SubstitutionsDisplay from "@/components/SubstitutionsDisplay"
import { formatStrapiDate } from "@/lib/utils"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSubstitutionsPage()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function SubstitutionPage() {
  const data = await getSubstitutionsPage()
  const sub = await getExactSubstitutions(formatStrapiDate(new Date()))
  const replace = await getSubstitutions(1)

  return (
    <main className="flex w-full flex-col items-center ">
      <SubstitutionsDisplay
        page={data}
        initial={!sub.data[0] ? replace : sub}
        date={!sub.data[0] ? replace.data[0].date : new Date()}
      />
    </main>
  )
}

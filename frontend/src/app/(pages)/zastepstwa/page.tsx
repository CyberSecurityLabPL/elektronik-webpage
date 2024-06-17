import { getSubstitutions, getSubstitutionsPage } from "@/lib/api"

import { Metadata, ResolvingMetadata } from "next"
import SubstitutionsDisplay from "@/components/SubstitutionsDisplay"

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
  const sub = await getSubstitutions(1)

  return (
    <main className="flex w-full flex-col items-center gap-4">
      <SubstitutionsDisplay page={data} initial={sub} />
    </main>
  )
}

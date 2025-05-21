import SubstitutionsDisplay from "@/components/SubstitutionsDisplay"
import { REVALIDATE } from "@/config"
import { getExactSubstitutions, getSubstitutionsPage } from "@/lib/api"
import { formatStrapiDate } from "@/lib/utils"

export const revalidate = REVALIDATE

export default async function Page({
  params,
}: {
  params: Promise<{ date: string }>
}) {
  const { date } = await params
  const data = await getSubstitutionsPage()
  const sub = await getExactSubstitutions(formatStrapiDate(date))

  return (
    <main className="flex w-full flex-col items-center gap-4">
      <SubstitutionsDisplay page={data} initial={sub} date={date} />
    </main>
  )
}

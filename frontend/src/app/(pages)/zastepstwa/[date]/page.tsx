import SubstitutionsDisplay from "@/components/SubstitutionsDisplay"
import { getExactSubstitutions, getSubstitutionsPage } from "@/lib/api"
import { formatStrapiDate } from "@/lib/utils"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

function isValidDateFormat(date: string) {
  const regex = /^\d{4}-\d{2}-\d{2}$/
  if (!regex.test(date)) return false

  const parsedDate = new Date(date)
  return parsedDate instanceof Date && !isNaN(parsedDate.getTime())
}
function isWeekend(date: string) {
  const day = new Date(date).getDay()
  return day === 0 || day === 6
}

export default async function Page({
  params,
}: {
  params: Promise<{ date: string }>
}) {
  const { date } = await params

  if (!isValidDateFormat(date) || isWeekend(date)) {
    notFound()
  }

  const data = await getSubstitutionsPage()
  const sub = await getExactSubstitutions(formatStrapiDate(date))

  return (
    <main className="flex w-full flex-col items-center ">
      <SubstitutionsDisplay page={data} initial={sub} date={date} />
    </main>
  )
}

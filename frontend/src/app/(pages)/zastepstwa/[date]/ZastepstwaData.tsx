import { getExactSubstitutions } from "@/lib/api"
import { formatStrapiDate } from "@/lib/utils"
import { use } from "react"

interface Props {
  date: string
}

export default function ZastepstwaData({ date }: Props) {
  // `use()` pozwala bezpośrednio wpiąć Promise z fetch
  const data = use(getZastepstwa(date))
  return <p>{data}</p>
}

async function getZastepstwa(date: string) {
  // Tu symulujemy opóźnienie jak z API
  const data = await getExactSubstitutions(formatStrapiDate(date))

  const substitutions =
    data.data[0]?.substitutions ||
    "Brak zaplanowanych zastępstw na ten dzień bądź jeszcze ich nie wpisano."

  // Tu w praktyce byłby fetch np. z Strapi lub lokalnego API
  return substitutions
}

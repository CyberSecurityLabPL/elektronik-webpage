import AchieveCard from "@/components/cards/AchieveCard"
import AchieveDialog from "@/components/AchieveDialog"
import Header from "@/components/Header"
import { getAchievements } from "@/lib/api"
import { Metadata } from "next"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { formatDateYear, getImage } from "@/lib/utils"

export const dynamic = "force-dynamic"

interface Achievement {
  title: string
  description: string
  date: string
  createdAt: string
  image?: {
    url: string
  }
}
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAchievements()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data: {
    achievements: Achievement[]
    heading: string
    description: string
  } = await getAchievements()
  data.achievements.sort(
    (a: Achievement, b: Achievement) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )

  return (
    <main className="flex w-full flex-col items-center">
      <Header title={data.heading} subtitle={data.description} />
      <PageEnterAnimation className="mx-4 mt-4 flex  flex-col items-center justify-center">
        {data?.achievements.map((item: any) => (
          <AchieveDialog
            key={item.title}
            date={item.date}
            opis={item.description}
            name={item.title}
          >
            <AchieveCard
              key={item.name}
              name={item.title}
              src={getImage(item.image?.url) ?? "/default/trophy.svg"}
              date={formatDateYear(item.createdAt)}
              opis={item.description}
            />
          </AchieveDialog>
        ))}
      </PageEnterAnimation>
    </main>
  )
}

import AchieveCard from "@/components/cards/AchieveCard"
import AchieveDialog from "@/components/AchieveDialog"
import Header from "@/components/Header"
import { getAchievements } from "@/lib/api"
import { Metadata, ResolvingMetadata } from "next"
import { MotionDiv } from "@/lib/motion"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { getImage } from "@/lib/utils"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getAchievements()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getAchievements()

  return (
    <main className="flex w-full flex-col items-center">
      <Header title={data.heading} subtitle={data.description} />
      <PageEnterAnimation className="mt-4 flex flex-col items-center justify-center">
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
              date={item.date}
              opis={item.description}
            />
          </AchieveDialog>
        ))}
      </PageEnterAnimation>
    </main>
  )
}

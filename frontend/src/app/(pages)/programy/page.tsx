import CourseCard from "@/components/cards/CourseCard"
import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { getCoursesPage } from "@/lib/api"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getCoursesPage()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getCoursesPage()

  return (
    <main className="flex w-full flex-col items-center">
      <Header title={data?.heading} subtitle={data?.description}></Header>
      <PageEnterAnimation className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-16">
          {data.course_groups.map((courseGroup: any) => (
            <CourseGroup
              key={courseGroup.title}
              title={courseGroup.title}
              cards={courseGroup.courses}
            />
          ))}
        </div>
      </PageEnterAnimation>
    </main>
  )
}

function CourseGroup({ title, cards }: { title: string; cards: any }) {
  return (
    <div className="flex flex-col justify-center gap-6 sm:w-9/12">
      <div className="flex items-center justify-center text-pretty text-left text-base font-bold leading-tight max-sm:px-4 sm:text-lg sm:leading-normal lg:text-2xl">
        {title}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        {cards ? (
          cards.map((card: any) => (
            <CourseCard
              key={card.name}
              name={card.name}
              fileType={card.file.ext}
              url={card.file.url}
            />
          ))
        ) : (
          <div>Brak plików</div>
        )}
      </div>
    </div>
  )
}

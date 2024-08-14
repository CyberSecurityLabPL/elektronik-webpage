import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import WorkerCard from "@/components/cards/WorkerCard"
import { Button } from "@/components/ui/button"
import { getTeachers } from "@/lib/api"
import { MotionDiv } from "@/lib/motion"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getTeachers()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getTeachers()

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title="Kadra nauczycielska"
        subtitle="Poznaj naszą kadrę nauczycielską."
      />
      <PageEnterAnimation>
        {data?.teacher_groups.map((group: any) => (
          <div key={group.title}>
            <h1 className="mb-4 mt-12 flex justify-center text-center text-2xl font-semibold sm:justify-start">
              {group.title}
            </h1>
            <div className="flex max-w-4xl flex-wrap justify-center gap-4">
              {group.teachers.map((teacher: any) => (
                <WorkerCard
                  key={teacher.fullname}
                  name={teacher.fullname}
                  titles={teacher.titles}
                  src={teacher.image.url ?? "/default/avatarMale.svg"}
                  position={teacher.position}
                  description={teacher.description}
                />
              ))}
            </div>
          </div>
        )) ?? "Brak danych"}
      </PageEnterAnimation>
    </main>
  )
}

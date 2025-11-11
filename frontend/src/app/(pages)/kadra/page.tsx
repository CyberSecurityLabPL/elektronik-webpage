import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import WorkerCard from "@/components/cards/WorkerCard"
import { getTeachers } from "@/lib/api"
import { Metadata } from "next"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const dynamic = "force-dynamic"

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
      <PageEnterAnimation className="flex w-full justify-center px-4 sm:px-6 md:px-8">
        <Accordion
          defaultValue={data?.teacher_groups[0]?.title}
          type="single"
          collapsible
          className="w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]"
        >
          {data?.teacher_groups.map((group: any) => (
            <AccordionItem
              key={group.title}
              value={group.title}
              className="px-2 py-4 sm:px-4 md:px-6"
            >
              <AccordionTrigger className="flex w-full items-center justify-center gap-36  px-0   text-xl font-semibold leading-none sm:mx-6 sm:justify-between sm:text-2xl">
                {group.title}
              </AccordionTrigger>
              <AccordionContent className="grid grid-cols-1 justify-items-center gap-6 gap-y-8 overflow-visible pt-4 sm:grid-cols-2 sm:gap-8 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {group.teachers.map((teacher: any) => (
                  <WorkerCard
                    key={teacher.fullname}
                    name={teacher.fullname}
                    titles={teacher.titles}
                    src={teacher.image?.url ?? "/default/avatarMale.svg"}
                    position={teacher.position}
                    description={teacher.description}
                    className="w-full max-w-[280px]"
                  />
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </PageEnterAnimation>
    </main>
  )
}

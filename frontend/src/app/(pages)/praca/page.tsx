import JobCard from "@/components/cards/JobCard"
import Header from "@/components/Header"
import JobDialog from "@/components/JobDialog"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { getJobs } from "@/lib/api"
import { getImage } from "@/lib/utils"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getJobs()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getJobs()

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data?.heading ?? "Oferty Pracy"}
        subtitle={
          data?.description ?? "Oferty pracy dla absolwentów naszej szkoły."
        }
      />
      <PageEnterAnimation className="flex flex-col items-center justify-center p-2">
        {data?.jobs.map((item: any) => (
          <JobDialog
            key={item.name}
            company={item.company}
            jobName={item.name}
            date={item.date}
            tasks={item.tasks}
            reqs={item.requirements}
          >
            <JobCard
              name={item.name}
              src={getImage(item.image?.url)}
              date={item.date}
              minPay={item.minPay}
              maxPay={item.maxPay}
              location={item.location}
              badges={item.badges}
            />
          </JobDialog>
        )) ?? "Nie znaleziono ofert pracy."}
      </PageEnterAnimation>
    </main>
  )
}

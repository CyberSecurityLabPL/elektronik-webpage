import Header from "@/components/Header"
import { renderMarkdown } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { getPage } from "@/lib/api"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { MotionDiv } from "@/lib/motion"
import PageEnterAnimation from "@/components/PageEnterAnimation"

type Props = {
  params: { page: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seo } = await getPage(params.page)

  return {
    title: seo?.metaTitle ?? "Elektronik - Nie znaleziono strony",
    description: seo?.metaDescription,
    keywords: seo?.keywords,
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const data = await getPage(params.page)

  if (!data.content) {
    notFound()
  }

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data?.heading ?? "Error 404"}
        subtitle={data?.description ?? `Page /${params.page} not found!`}
      />
      <PageEnterAnimation
        className={`flex w-full justify-center rounded-sm bg-background p-2 text-xs shadow-sm sm:text-base items-center${data?.content ? "" : "hidden"}`}
      >
        <div className="prose w-full p-4">
          {data?.content ? renderMarkdown(data.content) : null}
        </div>
      </PageEnterAnimation>
    </main>
  )
}

import Header from "@/components/Header"
import { renderMarkdown } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { getPage } from "@/lib/api"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { page: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seo } = await getPage(params.page)

  return {
    title: seo?.metaTitle ?? "Elektronik - Untitled page",
    description: seo?.metaDescription ?? "Not described page",
    keywords: seo?.keywords ?? ["page", "strona", "ckziu", "zseis"],
  }
}

export default async function Page({ params }: { params: { page: string } }) {
  const data = await getPage(params.page)

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data?.heading ?? "Error 404"}
        subtitle={data?.description ?? `Page /${params.page} not found!`}
      />
      <div
        className={`flex w-full justify-center rounded-sm bg-background p-2 text-xs shadow-sm sm:text-base items-center${data?.content ? "" : "hidden"}`}
      >
        <div className="prose p-4">
          {data?.content ? renderMarkdown(data.content) : null}
        </div>
      </div>
    </main>
  )
}

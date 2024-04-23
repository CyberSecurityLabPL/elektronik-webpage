import Header from "@/components/Header"
import { renderMarkdown } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { getPage } from "@/lib/api"
import markdownOptions from "@/components/markdown/MarkdownOptions"

export default async function Page({ params }: { params: { page: string } }) {
  const data = await getPage(params.page)

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data?.heading ?? "Error 404"}
        subtitle={data?.description ?? `Page /${params.page} not found!`}
      />
      <div
        className={`w-11/12 rounded-sm bg-background p-2 text-xs shadow-sm sm:text-base ${data?.content ? "" : "hidden"}`}
      >
        {data?.content
          ? renderMarkdown(data.content, markdownOptions)
          : null}
      </div>
    </main>
  )
}

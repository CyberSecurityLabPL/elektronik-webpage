import Header from "@/components/Header"
import H1, { H2, H3 } from "@/components/markdown/Headers"
import { Separator } from "@/components/ui/separator"
import { getNews } from "@/lib/api"
import { formatDate, renderMarkdown } from "@/lib/utils"
import { CalendarPlus, User } from "lucide-react"
import Image from "next/image"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const articles = await getNews({
    flatteners: ["id"],
  })

  const params = articles.data.map((article: any) => ({
    article: article.id + "",
  }))

  return params
}

export default async function Page({
  params,
}: {
  params: { article: string }
}) {
  const article = await getNews({
    params: params.article,
  })

  return (
    <main className="flex w-full flex-col items-center gap-4">
      <Header
        title={"Aktualności i ogłoszenia"}
        subtitle={"O to co dzieje się w naszej szkole!"}
      />
      <div className="flex w-11/12 flex-col items-center gap-4 rounded-xl bg-background p-4 shadow-sm">
        <div className="relative aspect-[30/10] w-full rounded-xl bg-slate-600 sm:aspect-[1307/209] sm:rounded-3xl">
          <Image
            className="rounded-[inherit] object-cover"
            fill
            alt={"xd"}
            src={"/images/cardtest.jpg"}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className="flex w-full justify-start py-2 text-left text-xl font-semibold sm:text-3xl">
            {article?.title ?? `Couldn't load ${params.article} article!`}
          </h1>
          <div className="flex w-full flex-col items-start">
            <span className="flex items-center justify-center gap-1 text-sm sm:text-base">
              <CalendarPlus className="size-3 text-primary sm:size-4" />
              <p>{formatDate(article?.updatedAt)}</p>
            </span>
            <span className="flex items-center justify-center gap-1 text-sm sm:text-base">
              <User className="size-3 text-primary sm:size-4" />
              <p>{article?.updatedBy ?? "No creator found!"}</p>
            </span>
          </div>
          <Separator />
          <div className="w-full py-2 text-xs sm:text-base">
            {renderMarkdown(article?.content ?? "Couldn't load content!", {
              components: {
                h1: H1,
                h2: H2,
                h3: H3,
                hr: () => <Separator className="my-2" />,
                ul: (props) => (
                  <ul className="list-disc py-2 pl-4">{props.children}</ul>
                ),
                ol: (props) => (
                  <ol className="list-decimal py-2 pl-4">{props.children}</ol>
                ),
              },
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

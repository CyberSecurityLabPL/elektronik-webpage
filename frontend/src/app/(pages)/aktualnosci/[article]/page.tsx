import MarkdownHeader from "@/components/markdown/Header"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getArticle, getArticles } from "@/lib/api"
import { formatDate, getAuthor, renderMarkdown } from "@/lib/utils"
import { CalendarPlus, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import { defaultCreator } from "@/components/landingpage/News"

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const articles = await getArticles({
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
  const { data: article } = await getArticle(params.article, {
    flatteners: ["attributes"],
  })

  const author = getAuthor(article.attributes)

  return (
    <article className="prose prose-cyan flex w-full flex-col items-center gap-4 lg:prose-xl">
      {!article ? (
        <FailedToLoad />
      ) : (
        <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-background">
          {/*  */}
          {/* ARTICLE INFO */}
          <div className="relative aspect-[5/2] w-full overflow-hidden rounded-xl sm:aspect-[8/2] sm:rounded-3xl">
            <Image
              className="rounded-[inherit] object-cover"
              fill
              alt={"xd"}
              src={"/images/cardtest.jpg"}
              quality={100}
            />
          </div>
          <div className="mt-12 flex w-full flex-col items-center gap-4">
            <h1 className=" flex w-full justify-start py-2 text-left text-xl font-semibold !no-underline sm:text-3xl">
              {article?.title}
            </h1>
            <div className="flex w-full flex-col items-start gap-2">
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <CalendarPlus className="size-3 text-primary sm:size-4" />
                <div>{formatDate(article?.updatedAt)}</div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
                <User className="size-3 text-primary sm:size-4" />
                <div>{author}</div>
              </div>
            </div>
            <Separator />

            {/* ARTICLE CONTENT */}
            <div className="w-full py-2 text-xs sm:text-base">
              {article?.content ? (
                renderMarkdown(article.content, markdownOptions)
              ) : (
                <FailedToLoad />
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}

function FailedToLoad() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <h1 className="text-center text-4xl">Nie znaleziono artykułu</h1>
      <Button asChild>
        <Link href={"/aktualnosci"}>Wróć do aktualności</Link>
      </Button>
      <div className="relative mt-8 aspect-video w-full max-w-5xl">
        <Image src={"/assets/not-found.svg"} alt="Not found" fill />
      </div>
    </div>
  )
}

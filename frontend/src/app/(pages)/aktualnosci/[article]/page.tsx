import markdownOptions from "@/components/markdown/MarkdownOptions"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { getArticle, getArticles } from "@/lib/api"
import { formatDate, getAuthor, getImage, renderMarkdown } from "@/lib/utils"
import { CalendarPlus, User } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 10

type Props = {
  params: { article: string }
}

const defaultMetadata: Metadata = {
  title: "Nie znaleziono artykułu",
  description: "Nie znaleziono artykułu.",
  keywords: ["not found"],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await getArticle(params.article, {})

  if (!res) return defaultMetadata

  const seo = res?.data?.seo ? res.data.seo : defaultMetadata

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

// Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const articles = await getArticles({
//     flatteners: ["id"],
//     getAll: true,
//   })

//   const params = articles.data.map((article: any) => ({
//     article: article.id + "",
//   }))

//   return params
// }

export default async function Page({
  params,
}: {
  params: { article: string }
}) {
  const res = await getArticle(params.article, {})

  const article = res?.data ? res.data : null

  const author = article ? getAuthor(article) : "Nieznany autor"

  const image = article.image
  const hasImage = Object.keys(image).length !== 0

  return (
    <article className="flex w-full flex-col items-center self-center">
      {!article ? (
        <FailedToLoad />
      ) : (
        <div className="relative flex w-full flex-col items-center bg-background">
          {/*  */}
          {/* ARTICLE INFO */}
          {hasImage ? (
            <div className="relative aspect-[5/2] w-screen sm:aspect-[3/1] ">
              <Image
                className="!m-0 object-cover"
                fill
                alt={"xd"}
                src={getImage(image.url)}
                quality={100}
              />
            </div>
          ) : (
            <div className="my-8"></div>
          )}
          <div className="flex w-full flex-col items-center gap-4 rounded bg-background py-8">
            <h1 className="flex w-full justify-start px-12 text-left text-xl font-semibold !no-underline sm:text-3xl">
              {article?.title}
            </h1>
            <div className="flex w-full flex-col items-start gap-2 px-12">
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
            <div className="prose prose-blue w-full self-start px-12 py-2 text-xs lg:prose-xl sm:text-base">
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

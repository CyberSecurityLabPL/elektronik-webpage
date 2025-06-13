import { getArticles, getLatestArticle } from "@/lib/api"
import { formatDayMonthYear, getImage } from "@/lib/utils"
import { APIResponseData, Article as ArticleType } from "@/types/types"
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import { Separator } from "../ui/separator"
import Link from "next/link"

const News2 = async () => {
  const sectionId = "news"

  const { data } = (await getArticles()) as {
    data: APIResponseData<"api::article.article">[]
  }

  const latestArticle =
    (await getLatestArticle()) as APIResponseData<"api::article.article">

  return (
    <section id={sectionId} className="mx-auto w-full max-w-screen-2xl">
      <h2 className="mb-20 text-6xl font-bold text-foreground">
        Aktualności ze szkoły
      </h2>
      <div className="grid grid-cols-2">
        <div className="w-full max-w-xl">
          <MainArticle data={latestArticle} />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex w-full flex-col gap-8">
            {data.slice(0, 3).map((article) => (
              <Link
                href={`/aktualnosci/${article.documentId}`}
                key={article.documentId}
              >
                <Article data={article} />

                <Separator className="my-4" orientation="horizontal" />
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/aktualnosci"
              className={buttonVariants({ className: "px-8" })}
            >
              Zobacz więcej
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Article({ data }: { data: any }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-8">
        <span className="text-base text-muted-foreground">
          {formatDayMonthYear(data.createdAt)}
        </span>
        <span className="text-base text-primary">
          {/* {data.createdBy ? (
            <>{data.createdBy}</>
          ) : data.updatedBy ? (
            <>{data.updatedBy}</>
          ) : null} */}
        </span>
      </div>
      <span className="text-3xl font-semibold text-foreground">
        {data.title}
      </span>
      <span className="mt-2">
        {data.description && data.description?.substring(0, 200)}
        {data.description && data.description.length > 200 && "... "}
        <span className="text-primary"> Czytaj więcej</span>
      </span>
    </div>
  )
}

function MainArticle({ data }: { data: any }) {
  return (
    <Link href={`/aktualnosci/${data.documentId}`} className="flex flex-col">
      <Image
        src={getImage(data.image?.url)}
        alt={data.title}
        width={600}
        height={400}
        priority
        loading="eager"
        className="aspect-square h-auto w-full rounded-2xl border object-cover"
      />
      <div className="flex w-full justify-between px-2 pt-2">
        <span className="text-muted-foreground">
          {formatDayMonthYear(data.createdAt?.toString())}
        </span>
        <span className="pt-8 text-muted-foreground">
          {/* {data.createdBy ? (
            <>{data.createdBy}</>
          ) : data.updatedBy ? (
            <>{data.updatedBy}</>
          ) : null} */}
        </span>
      </div>
      <span className="px-2 text-3xl font-semibold text-foreground">
        {data.title}
      </span>
    </Link>
  )
}

export default News2

import { getArticles, getLatestArticle } from "@/lib/api"
import { formatDayMonthYear, getAuthor, getImage } from "@/lib/utils"
import { APIResponseData, Article as ArticleType } from "@/types/types"
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { InView } from "../motion/InView"
import { MotionDiv } from "@/lib/motion"

export default async function News2() {
  const sectionId = "news"

  const { data } = (await getArticles()) as {
    data: APIResponseData<"api::article.article">[]
  }

  const latestArticle =
    (await getLatestArticle()) as APIResponseData<"api::article.article">

  if (!data || !latestArticle) {
    return (
      <div>
        <p>Brak danych do wyświetlenia</p>
      </div>
    )
  }

  return (
    <section
      id={sectionId}
      className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 text-3xl font-bold text-foreground sm:mb-12 sm:text-4xl lg:mb-20 lg:text-6xl">
        Aktualności ze szkoły
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <InView
          className="w-full"
          viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              scale: 0.95,
              filter: "blur(4px)",
            },
            visible: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            },
          }}
        >
          <MainArticle data={latestArticle} />
        </InView>
        <div className="flex flex-col justify-between">
          <InView
            className="flex w-full flex-col gap-6 lg:gap-8"
            viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.07,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {data.slice(0, 4).map((article) => (
              <MotionDiv
                key={article.documentId}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
              >
                <Link href={`/aktualnosci/${article.documentId}`}>
                  <Article data={article} />
                  <Separator className="my-4" orientation="horizontal" />
                </Link>
              </MotionDiv>
            ))}
          </InView>
          <div className="mt-8 flex justify-center lg:mt-0">
            <InView
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewOptions={{ once: true }}
            >
              <Link
                href="/aktualnosci"
                className={buttonVariants({ className: "px-6 py-2 sm:px-8" })}
              >
                Zobacz więcej
              </Link>
            </InView>
          </div>
        </div>
      </div>
    </section>
  )
}

function Article({ data }: { data: any }) {
  const author = getAuthor(data)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">
        {data.title}
      </span>
      <span className="mt-2 text-sm sm:text-base">
        {data.description && data.description?.substring(0, 200)}
        {data.description && data.description.length > 200 && "... "}
        <span className="text-primary"> Czytaj więcej</span>
      </span>
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-8">
        <span className="text-sm text-muted-foreground sm:text-base">
          {formatDayMonthYear(data.createdAt)}
        </span>
        <span className="text-sm text-muted-foreground sm:text-base">
          {author}
        </span>
      </div>
    </div>
  )
}

function MainArticle({ data }: { data: any }) {
  const author = getAuthor(data)

  return (
    <Link href={`/aktualnosci/${data.documentId}`} className="flex flex-col">
      <Image
        src={getImage(data.image?.url)}
        alt={data.title}
        width={600}
        height={400}
        priority
        loading="eager"
        className="aspect-video h-auto w-full rounded-lg border object-cover sm:aspect-square sm:rounded-2xl"
      />
      <span className="px-2 pt-2 text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">
        {data.title}
      </span>
      <div className="flex w-full flex-col gap-2 px-2 pt-4 sm:flex-row sm:justify-between sm:pt-2">
        <span className="text-sm text-muted-foreground sm:text-base">
          {formatDayMonthYear(data.createdAt?.toString())}
        </span>
        <span className="text-sm text-muted-foreground sm:text-base">
          {author}
        </span>
      </div>
    </Link>
  )
}

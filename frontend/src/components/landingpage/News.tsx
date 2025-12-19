import { getArticles, getLatestArticle } from "@/lib/api"
import { formatDayMonthYear, getAuthor, getDate, getImage } from "@/lib/utils"
import Image from "next/image"
import { Button, buttonVariants } from "../ui/button"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { InView } from "../motion/InView"
import { MotionDiv } from "@/lib/motion"

type ArticleType = {
  documentId: string
  [key: string]: string | any
}

export default async function News2() {
  const sectionId = "news"

  const { data } = (await getArticles()) as { data: ArticleType[] }

  const latestArticle = await getLatestArticle()

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
      className="max-w-(--breakpoint-2xl) mx-auto px-4 sm:px-6 lg:px-8"
    >
      <h2 className="mb-8 text-xl font-bold text-foreground sm:mb-12 sm:text-4xl lg:mb-20 lg:text-4xl">
        Aktualności ze szkoły
      </h2>
      <div className="mx-auto grid max-w-2xl grid-cols-1 lg:max-w-full lg:grid-cols-5 lg:gap-8 xl:gap-24">
        <InView
          className="w-full lg:col-span-2"
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
        <div className="flex flex-col justify-between lg:col-span-3">
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
                  <Separator className="mt-4" orientation="horizontal" />
                </Link>
              </MotionDiv>
            ))}
          </InView>
          <div className="mt-8 flex justify-center lg:mt-8">
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
    <div className="flex flex-col gap-2 rounded-xl px-2 hover:bg-slate-100/50 hc:hover:bg-slate-800/50">
      <span className="text-lg font-semibold text-foreground sm:text-xl lg:text-2xl">
        {data.title}
      </span>
      <span className="mt-2 text-sm sm:text-base">
        {data.description && data.description?.substring(0, 200)}
        {data.description && data.description.length > 200 && "... "}
      </span>
      <div className="flex flex-row justify-between gap-2 sm:flex-row sm:gap-8">
        <span className="text-sm text-muted-foreground sm:text-base">
          {formatDayMonthYear(getDate(data))}
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
    <>
      <Link
        href={`/aktualnosci/${data.documentId}`}
        className="flex flex-col rounded-xl p-2 hover:bg-slate-100/50 hc:hover:bg-slate-800/50"
      >
        <Image
          src={getImage(data.image?.url)}
          alt={data.title}
          width={600}
          height={600}
          priority
          loading="eager"
          className="aspect-square h-auto w-full rounded-lg border bg-background object-contain sm:aspect-square sm:rounded-2xl"
        />
        <div className="mt-4 flex flex-col">
          <span className="px-2 text-xl font-semibold text-foreground sm:text-2xl lg:text-3xl">
            {data.title}
          </span>
          <div className="mt-6 flex w-full flex-row justify-between gap-2 px-2 sm:justify-between">
            <span className="text-sm text-muted-foreground sm:text-base">
              {formatDayMonthYear(getDate(data))}
            </span>
            <span className="text-sm text-muted-foreground sm:text-base">
              {author}
            </span>
          </div>
        </div>
      </Link>
      <Separator className="my-4 lg:hidden" orientation="horizontal" />
    </>
  )
}

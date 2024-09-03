import React from "react"
import NewsCard from "../cards/NewsCard"
import { Button } from "../ui/button"
import Link from "next/link"
import { getArticles, getLatestArticle } from "@/lib/api"
import { object } from "zod"
import { InView } from "../motion/InView"

export const defaultCreator = { firstname: "Brak", lastname: "Autora!" }

export default async function News() {
  const featuredArticle = await getLatestArticle(["id"])
  const { data: CardData } = await getArticles({
    flatteners: [],
  })

  const articles = [featuredArticle, ...CardData]

  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px", once: true }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="z-10 mt-48 flex w-full flex-col flex-wrap items-center justify-center gap-8 py-4"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-medium text-primary-foreground">
          Aktualności
        </h2>
        <h1 className="p-4 text-center font-sans text-4xl font-bold text-slate-800">
          Ostatnie wydarzenia w Elektroniku
        </h1>
      </div>

      <InView
        viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.7,
            },
          },
        }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        className="flex w-full grid-cols-1 flex-col items-center justify-center gap-4 px-4 md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-3 xl:w-fit"
      >
        {articles
          .slice(0, 3)
          .map(({ attributes: news, id }: any, index: number) => {
            return (
              <InView
                variants={{
                  hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  },
                }}
                key={index + news.title}
                className="mb-4"
              >
                <NewsCard
                  title={news.title}
                  description={news.description}
                  date={news.createdAt}
                  link={`/aktualnosci/${id}`}
                  src={news.image?.data?.attributes.url ?? ""}
                />
              </InView>
            )
          })}
      </InView>
      <div className="growAnim">
        <Button asChild className=" w-fit ">
          <Link href="/aktualnosci">Zobacz więcej</Link>
        </Button>
      </div>
    </InView>
  )
}

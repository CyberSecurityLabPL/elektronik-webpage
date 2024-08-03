import React from "react"
import NewsCard from "../cards/NewsCard"
import { Button } from "../ui/button"
import Link from "next/link"
import { getArticles } from "@/lib/api"

export const defaultCreator = { firstname: "Brak", lastname: "Autora!" }

export default async function News() {
  //empty flatteners cause id is needed
  const { data: CardData } = await getArticles({
    flatteners: [],
  })

  return (
    <div className="z-10 flex w-full flex-col flex-wrap items-center justify-center gap-8 py-4">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-medium text-primary-foreground">
          Aktualności
        </h2>
        <h1 className="px-2 py-4 text-center font-sans text-4xl  font-bold text-slate-800">
          Ostatnie wydarzenia w Elektronie
        </h1>
      </div>

      <div className=" flex w-full grid-cols-1 flex-col items-center justify-center gap-4 px-4 md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-3 xl:w-fit">
        {CardData.slice(0, 3).map(
          ({ attributes: news, id }: any, index: number) => {
            return (
              <NewsCard
                key={index + news.title}
                title={news.title}
                description={news.description}
                date={news.createdAt}
                link={`/aktualnosci/${id}`}
                src={news.image?.data?.attributes.url ?? ""}
              />
            )
          }
        )}
      </div>
      <div className="growAnim">
        <Button asChild className=" w-fit ">
          <Link href="/aktualnosci">Zobacz więcej</Link>
        </Button>
      </div>
    </div>
  )
}

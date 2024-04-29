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
      <h1 className="pt-8 text-center text-4xl font-semibold text-slate-800">
        Aktualności
      </h1>
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
      <Button asChild className="w-fit">
        <Link href="/aktualnosci">Zobacz więcej</Link>
      </Button>
    </div>
  )
}

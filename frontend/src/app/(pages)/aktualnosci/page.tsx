import Header from "@/components/Header"
import React from "react"
import NewsCard from "@/components/cards/NewsCard"
import { getNews } from "@/lib/api"
import { format } from "date-fns"
import { cn, formatDate } from "@/lib/utils"
import { revalidatePath } from "next/cache"

async function page() {
  const { data } = await getNews({
    flatteners: ["id"],
  })

  revalidatePath("/aktualnosci")

  const articles = data as any[]
  const featuredArticle = articles[0]

  return (
    <>
      <Header
        title="Aktualności"
        subtitle="O to co dzieje się w naszej szkole!"
      />
      <div className="flex w-full flex-col">
        <div className="hidden flex-col xs:flex">
          <h2 className="mt-8 pl-8 text-lg font-bold text-foreground md:mt-4 lg:mt-0">
            Najnowszy artykuł
          </h2>
          <NewsCard
            key={featuredArticle.id}
            title={featuredArticle.attributes.title}
            author={featuredArticle.attributes.updatedBy}
            description={featuredArticle.attributes.description}
            link={`/aktualnosci/${featuredArticle.id}`}
            date={featuredArticle.attributes.updatedAt}
            src={featuredArticle.attributes.image.data?.attributes.url}
            variant="featured"
          />
        </div>
        <h2 className="mt-8 pl-8 text-lg font-bold text-foreground">
          Wszystkie artykuły
        </h2>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.length
            ? articles
                .slice(1)
                .map((item: any, index: number) => (
                  <NewsCard
                    key={item.id}
                    title={item.attributes.title}
                    author={item.attributes.updatedBy}
                    description={item.attributes.description}
                    link={`/aktualnosci/${item.id}`}
                    date={item.attributes.updatedAt}
                    src={item.attributes.image.data?.attributes.url}
                  />
                ))
            : "Brak artykułów do wyświetlenia"}
        </div>
      </div>
    </>
  )
}

export default page

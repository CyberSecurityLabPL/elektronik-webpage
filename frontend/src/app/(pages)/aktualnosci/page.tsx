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

  return (
    <div>
      <Header
        title="Aktualności"
        subtitle="O to co dzieje się w naszej szkole!"
      />
      <div className="grid w-full  grid-cols-1  gap-4 md:grid-cols-2 lg:grid-cols-3  ">
        {
          <NewsCard
            key={articles[0].id}
            title={articles[0].attributes.title}
            author={articles[0].attributes.updatedBy}
            description={articles[0].attributes.description}
            link={`/aktualnosci/${articles[0].id}`}
            date={articles[0].attributes.updatedAt}
            src={
              articles[0].attributes.image.data?.attributes.url ?? ""
            }
            variant="featured"
          />
        }
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
                  src={
                    item.attributes.image.data?.attributes.url ?? ""
                  }
                />
              ))
          : "Brak artykułów do wyświetlenia"}
      </div>
    </div>
  )
}

export default page

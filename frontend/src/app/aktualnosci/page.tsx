import Header from "@/components/Header"
import React from "react"
import NewsCard from "@/components/cards/NewsCard"
import { getNews } from "@/lib/api"
import { format } from "date-fns"
import { formatDate } from "@/lib/utils"
import { revalidatePath } from "next/cache"

async function page() {
  const { data } = await getNews({})
  revalidatePath("/aktualnosci")

  return (
    <div>
      <Header
        title="Aktualności i ogłoszenia"
        subtitle="O to co dzieje się w naszej szkole!"
      />
      <div className="grid w-full grid-cols-1 place-content-center place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.length
          ? data
              .reverse()
              .map((item: any, index: number) => (
                <NewsCard
                  key={index + item.title}
                  title={item.title}
                  author={item.updatedBy ?? "No creator found!"}
                  description={item.description}
                  link={"/aktualnosci/" + (index + 1)}
                  date={formatDate(item.updatedAt)}
                  src=""
                />
              ))
          : "Brak Danych!"}
      </div>
    </div>
  )
}

export default page

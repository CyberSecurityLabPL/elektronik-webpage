import Articles from "@/components/Articles"
import Header from "@/components/Header"
import NewsCard from "@/components/cards/NewsCard"
import { getArticles, getLatestArticle } from "@/lib/api"
import { revalidatePath } from "next/cache"

async function page({ searchParams }: { searchParams: any }) {
  console.log(searchParams)

  const { data, meta } = await getArticles({
    flatteners: ["id"],
    page: searchParams["page"],
  })

  revalidatePath("/aktualnosci")

  const articles = data as any[]
  const featuredArticle = await getLatestArticle(["id"])

  // console.log("------------------------------", articles)

  return (
    <>
      <Header
        title="Aktualności"
        subtitle="O to co dzieje się w naszej szkole!"
      />
      <div className="mb-64 flex w-full flex-col">
        <div className="hidden flex-col xs:flex">
          <h2 className="mt-8 pl-8 text-lg font-bold text-foreground md:mt-4 lg:mt-0">
            Najnowszy artykuł
          </h2>
          <NewsCard
            title={featuredArticle.attributes.title}
            author={featuredArticle.attributes.updatedBy}
            description={featuredArticle.attributes.description}
            link={`/aktualnosci/${featuredArticle.id}`}
            date={
              featuredArticle.attributes.createdAt ??
              featuredArticle.attributes.updatedAt
            }
            src={featuredArticle.attributes.image.data?.attributes.url}
            variant="featured"
          />
        </div>
        <h2 className="mb-4 mt-8 text-center text-lg font-bold text-foreground xs:pl-8 xs:text-start">
          Wszystkie artykuły
        </h2>
        <Articles articles={articles} articlesCount={meta.pagination.total} />
      </div>
    </>
  )
}

export default page

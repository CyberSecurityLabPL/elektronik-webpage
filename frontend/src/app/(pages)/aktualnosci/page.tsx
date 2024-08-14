import PaginationComponent from "@/components/ArticlesPagination"
import Header from "@/components/Header"
import NewsCard from "@/components/cards/NewsCard"
import { getArticles, getLatestArticle } from "@/lib/api"
import { revalidatePath } from "next/cache"
import type { Metadata } from "next"
import { MotionDiv } from "@/lib/motion"
import PageEnterAnimation from "@/components/PageEnterAnimation"

export const metadata: Metadata = {
  title: "Elektronik - Aktualności",
  description: "Zobacz najnowsze wydarzenia w naszej szkole!",
  keywords: ["aktualnosci", "news", "ckziu", "zseis"],
}

interface PageParams {
  searchParams: { page: string | undefined }
}

async function page({ searchParams }: PageParams) {
  const page = searchParams["page"] ?? "1"

  const { data, meta } = await getArticles({
    flatteners: [],
    page,
  })

  revalidatePath("/aktualnosci")

  const articles = data as any[]
  const featuredArticle = await getLatestArticle(["id"])

  return (
    <>
      <Header
        title="Aktualności"
        subtitle="O to co dzieje się w naszej szkole!"
      />
      <PageEnterAnimation className="mx-auto mb-64 flex w-full max-w-7xl flex-col">
        <div className="hidden flex-col xs:flex">
          <h2 className="mt-8 pb-4 pl-8 text-lg font-bold text-foreground md:mt-4 lg:mt-0">
            Najnowszy artykuł
          </h2>
          <NewsCard
            title={featuredArticle.attributes.title}
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
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.length
            ? articles.map((item: any, index: number) => (
                <NewsCard
                  key={item.id}
                  title={item.attributes.title}
                  description={item.attributes.description}
                  link={`/aktualnosci/${item.id}`}
                  date={item.attributes.createdAt ?? item.attributes.updatedAt}
                  src={item.attributes.image.data?.attributes.url}
                />
              ))
            : "Brak artykułów do wyświetlenia"}
        </div>
        <div className="self-center py-4">
          <PaginationComponent
            articlesCount={meta.pagination.total}
            paramsPage={page}
          />
        </div>
      </PageEnterAnimation>
    </>
  )
}

export default page

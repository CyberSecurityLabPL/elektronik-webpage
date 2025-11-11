import PaginationComponent from "@/components/ArticlesPagination"
import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import NewsCard from "@/components/cards/NewsCard"
import { getArticles, getLatestArticle } from "@/lib/api"
import type { Metadata } from "next"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Elektronik - Aktualności",
  description: "Zobacz najnowsze wydarzenia w naszej szkole!",
  keywords: ["aktualnosci", "news", "ckziu", "zseis"],
}

interface PageParams {
  searchParams: Promise<{ page: string | undefined }>
}

async function page(props: PageParams) {
  const searchParams = await props.searchParams
  const page = searchParams["page"] ?? "1"

  const { data, meta } = await getArticles({
    flatteners: [],
    page,
  })

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
            title={featuredArticle.title}
            description={featuredArticle.description}
            link={`/aktualnosci/${featuredArticle.documentId}`}
            date={featuredArticle.createdAt ?? featuredArticle.updatedAt}
            src={featuredArticle.image?.url}
            variant="featured"
          />
        </div>
        <div id="artykuly"></div>
        <h2 className="mb-4 mt-8 text-center text-lg font-bold text-foreground xs:pl-8 xs:text-start">
          Wszystkie artykuły
        </h2>
        <div className=" grid h-full w-full grid-cols-1 items-center justify-center   gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.length
            ? articles.map((item: any, index: number) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  link={`/aktualnosci/${item.documentId}`}
                  date={item.createdAt ?? item.updatedAt}
                  src={item.image?.url}
                />
              ))
            : "Brak artykułów do wyświetlenia"}
        </div>
        <div className="self-center py-4">
          <PaginationComponent
            articlesCount={meta.pagination.total}
            paramsPage={page}
            goToId="artykuly"
          />
        </div>
      </PageEnterAnimation>
    </>
  )
}

export default page

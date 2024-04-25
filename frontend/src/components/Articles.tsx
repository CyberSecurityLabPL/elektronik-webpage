"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { PAGINATION_LIMIT } from "@/config"
import { usePathname, useSearchParams } from "next/navigation"
import NewsCard from "./cards/NewsCard"

const Articles = ({
  articles,
  articlesCount,
}: {
  articles: any[]
  articlesCount: number
}) => {
  return (
    <>
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
      <div className="self-center">
        <PaginationComponent articlesCount={articlesCount} />
      </div>
    </>
  )
}

function PaginationComponent({ articlesCount }: { articlesCount: number }) {
  const PAGES_LIMIT = 5
  const pagesCount = Math.ceil(articlesCount / PAGINATION_LIMIT)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const paramsPage = searchParams.get("page")

  const isValid = !isNaN(Number(paramsPage)) && Number(paramsPage) > 0

  const page = isValid ? parseInt(paramsPage!, 10) : 1

  const paginationOffset = Math.floor(PAGES_LIMIT / 2)

  let start = page - paginationOffset
  let end = page + paginationOffset

  start = start < 1 ? 1 : start

  end = end > pagesCount ? pagesCount : end

  console.log(start, end)

  const paginationItems = new Array(PAGES_LIMIT).fill(null).map((_, index) => {
    const pageOffset = start + index

    const isActive = page === pageOffset

    // check if is last element
    if (index === PAGES_LIMIT - 1) {
    }

    // NIKLUXN

    if (pageOffset <= pagesCount) {
      return (
        <PaginationItem key={index}>
          <PaginationLink
            href={`${pathname}?page=${pageOffset}`}
            isActive={isActive}
          >
            {pageOffset}
          </PaginationLink>
        </PaginationItem>
      )
    } else {
      return null // Skip rendering this pagination item
    }
  })

  return (
    <Pagination>
      <PaginationContent>
        {start > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`${pathname}?page=${page - 1}`}
              iconOnly
            />
          </PaginationItem>
        )}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href={`${pathname}?page=${1}`}>
                {1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          </>
        )}
        {paginationItems}
        {end < pagesCount && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>

            <PaginationItem>
              <PaginationLink href={`${pathname}?page=${pagesCount}`}>
                {pagesCount}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {page !== pagesCount && (
          <PaginationItem>
            <PaginationNext href={`${pathname}?page=${page + 1}`} iconOnly />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

export default Articles

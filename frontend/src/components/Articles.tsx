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
import NewsCard from "./cards/NewsCard"
import { getImage } from "@/lib/utils"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { PAGINATION_LIMIT } from "@/config"

const Articles = ({
  articles,
  articlesCount,
}: {
  articles: any[]
  articlesCount: number
}) => {
  console.log("ARTICLES: ", articles)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.length
          ? articles.map((item: any, index: number) => (
              <NewsCard
                key={item.id}
                title={item.attributes.title}
                author={item.attributes.updatedBy}
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

  const paginationItems = new Array(PAGES_LIMIT).fill(null).map((_, index) => {
    const start = page - Math.floor(PAGES_LIMIT / 2)
    const end = page + Math.floor(PAGES_LIMIT / 2)

    // if (start < 1) {
    //   start = 1
    //   end = PAGES_LIMIT
    // }

    if (false) index = index + page
    const pageOffset = index + 1

    const isActive = page === pageOffset

    // check if is last element
    if (index === PAGES_LIMIT - 1) {
      console.log("LAST ELEMENT: ", index, "PAGE OFFSET: ", pageOffset)
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
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`${pathname}?page=${page - 1}`}
              iconOnly
            />
          </PaginationItem>
        )}
        {paginationItems}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={`${pathname}?page=${pagesCount}`}>
            {pagesCount}
          </PaginationLink>
        </PaginationItem>
        {page < pagesCount && (
          <PaginationItem>
            <PaginationNext href={`${pathname}?page=${page + 1}`} iconOnly />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

export default Articles

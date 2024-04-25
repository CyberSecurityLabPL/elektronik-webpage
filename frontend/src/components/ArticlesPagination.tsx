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

export default function PaginationComponent({
  articlesCount,
  paramsPage,
}: {
  articlesCount: number
  paramsPage: string
}) {
  const PAGES_LIMIT = 5
  const pagesCount = Math.ceil(articlesCount / PAGINATION_LIMIT)

  const isValid = !isNaN(Number(paramsPage)) && Number(paramsPage) > 0

  const page = isValid ? parseInt(paramsPage!, 10) : 1

  const paginationOffset = Math.floor(PAGES_LIMIT / 2)

  let start = page - paginationOffset
  let end = page + paginationOffset

  start = start < 1 ? 1 : start

  end = end > pagesCount ? pagesCount : end

  const paginationItems = new Array(PAGES_LIMIT).fill(null).map((_, index) => {
    const pageOffset = start + index

    const isActive = page === pageOffset

    // NIKLUXN

    if (pageOffset <= pagesCount) {
      return (
        <PaginationItem key={index}>
          <PaginationLink
            href={`/aktualnosci?page=${pageOffset}`}
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
            <PaginationPrevious href={constructPageUrl(page - 1)} iconOnly />
          </PaginationItem>
        )}
        {start > 1 && (
          <>
            <PaginationItem>
              <PaginationLink href={constructPageUrl(1)}>{1}</PaginationLink>
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
              <PaginationLink href={constructPageUrl(pagesCount)}>
                {pagesCount}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        {page !== pagesCount && (
          <PaginationItem>
            <PaginationNext href={constructPageUrl(page + 1)} iconOnly />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

const constructPageUrl = (page: number) => `/aktualnosci?page=${page}`

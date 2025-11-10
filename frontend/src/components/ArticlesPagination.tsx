"use client"

import { useState, useEffect } from "react"
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
  goToId,
}: {
  articlesCount: number
  paramsPage: string
  goToId?: string
}) {
  const [windowWidth, setWindowWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize)
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  const PAGES_LIMIT = windowWidth < 640 ? 3 : windowWidth < 768 ? 5 : 6
  const pagesCount = Math.ceil(articlesCount / PAGINATION_LIMIT)

  const isValid = !isNaN(Number(paramsPage)) && Number(paramsPage) > 0
  const page = isValid ? parseInt(paramsPage!, 10) : 1

  const paginationOffset = Math.floor(PAGES_LIMIT / 2)
  let start = Math.max(1, page - paginationOffset)
  let end = Math.min(pagesCount, start + PAGES_LIMIT - 1)

  if (end - start + 1 < PAGES_LIMIT) {
    start = Math.max(1, end - PAGES_LIMIT + 1)
  }

  const paginationItems = Array.from(
    { length: end - start + 1 },
    (_, index) => {
      const pageOffset = start + index
      const isActive = page === pageOffset

      return (
        <PaginationItem key={index} className="hidden sm:inline-block">
          <PaginationLink
            href={constructPageUrl(pageOffset, goToId)}
            isActive={isActive}
          >
            {pageOffset}
          </PaginationLink>
        </PaginationItem>
      )
    }
  )

  return (
    <Pagination>
      <PaginationContent className="flex-wrap justify-center">
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={constructPageUrl(page - 1, goToId)}
              iconOnly
            />
          </PaginationItem>
        )}
        {start > 1 && (
          <>
            <PaginationItem className="hidden sm:inline-block">
              <PaginationLink href={constructPageUrl(1, goToId)}>
                {1}
              </PaginationLink>
            </PaginationItem>
            {start > 2 && (
              <PaginationItem className="hidden sm:inline-block">
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}
        {paginationItems}
        {end < pagesCount && (
          <>
            {end < pagesCount - 1 && (
              <PaginationItem className="hidden sm:inline-block">
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem className="hidden sm:inline-block">
              <PaginationLink href={constructPageUrl(pagesCount, goToId)}>
                {pagesCount}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem className="px-4 sm:hidden">
          <p className="text-sm">
            Strona {page} z {pagesCount}
          </p>
        </PaginationItem>
        {page !== pagesCount && (
          <PaginationItem>
            <PaginationNext
              href={constructPageUrl(page + 1, goToId)}
              iconOnly
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

const constructPageUrl = (page: number, goToId?: string) =>
  `/aktualnosci?page=${page}${goToId ? `#${goToId}` : ""}`

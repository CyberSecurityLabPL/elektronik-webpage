"use client"
import {
  getExactSubstitution,
  getMoreSubstitutions,
} from "@/app/(pages)/zastepstwa/subsServer"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import { formatDateWeek, renderMarkdown } from "@/lib/utils"
import { CalendarDays, Loader2 } from "lucide-react"
import { useState } from "react"
import Header from "./Header"
import PageEnterAnimation from "./PageEnterAnimation"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export default function SubstitutionsDisplay({
  page,
  initial,
}: {
  page: any
  initial: any
}) {
  const sub = initial.data[0].attributes
  const meta = initial.meta.pagination.pageCount

  const [prevLoading, setPrevLoading] = useState(false)
  const [nextLoading, setNextLoading] = useState(false)

  const [curPage, setCurPage] = useState(1)
  const [data, setData] = useState(sub)

  const [exact, setExact] = useState(false)

  function change(backwards: boolean) {
    const page = backwards ? curPage - 1 : curPage + 1
    setCurPage(page)
    if (backwards) {
      setNextLoading(true)
      setPrevLoading(false)
    } else {
      setPrevLoading(true)
      setNextLoading(false)
    }
    getMoreSubstitutions(page)
      .then((res: any) => {
        setData(res.data[0].attributes)
      })
      .finally(() => {
        setNextLoading(false)
        setPrevLoading(false)
      })
  }

  function getExact(date: Date) {
    setExact(true)
    const today = new Date();
    
    if (today.toDateString() === date.toDateString()) {
        setExact(false);
    }
    getExactSubstitution(date)
      .then((res: any) => {
        if (res && res.data && res.data.length == 0) {
          setData({
            date: date,
            substitutions: "Brak Zastępstw!",
            createdAt: null,
          })
        } else {
          setData(res.data[0].attributes)
        }
      })
      .finally(() => {
        setNextLoading(false)
        setPrevLoading(false)
      })
      .catch((error) => {
        // Obsługa błędu, np. wyświetlenie komunikatu o błędzie
        console.error("Wystąpił błąd podczas pobierania zastępstw", error)
      })
  }

  function reset() {
    const page = 1
    setCurPage(page)
    setExact(false)
    getMoreSubstitutions(page)
      .then((res: any) => {
        setData(res.data[0].attributes)
      })
      .finally(() => {
        setNextLoading(false)
        setPrevLoading(false)
      })
  }

function DatePicker({ curData, getExact }: { curData: any; getExact: any }) {
  const [open, setOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState<Date | undefined>(new Date(curData.date))

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-center px-2">
          <div className="text-md flex max-w-[54rem] items-center justify-center gap-2 text-pretty stroke-primary-foreground text-center leading-relaxed text-primary-foreground hover:cursor-pointer hover:stroke-primary hover:text-primary sm:text-lg lg:text-xl">
            {formatDateWeek(curData?.date ?? curData?.createdAt)}
            <Button
              className="px-3 py-2 hover:stroke-primary sm:px-2"
              variant={"secondary"}
            >
              <CalendarDays className="flex size-5 items-center justify-center stroke-inherit sm:size-6" />
            </Button>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={(d: Date | undefined) => {
            if (d !== undefined) {
              const date: Date = d!
              curData.date = date
              setOpen(false)
              getExact(date)
              setCurrentDate(date)
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
  
}




  return (
    <>
      <Header title={page?.heading ?? "Zastępstwa"}>
        <DatePicker curData={data} getExact={getExact} />
      </Header>
      <PageEnterAnimation className="flex w-full max-w-7xl flex-col items-center justify-center gap-4">
        <div className="h-fit min-h-96 w-full rounded-lg border bg-background p-4 shadow-sm">
          <div className="px-2 text-xs sm:text-base">
            {renderMarkdown(
              data?.substitutions ?? "Couldn't load content!",
              markdownOptions
            )}
          </div>
        </div>
        <div
          className={`${exact ? "flex items-center justify-center" : "grid grid-cols-2"} gap-x-4`}
        >
          {exact ? (
            <>
              <Button
                onClick={() => {
                  reset()
                }}
                variant={"outline"}
              >
                {"Wróć"}
              </Button>
            </>
          ) : (
            <>
              {prevLoading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {"Proszę Czekać"}
                </Button>
              ) : (
                <Button
                  disabled={!(curPage < meta)}
                  onClick={() => {
                    change(false)
                  }}
                  variant={"outline"}
                >
                  {"< Poprzednie"}
                </Button>
              )}
              {nextLoading ? (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {"Proszę Czekać"}
                </Button>
              ) : (
                <Button
                  disabled={!(curPage > 1)}
                  onClick={() => {
                    change(true)
                  }}
                  variant={"outline"}
                >
                  {"Następne >"}
                </Button>
              )}
            </>
          )}
        </div>
      </PageEnterAnimation>
    </>
  )
}



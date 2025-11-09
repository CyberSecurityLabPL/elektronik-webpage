"use client"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import {
  cn,
  formatDateWeek,
  formatStrapiDate,
  renderMarkdown,
} from "@/lib/utils"
import { CalendarDays, CalendarIcon, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Header from "./Header"
import PageEnterAnimation from "./PageEnterAnimation"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Skeleton } from "./ui/skeleton"

export default function SubstitutionsDisplay({
  page,
  initial,
  date,
}: {
  page: any
  initial: any
  date: any
}) {
  const sub = initial.data[0]
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const addDay = (date: string) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + 1)

    while (newDate.getDay() === 0 || newDate.getDay() === 6) {
      newDate.setDate(newDate.getDate() + 1)
    }
    return formatStrapiDate(newDate)
  }

  const subDay = (date: string) => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() - 1)
    while (newDate.getDay() === 0 || newDate.getDay() === 6) {
      newDate.setDate(newDate.getDate() - 1)
    }
    return formatStrapiDate(newDate)
  }

  const handleDayChange = (newDate: string) => {
    setIsLoading(true)
    router.push(`/zastepstwa/${newDate}`)
  }

  let text =
    sub?.substitutions ??
    "Brak zaplanowanych zastępstw na ten dzień bądź jeszcze ich nie wpisano."
  if (text === "") {
    text = "Brak Zastępstw"
  }

  return (
    <>
      <Header title={page?.heading ?? "Zastępstwa"}>
        <DatePicker selectedDay={date} onDateChange={handleDayChange} />
      </Header>
      <PageEnterAnimation className="flex w-full max-w-7xl flex-col items-center justify-center gap-4">
        <div className="h-fit min-h-96 w-full rounded-lg border bg-background p-4 shadow-sm">
          {isLoading ? (
            <div className="flex flex-col gap-4 p-2">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-6 w-2/3" />
              <Skeleton className="h-6 w-3/5" />
            </div>
          ) : (
            <div className="p-2 text-xs sm:text-base">
              {renderMarkdown(text, markdownOptions)}
            </div>
          )}
        </div>
        <div className="flex gap-2 ">
          <Button
            variant="outline"
            onClick={() => handleDayChange(subDay(date))}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Poprzednie"
            )}
          </Button>
          <Button
            variant="outline"
            onClick={() => handleDayChange(addDay(date))}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Następne"
            )}
          </Button>
        </div>
      </PageEnterAnimation>
    </>
  )
}

function DatePicker({
  selectedDay,
  onDateChange,
}: {
  selectedDay: string | Date
  onDateChange: (date: string) => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <div className="mt-3">
        <span className="text-2xl text-foreground">
          {formatDateWeek(selectedDay)}
        </span>
      </div>
      <PopoverTrigger asChild>
        <div className=" flex w-full max-w-7xl justify-center px-2 sm:justify-start ">
          <div className="text-md relative right-2  mt-2 w-fit    gap-4 text-pretty stroke-primary-foreground text-center leading-relaxed text-primary-foreground hover:cursor-pointer hover:stroke-primary hover:text-primary sm:text-lg lg:text-xl">
            <Button
              variant={"outline"}
              className={cn("w-[240px] pl-3 text-left font-normal")}
            >
              <span>Wybierz date</span>

              <CalendarIcon className="ml-auto h-5 w-5 opacity-70" />
            </Button>
          </div>
        </div>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          disabled={(date) => {
            const day = date.getDay()
            return day === 0 || day === 6
          }}
          mode="single"
          selected={new Date(selectedDay)}
          onSelect={(date: Date | undefined) => {
            if (date) {
              setOpen(false)
              onDateChange(formatStrapiDate(date))
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

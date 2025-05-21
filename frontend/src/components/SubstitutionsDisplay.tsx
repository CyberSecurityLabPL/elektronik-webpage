"use client"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import { formatDateWeek, formatStrapiDate, renderMarkdown } from "@/lib/utils"
import { CalendarDays } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Header from "./Header"
import PageEnterAnimation from "./PageEnterAnimation"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

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

  return (
    <>
      <Header title={page?.heading ?? "Zastępstwa"}>
        <DatePicker selectedDay={date} />
      </Header>
      <PageEnterAnimation className="flex w-full max-w-7xl flex-col items-center justify-center gap-4">
        <div className="h-fit min-h-96 w-full rounded-lg border bg-background p-4 shadow-sm">
          <div className="px-2 text-xs sm:text-base">
            {renderMarkdown(
              sub?.substitutions ?? "Nie udało się załadować zawartości.",
              markdownOptions
            )}
          </div>
        </div>
      </PageEnterAnimation>
    </>
  )
}

function DatePicker({ selectedDay }: { selectedDay: string | Date }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <div className="flex items-center justify-center px-2">
          <div className="text-md flex max-w-[54rem] items-center justify-center gap-2 text-pretty stroke-primary-foreground text-center leading-relaxed text-primary-foreground hover:cursor-pointer hover:stroke-primary hover:text-primary sm:text-lg lg:text-xl">
            {formatDateWeek(selectedDay)}
            <Button
              className="px-3 py-2 hover:stroke-primary sm:px-2"
              variant={"secondary"}
            >
              <CalendarDays className="flex size-5 items-center justify-center stroke-inherit sm:size-6" />
            </Button>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
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
              router.push(`/zastepstwa/${formatStrapiDate(date)}`)
            }
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

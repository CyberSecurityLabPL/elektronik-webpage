"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn, formatDateWeek, formatStrapiDate } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
  date: string
}

export default function SubstitutionsNavigation({ date }: Props) {
  return (
    <>
      <ChangeDayButton type="previous" date={date} />
      <DatePicker date={date} />
      <ChangeDayButton type="next" date={date} />
    </>
  )
}

{
  /* <div className=" flex w-full max-w-7xl justify-center px-2 sm:justify-start ">
          <div className="text-md relative right-2  mt-2 w-fit gap-4 text-pretty stroke-primary-foreground text-center leading-relaxed text-primary-foreground hover:cursor-pointer hover:stroke-primary hover:text-primary sm:text-lg lg:text-xl">
            */
}

function DatePicker({ date }: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={() => setOpen(!open)}>
      <PopoverTrigger asChild>
        <div>
          <div className="md:hidden">
            <Button variant={"outline"} className="cursor-pointer">
              <CalendarIcon className="h-5 w-5 opacity-70" />
            </Button>
          </div>
          <div className="hidden md:block">
            <Button
              variant={"outline"}
              className="w-60 cursor-pointer pl-3 text-left font-normal"
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
          selected={new Date(date)}
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

function ChangeDayButton({
  type,
  date,
}: {
  type: "previous" | "next"
  date: string
}) {
  const router = useRouter()

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
    router.push(`/zastepstwa/${newDate}`)
  }

  return (
    <Button
      variant="outline"
      className="cursor-pointer"
      onClick={() =>
        handleDayChange(type === "previous" ? subDay(date) : addDay(date))
      }
    >
      {type === "previous" ? "Poprzedni" : "Następny"}
    </Button>
  )
}

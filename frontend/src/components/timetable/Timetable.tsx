"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/planTable"
import { cn, getDayOfWeek } from "@/lib/utils"
import Link from "next/link"
import { useScreenSize } from "@/lib/hooks/useScreenSize"
import { format } from "date-fns"
import { pl } from "date-fns/locale/pl"
import React from "react"
import { Clock } from "lucide-react"

export default function Timetable({ data }: { data: any }) {
  const lessons: any = Object.values(data.lessons)
  const screenSize = useScreenSize()
  const [activeDay, setActiveDay] = React.useState(0)

  if (screenSize.breakpoints.large || screenSize.breakpoints.medium)
    return (
      <main className="relative flex w-full flex-grow p-2 max-[1200px]:overflow-x-scroll min-[1200px]:justify-center">
        <Table className="overflow-hidden rounded-xl shadow-xl">
          <TableHeader>
            <TableRow className="timetable-row h-11">
              <TableHead className="timetable-headcell relative w-11">
                #
              </TableHead>
              <TableHead className="timetable-headcell w-[150px]">
                Godz
              </TableHead>
              <TableHead className="timetable-headcell w-[200px]">
                Poniedziałek
              </TableHead>
              <TableHead className="timetable-headcell w-[200px]">
                Wtorek
              </TableHead>
              <TableHead className="timetable-headcell w-[200px]">
                Środa
              </TableHead>
              <TableHead className="timetable-headcell w-[200px]">
                Czwartek
              </TableHead>
              <TableHead className="timetable-headcell w-[200px]">
                Piątek
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.hours.map((hour: any, index: number) => (
              <TableRow key={index} className="flex">
                <TableCell className="flex w-11 items-center justify-center bg-primary p-0 text-xl text-white">
                  {index}
                </TableCell>
                <TableCell className="timetable-cell w-[150px] font-bold tracking-wider">
                  {hour}
                </TableCell>
                {lessons.map((_: any, idx: number) => (
                  <TableCell
                    key={idx}
                    className={cn(
                      "timetable-cell flex flex-col gap-0 text-xs",
                      lessons[idx][index].isDouble ? "text-[.85em]" : ""
                    )}
                  >
                    {lessons[idx][index].isEmpty ? (
                      <span></span>
                    ) : (
                      lessons[idx][index].classes.map(
                        (lesson: any, idx: number) => (
                          <div key={idx}>{formatLesson(lesson, data.type)}</div>
                        )
                      )
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    )
  return (
    <main className="relative flex w-full flex-grow flex-col items-center justify-start self-start py-4 sm:p-4">
      <div className="flex w-full justify-center gap-1 sm:gap-2">
        {Array(5)
          .fill("")
          .map((_, i) => (
            <DayTab
              key={`DayTab${i}`}
              day={format(getDayOfWeek(i + 1), "EEEEEE.", { locale: pl })}
              date={format(getDayOfWeek(i + 1), "dd.MM", { locale: pl })}
              onClick={() => {
                setActiveDay(i)
              }}
              active={i === activeDay}
            />
          ))}
      </div>
      <div className="grid w-full gap-2 px-2 pb-16 pt-2">
        {data.hours.map((hour: any, index: number) => {
          const lesson = lessons[activeDay][index]

          if (!lesson.isEmpty)
            return (
              <HourCard
                key={`HourCard${index}`}
                index={index}
                lesson={lesson}
                hours={hour}
              />
            )
        })}
      </div>
    </main>
  )
}

function HourCard({
  index,
  lesson,
  hours,
  props,
}: {
  index: number
  lesson: any
  hours: string
  props?: React.HTMLProps<HTMLDivElement>
}) {
  return (
    <div className="flex w-full items-center justify-between p-2" {...props}>
      <div className="flex items-center justify-center gap-4">
        <div className="flex h-full items-center justify-center p-2 text-center text-lg font-semibold text-primary">
          {index}
        </div>
        <div className="flex flex-col items-start justify-center gap-0">
          {lesson.classes.map((_: any, i: number) => (
            <div className="text-sm font-semibold" key={`ls${i}${index}`}>
              {_.subject.name}
            </div>
          ))}
          <span className="flex items-center justify-center gap-1 text-xs font-light text-[#6B7280]">
            <Clock className="h-3 w-3" />
            {hours}
          </span>
        </div>
      </div>
      <div className="flex min-w-12 flex-row justify-start gap-1">
        <span className="flex flex-col gap-1">
          {lesson.classes.map((cl: any, i: number) => (
            <TimetableLink
              key={`ls-link-${i}${index}`}
              name={cl.teacher.shortname}
              id={cl.teacher.id}
            />
          ))}
        </span>
        <span className="flex flex-col gap-1">
          {lesson.classes.map((cl: any, i: number) => (
            <TimetableLink
              key={`ls-link-${i}${index}`}
              name={cl.classroom.shortname}
              id={cl.classroom.id}
            />
          ))}
        </span>
      </div>
    </div>
  )
}

function DayTab({
  active,
  date,
  day,
  onClick,
}: {
  active: boolean
  date: string
  day: string
  onClick: () => void
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-1 rounded-xl px-[0.9rem] py-[0.5rem] text-center",
        active ? "bg-primary text-white" : "bg-secondary text-black"
      )}
      onClick={onClick}
    >
      <span className="text-sm font-medium">{day}</span>
      <span className="text-xs">{date}</span>
    </div>
  )
}

function formatLesson(lesson: any, type: string) {
  switch (type) {
    case "class":
      return (
        <>
          <span>{lesson.subject.name}</span>{" "}
          <TimetableLink
            name={lesson.teacher.shortname}
            id={lesson.teacher.id}
          />{" "}
          <TimetableLink
            name={lesson.classroom.shortname}
            id={lesson.classroom.id}
          />
        </>
      )
    case "teacher":
      return (
        <>
          <TimetableLink name={lesson.class.shortname} id={lesson.class.id} />
          {lesson.class.group ? "-" + lesson.class.group : ""}{" "}
          <span>{lesson.subject.name}</span>{" "}
          <TimetableLink
            name={lesson.classroom.shortname}
            id={lesson.classroom.id}
          />
        </>
      )

    case "classroom":
      return (
        <>
          <TimetableLink
            name={lesson.teacher.shortname}
            id={lesson.teacher.id}
          />{" "}
          <TimetableLink name={lesson.class.shortname} id={lesson.class.id} />
          {lesson.class.group ? "-" + lesson.class.group : ""}{" "}
          <span>{lesson.subject.name}</span>
        </>
      )
    default:
      return <div>Wystapił nieoczekiwany błąd. Spróbuj ponownie później.</div>
  }
}

function TimetableLink({ name, id }: { name: string; id: string }) {
  return (
    <Link
      href={`?id=${id}`}
      className="text-left text-xs font-medium text-[#6B7280] underline sm:font-normal sm:text-primary-foreground"
    >
      {name.slice(0, 12) + (name.length > 12 ? "..." : "")}
    </Link>
  )
}

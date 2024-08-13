import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/planTable"
import { cn } from "@/lib/utils"
import Link from "next/link"
console.log(process.env.OUTPUT)

export default async function Timetable({ data }: { data: any }) {
  const lessons: any = Object.values(data.lessons)

  return (
    <main className="relative flex w-full flex-grow max-[1200px]:overflow-x-scroll min-[1200px]:justify-center">
      <Table className="overflow-hidden rounded-xl shadow-xl">
        <TableHeader>
          <TableRow className="timetable-row h-11">
            <TableHead className="timetable-headcell relative w-11">
              #
            </TableHead>
            <TableHead className="timetable-headcell w-[150px]">Godz</TableHead>
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
    <Link href={`?id=${id}`} className="text-primary-foreground underline">
      {name}
    </Link>
  )
}

"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/planTable"
import useTimetable from "@/state/timetable-state"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { SelectContext } from "../Providers"
import { config } from "@/config"
import Link from "next/link"

export default function Timetable() {
  const router = useRouter()
  const { data: timetable, isPending, isError, error } = useTimetable()
  const { timetableName, timetableId, timetableType } =
    useContext(SelectContext)

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const currentTimetable = timetable.plany[timetableId]

  function handleClick(name: string, type: string) {
    const id = (timetable?.legend as any)[type]?.options.filter((v: any) => {
      const realName: string = v.name

      const shortName =
        type === "nauczyciel"
          ? realName.slice(realName.indexOf("(") + 1, realName.indexOf(")"))
          : type === "sala"
            ? realName.slice(0, realName.indexOf(" "))
            : realName
      if (name.includes("-")) name = name.slice(0, name.indexOf("-"))

      return shortName.toLowerCase().trim() === name.toLowerCase().trim()
    })[0]?.value

    router.push(
      "/plan?timetableId=" + (timetable?.legend as any)[type]?.id + id
    )
  }

  return (
    <main className="relative flex flex-grow items-center justify-center">
      <div className="absolute bottom-0 right-0 px-2 text-gray-700">
        Wolisz stary wygląd planu?{" "}
        <Link
          href={"https://zseis.zgora.pl/plan"}
          className="text-blue-500 underline"
        >
          Kliknij tutaj
        </Link>
      </div>
      <Table
        className="absolute left-1/2 top-1/2 h-[315px] w-[950px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-xl"
        key={timetableName}
      >
        <TableHeader>
          <TableRow className="timetable-row h-11">
            <TableHead className="timetable-headcell relative w-11">
              {" "}
              {/* before:absolute before:-bottom-5 before:-right-4 before:w-5 before:h-5 before:bg-primary*/}
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
        {(() => {
          const rows = []
          function formatLesson(n: number, day: number) {
            let lessonString = currentTimetable?.tydzien[day].lekcje[n]?.data
            config.formattingExceptions.forEach((v) => {
              if (lessonString?.replaceAll(v.initialValue, v.valueToReplace))
                lessonString = lessonString?.replaceAll(
                  v.initialValue,
                  v.valueToReplace
                )
            })

            const doublelesson = lessonString?.replace(/\n/g, " ")

            const isDoubleLesson = doublelesson !== lessonString

            if (timetableType === "oddział") {
              const splitted = isDoubleLesson
                ? doublelesson?.split(" ")
                : lessonString?.split(" ")

              if (!(splitted?.length > 0)) return ""

              const lekcja = <span>{splitted[0]}</span>
              const nauczyciel = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[1], "nauczyciel")}
                >
                  {splitted[1]}
                </span>
              )
              const sala = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[2], "sala")}
                >
                  {splitted[2]}
                </span>
              )

              if (!isDoubleLesson)
                return (
                  <>
                    {lekcja} {nauczyciel} {sala}
                  </>
                )

              const lekcja2 = <span>{splitted[3]}</span>
              const nauczyciel2 = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[4], "nauczyciel")}
                >
                  {splitted[4]}
                </span>
              )
              const sala2 = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[5], "sala")}
                >
                  {splitted[5]}
                </span>
              )

              return (
                <div className="flex flex-col items-center p-0 text-[10px]">
                  <div>
                    {lekcja} {nauczyciel} {sala}
                  </div>
                  <div>
                    {lekcja2} {nauczyciel2} {sala2}
                  </div>
                </div>
              )
            } else if (timetableType === "nauczyciel") {
              // const splitted =
              //   currentTimetable?.tydzien[day].lekcje[n]?.data?.split(" ")

              const splitted = isDoubleLesson
                ? doublelesson?.split(" ")
                : lessonString?.split(" ")

              if (!(splitted?.length > 0)) return ""

              const klasa = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[0], "oddział")}
                >
                  {splitted[0]}
                </span>
              )
              const lekcja = <span>{splitted[1]}</span>
              const sala = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[2], "sala")}
                >
                  {splitted[2]}
                </span>
              )

              return (
                <>
                  {klasa} {lekcja} {sala}
                </>
              )
            } else if (timetableType === "sala") {
              // const splitted =
              //   currentTimetable?.tydzien[day].lekcje[n]?.data?.split(" ")

              const splitted = isDoubleLesson
                ? doublelesson?.split(" ")
                : lessonString?.split(" ")

              if (!(splitted?.length > 0)) return ""

              const klasa = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[1], "oddział")}
                >
                  {splitted[1]}
                </span>
              )
              const lekcja = <span>{splitted[2]}</span>
              const nauczyciel = (
                <span
                  className="cursor-pointer text-blue-500 underline"
                  onClick={() => handleClick(splitted[0], "nauczyciel")}
                >
                  {splitted[0]}
                </span>
              )

              return (
                <>
                  {nauczyciel} {klasa} {lekcja}
                </>
              )
            }
          }
          for (let i = 0; i < 10; i++) {
            const el = (
              <TableRow key={`row${i}`} className="flex">
                <TableCell className="flex w-11 items-center justify-center bg-primary p-0 text-xl text-white">
                  {i}
                </TableCell>
                <TableCell className="timetable-cell w-[150px] font-bold tracking-wider">
                  {timetable.plany["o9"].godziny[i]}
                </TableCell>
                <TableCell className="timetable-cell">
                  {formatLesson(i, 0)}
                </TableCell>
                <TableCell className="timetable-cell ">
                  {formatLesson(i, 1)}
                </TableCell>
                <TableCell className="timetable-cell ">
                  {formatLesson(i, 2)}
                </TableCell>
                <TableCell className="timetable-cell ">
                  {formatLesson(i, 3)}
                </TableCell>
                <TableCell className="timetable-cell ">
                  {formatLesson(i, 4)}
                </TableCell>
              </TableRow>
            )
            rows.push(el)
          }

          return <TableBody className="timetable-body ">{rows}</TableBody>
        })()}
      </Table>
    </main>
  )
}

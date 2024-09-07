import Footer from "@/components/timetable/Footer"
import Headbar from "@/components/timetable/Headbar"
import Timetable from "@/components/timetable/Timetable"
import { buttonVariants } from "@/components/ui/button"
import { REVALIDATE, timetableConfig } from "@/config"
import { validateTimetableSearchParams } from "@/lib/utils"
import Link from "next/link"

const initialId = timetableConfig.initialId

export const revalidate = REVALIDATE

const page = async ({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) => {
  let idToPass = initialId

  const areParamsValid = validateTimetableSearchParams(searchParams)

  if (areParamsValid) {
    idToPass = searchParams!["id"] as string
  }

  try {
    const timetableInfoRes = await fetch(
      `${process.env.TIMETABLE_API_URL!}/info`
    )

    // console.log("api:", timetableInfoRes)

    const timetableInfoData = await timetableInfoRes.json()

    const isIdValid = timetableInfoData.some(
      (item: { id: string }) => item.id === idToPass
    )

    if (!isIdValid) idToPass = initialId

    const targetRes = await fetch(
      `${process.env.TIMETABLE_API_URL!}/timetables/${idToPass}`
    )

    const targetData = await targetRes.json()

    let name = targetData.name
    const group = name.slice(0, 3)
    const regexPattern = /^\d[A-Z][a-z]$/
    if (regexPattern.test(group)) {
      name = name
        .split(" ")
        .map((word: string, index: number) =>
          index === 1 ? word.slice(1) : word
        )
        .join(" ")
    }
    const timetableValidDateRes = await fetch(
      `${process.env.TIMETABLE_API_URL!}/dates`
    )
    const timetableValidDate = await timetableValidDateRes.json()
    return (
      <div className="flex h-full flex-col">
        <Headbar name={name} />
        <div className="relative grid flex-grow place-items-center">
          <Timetable data={targetData} />
          <div className="absolute bottom-0 left-0 w-1/3 p-1 text-xs sm:w-auto md:text-base">
            Plan obowiązuje od:{" "}
            <span className="font-medium text-primary">
              {timetableValidDate.date}
            </span>
          </div>
          <div className="absolute bottom-0 right-0 w-1/3 p-1 text-right text-xs sm:w-auto sm:text-center md:text-base">
            Wolisz stary wygląd planu?{" "}
            <Link
              href={
                process.env.VULCAN_TIMETABLE_URL ??
                "https://zseis.zgora.pl/plan"
              }
              className="text-primary-foreground underline"
            >
              Kliknij tutaj
            </Link>
          </div>
        </div>
        <Footer timetableItems={timetableInfoData} />
      </div>
    )
  } catch (error) {
    return (
      <div className="grid h-screen w-screen place-items-center">
        <div className="flex flex-col gap-4">
          <span>
            Nie udało się pobrać planu zajęć. Spróbuj skorzystać ze{" "}
            <Link
              href={
                process.env.VULCAN_TIMETABLE_URL ??
                "https://zseis.zgora.pl/plan"
              }
              className="text-primary-foreground underline"
            >
              starego planu
            </Link>
            .
          </span>
          <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
            Powrót na strone główną.
          </Link>
        </div>
      </div>
    )
  }
}

export default page

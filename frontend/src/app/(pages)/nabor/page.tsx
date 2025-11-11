import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getRecruitments } from "@/lib/api"
import { Metadata } from "next"
import Link from "next/link"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getRecruitments()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getRecruitments()

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data?.heading ?? "Nabór"}
        subtitle={data?.description ?? "Opis"}
      />
      <PageEnterAnimation className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="px-4 text-center text-xs font-semibold lg:text-lg">
            Jesteś już zdecydowany wypełnij wniosek o przyjęcie już teraz!
          </div>
          <Button asChild variant={"outline"}>
            <Link
              href={
                "https://nabor.pcss.pl/zielonagora/szkolaponadpodstawowa/start"
              }
            >
              Wypełnij wniosek Online
            </Link>
          </Button>
          <div className="flex items-center ">
            <p className="text-xs lg:text-base">
              Jesli potrzebujesz dokumentów znajdziesz je&nbsp;
              <Link className="text-primary underline" href="/dokumenty">
                tutaj
              </Link>
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col  gap-4 ">
          {data.recruitment_groups.map((recruitments: any, index: number) => (
            <div key={index} className="pb-6">
              <div className="flex w-full flex-col justify-between px-2 pb-2 sm:flex-row sm:gap-24 sm:px-0 md:w-auto">
                <h1 className=" text-base font-semibold sm:text-2xl md:text-3xl">
                  {recruitments.title}
                </h1>
              </div>

              <div className="flex w-full justify-center ">
                <Table className="font-medium">
                  <TableHeader>
                    <TableRow className="hc:text-black">
                      <TableHead className="text-center">Zawód</TableHead>
                      <TableHead className="text-center">
                        Ilość miejsc
                      </TableHead>
                      <TableHead className="text-center">
                        Liczba oddziałów
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-xs lg:text-base">
                    {recruitments.recruitments.map(
                      (row: any, index: number) => (
                        <TableRow
                          className="w-full bg-background  hover:bg-muted/90 hover:underline hover:hc:bg-background-muted"
                          key={row.profession + index}
                        >
                          <TableCell className="p-0 font-medium">
                            <Link
                              href={row.link}
                              className="block h-full w-full p-4"
                            >
                              {row.profession}
                            </Link>
                          </TableCell>
                          <TableCell className="p-0 text-center">
                            <Link
                              href={row.link}
                              className="block h-full w-full p-4 "
                            >
                              {row.spaces}
                            </Link>
                          </TableCell>
                          <TableCell className="p-0 text-center">
                            <Link
                              href={row.link}
                              className="block h-full w-full p-4"
                            >
                              {row.groups}
                            </Link>
                          </TableCell>
                        </TableRow>
                      )
                    ) ?? "Brak danych!"}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      </PageEnterAnimation>
    </main>
  )
}

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
        </div>
        <div className="flex w-full flex-col items-center  gap-4 px-2">
          <div className="flex w-full flex-col justify-between sm:flex-row sm:gap-24  md:w-auto ">
            <div className="flex items-center text-base font-semibold sm:text-2xl md:text-3xl">
              Technikum 5 letnie
            </div>
            <div className="flex items-center ">
              <p className="text-xs lg:text-base">
                Jesli potrzebujesz dokumentów znajdziesz je&nbsp;
                <Link className="text-primary underline" href="/dokumenty">
                  tutaj
                </Link>
              </p>
            </div>
          </div>
          <div className="flex w-fit justify-center overflow-auto">
            <Table className="font-medium">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[400px] text-center">Zawód</TableHead>
                  <TableHead className="text-center">Ilość miejsc</TableHead>
                  <TableHead className="text-center">
                    Liczba oddziałów
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs lg:text-base">
                {data.recruitments?.map((row: any, index: number) => (
                  <TableRow
                    className="bg-background hover:bg-muted/90"
                    key={row.profession + index}
                  >
                    <TableCell className="font-medium">
                      {row.profession}
                    </TableCell>
                    <TableCell className="text-center">{row.spaces}</TableCell>
                    <TableCell className="text-center">{row.groups}</TableCell>
                  </TableRow>
                )) ?? "Brak danych!"}
              </TableBody>
            </Table>
          </div>
        </div>
      </PageEnterAnimation>
    </main>
  )
}

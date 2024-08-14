import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getApprenticeships } from "@/lib/api"
import { formatDateYear } from "@/lib/utils"
import { Metadata } from "next"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getApprenticeships()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

const page = async () => {
  const data = await getApprenticeships()

  return (
    <div className="w-full">
      <Header
        title={data?.heading ?? "Praktyki Zawodowe"}
        subtitle={
          data.description ??
          "Tutaj zobaczysz harmonogram praktyk na rok 2023/2024. Sprawdź kiedy twoja klasa ma praktyki"
        }
      />
      <PageEnterAnimation className="flex w-full items-center justify-center">
        <div className="w-full  pt-8 md:w-3/4 xl:w-1/2">
          <Table className="bg-white pt-8 ">
            <TableHeader className="text-xs md:text-base ">
              <TableRow className="grid grid-cols-3">
                <TableHead className="text-bold flex items-center justify-center ">
                  Klasa
                </TableHead>
                <TableHead className="text-bold flex items-center justify-center ">
                  Specjalizacja
                </TableHead>
                <TableHead className="text-bold flex items-center justify-center ">
                  Termin Praktyk
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.apprenticeships.map((row: any, index: number) => (
                <TableRow
                  key={row.class + index}
                  className="grid grid-cols-3 hover:bg-muted/90"
                >
                  <TableCell className="flex items-center justify-center text-center">
                    {row.class}
                  </TableCell>
                  <TableCell className="flex items-center justify-center text-center">
                    {row.specialization}
                  </TableCell>
                  <TableCell className="flex items-center justify-center text-center">
                    {formatDateYear(row.date)}
                  </TableCell>
                </TableRow>
              )) ?? "Brak danych"}
            </TableBody>
          </Table>
        </div>
      </PageEnterAnimation>
    </div>
  )
}

export default page

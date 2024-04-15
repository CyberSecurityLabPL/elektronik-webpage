import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function Page(){
    const year = new Date().getFullYear()

    const data = [
        {
            name: "Technik Programista",
            spaces: 23,
            teams: 1
        },
        {
            name: "Technik Mechatronik",
            spaces: 23,
            teams: 1
        },
        {
            name: "Technik Elektryk",
            spaces: 23,
            teams: 1
        },
        {
            name: "Technik Informatyk",
            spaces: 23,
            teams: 1
        }
    ]

    return (
        <main className="flex items-center flex-col w-full">
            <Header
                title={`Nabór ${year}`}
                subtitle={`Rozpoczynamy nabór na rok szkolny ${year}! Nasza szkoła to miejsce, gdzie każdy uczeń znajdzie wsparcie, inspirację i możliwości rozwoju. Dołącz do naszej społeczności, gdzie stawiamy na aktywne metody nauczania, rozwój kompetencji społecznych i kreatywność. Niezależnie od zainteresowań - zapraszamy do aplikowania i dołączenia do naszego wspaniałego środowiska edukacyjnego!`}
            >
                <div className="mt-8 text-lg font-semibold">Jesteś już zdecydowany wypełnij wniosek o przyjęcie już teraz!</div>
                <Button asChild variant={"outline"} className="m-4">
                    <Link href={'https://nabor.pcss.pl/zielonagora/szkolaponadpodstawowa/start'}>Wypełnij wniosek Online</Link>
                </Button>
            </Header>
            <div className="w-1/2 flex flex-col">
                <div className="flex justify-between my-8">
                    <div className="text-3xl font-semibold flex items-center">Technikum 5 letnie</div>
                    <div className="flex items-center">Jesli potrzebujesz dokumentów znajdziesz je&nbsp;<Link className="text-primary hover:underline" href="/dokumenty">tutaj</Link></div>
                </div>
                <div>
                    <Table className="font-medium">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-center w-[400px]">Zawód</TableHead>
                                <TableHead className="text-center">Ilość miejsc</TableHead>
                                <TableHead className="text-center">Liczba oddziałów</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.map(row => (
                                <TableRow className="bg-background hover:bg-muted/90" key={row.name}>
                                    <TableCell className="font-medium">{row.name}</TableCell>
                                    <TableCell className="text-center">{row.spaces}</TableCell>
                                    <TableCell className="text-center">{row.teams}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            
        </main>
    )
}
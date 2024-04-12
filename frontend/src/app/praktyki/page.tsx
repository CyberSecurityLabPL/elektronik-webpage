import React from 'react'
import Header from '@/components/Header'
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

  const data = [
    {
      klasa: "4th",
      specjalizacja: "technik programista",
      termin: "30.10-24.11.2024",
    },
    {
      klasa: "2tf",
      specjalizacja: "technik mechatronik",
      termin: "02.10-27.10.2024",
    },
    {
      klasa: "3tc",
      specjalizacja: "technik elektronik",
      termin: "02.10-27.10.2024",
    },
    {
      klasa: "5ta",
      specjalizacja: "technik informatyk",
      termin: "03.04-30.04.2024",
    },
    {
      klasa: "5tg",
      specjalizacja: "technik pojazdów samochodowych",
      termin: "26.02-22.03.2024",
    },
    {
      klasa: "3tf",
      specjalizacja: "mechanik pojazdów samochodowych",
      termin: "03.04-30.04.2024",
    },
    {
      klasa: "4tb",
      specjalizacja: "technik urządzeń i sys. energetyki odnawialnej",
      termin: "27.11-22.12.2024",
    },
  ]

const page = () => {
  return (
    <div>
      <Header title="Praktyki Zawodowe" subtitle="Tutaj zobaczysz harmonogram praktyk na rok 2023/2024.
        Sprawdź kiedy twoja klasa ma praktyki"/>
        <div className='flex justify-center items-center'>
        <div className= 'pt-8 w-3/4'>
            <Table className='bg-white pt-8 '>
                <TableHeader className=''>
                    <TableRow className='grid grid-cols-3'>
                    <TableHead className='flex items-center justify-center text-lg text-bold'>Klasa</TableHead>
                    <TableHead className='flex items-center justify-center text-lg text-bold'>Specjalizacja</TableHead>
                    <TableHead className='flex items-center justify-center text-lg text-bold'>Termin Praktyk</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row) => (
                    <TableRow key={row.klasa} className="grid grid-cols-3 hover:bg-muted/90">
                        <TableCell className="flex items-center justify-center text-center">{row.klasa}</TableCell>
                        <TableCell className='flex items-center justify-center text-center'>{row.specjalizacja}</TableCell>
                        <TableCell className='flex items-center justify-center text-center'>{row.termin}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </div>
    </div>
  )
}

export default page

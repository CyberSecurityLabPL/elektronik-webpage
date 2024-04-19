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
import { getApprenticeships } from '@/lib/api'
import { formatDateYear } from '@/lib/utils'

const page = async () => {
  const data = await getApprenticeships()

  return (
    <div>
      <Header title={data.heading ?? "Praktyki Zawodowe"} subtitle={data.description ?? "Tutaj zobaczysz harmonogram praktyk na rok 2023/2024. Sprawdź kiedy twoja klasa ma praktyki"} />
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
                    {data?.apprenticeships.map((row: any, index: number) => (
                    <TableRow key={row.class+index} className="grid grid-cols-3 hover:bg-muted/90">
                        <TableCell className="flex items-center justify-center text-center">{row.class}</TableCell>
                        <TableCell className='flex items-center justify-center text-center'>{row.specialization}</TableCell>
                        <TableCell className='flex items-center justify-center text-center'>{formatDateYear(row.date)}</TableCell>
                    </TableRow>
                    )) ?? "Brak danych"}
                </TableBody>
            </Table>
        </div>
    </div>
    </div>
  )
}

export default page

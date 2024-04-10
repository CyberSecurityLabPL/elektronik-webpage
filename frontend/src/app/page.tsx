import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center gap-4">
      <div className="w-4/5">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Klasa</TableHead>
            <TableHead>Specjalizacj</TableHead>
            <TableHead>Termin praktyk</TableHead>
            <TableHead className="text-right">sdsa</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>


      
      
      </div>
      
    </main>
  );
}

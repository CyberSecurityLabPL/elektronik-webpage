import Header from "@/components/Header"
import { ReactNode } from "react"
import FileCard from "@/components/cards/FIleCard"

export default function DocumentsPage() {
  const data = [
    {
      id: 0,
      name: "Dzienniczek_Praktyk.txt",
      date: "05.04.2024 - 13:23",
      type: "txt",
    },
    {
      id: 1,
      name: "Dzienniczek_Praktyk.pdf",
      date: "05.04.2024 - 13:23",
      type: "pdf",
    },
    {
      id: 2,
      name: "Dzienniczek_Praktyk.csv",
      date: "05.04.2024 - 13:23",
      type: "csv",
    },
    {
      id: 3,
      name: "Dzienniczek_Praktyk.docx",
      date: "05.04.2024 - 13:23",
      type: "docx",
    },
    {
      id: 4,
      name: "Dzienniczek_Praktyk.pdf",
      date: "05.04.2024 - 13:23",
      type: "pdf",
    },
    {
      id: 5,
      name: "Dzienniczek_Praktyk.docx",
      date: "05.04.2024 - 13:23",
      type: "docx",
    },
  ]

  return (
    <main className="flex w-full flex-col items-center justify-around">
      <Header title="Dokumenty" />
      <div className="flex w-full flex-col items-center justify-center">
        <FileGroup title="Ostatnio Dodane">
          {data.map((item) => (
            <FileCard
              key={item.id}
              name={item.name}
              date={item.date}
              fileType={item.type}
              url=""
            />
          ))}
        </FileGroup>
        <FileGroup title="Nabór">
          {data.map((item) => (
            <FileCard
              key={item.id}
              name={item.name}
              date={item.date}
              fileType={item.type}
              url=""
            />
          ))}
        </FileGroup>
        <FileGroup title="Praktyki">
          {data.map((item) => (
            <FileCard
              key={item.id}
              name={item.name}
              date={item.date}
              fileType={item.type}
              url=""
            />
          ))}
        </FileGroup>
      </div>
    </main>
  )
}

function FileGroup({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <div className="flex w-full flex-col justify-center xl:w-3/4">
      <div className="flex w-full justify-center text-left text-2xl font-semibold text-slate-500 md:justify-start md:px-16 xl:px-0">
        {title}
      </div>
      <div className="flex items-center justify-center">
        <div className="grid gap-4 p-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  )
}

import Header from "@/components/Header"
import { ReactNode } from "react"
import FileCard from "@/components/cards/FIleCard"
import { getDocuments } from "@/lib/api"

export default async function DocumentsPage() {
  const data = await getDocuments()

  return (
    <main className="flex w-full flex-col items-center ">
      <Header title={data?.heading} />
      <div className="flex w-full flex-col items-center justify-center">
        {data.document_groups.map((item: any) => (
          <FileGroup key={item.title} title={item.title}>
            {item.documents.map((file: any) => (
              <FileCard
                key={file.name}
                name={file.name}
                date={file.date}
                fileType={file.file.ext}
                url={file.file.url}
              />
            ))}
          </FileGroup>
        ))}
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
    <div className="flex w-full flex-col justify-center xl:w-11/12">
      <div className="flex w-full justify-center text-left text-2xl font-semibold text-slate-500 md:justify-start md:px-16 xl:px-0">
        {title}
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="grid w-full gap-4  px-4 py-8  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  )
}

import FileCard from "@/components/cards/FIleCard"
import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { getDocuments } from "@/lib/api"
import { Metadata } from "next"
import { ReactNode } from "react"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getDocuments()

  return {
    title: seo?.metaTitle ?? "",
    description: seo?.metaDescription ?? "",
    keywords: seo?.keywords ?? "",
  }
}

export default async function DocumentsPage() {
  const data = await getDocuments()

  return (
    <main className="flex w-full flex-col items-center">
      <Header title={data?.heading} />
      <PageEnterAnimation className="flex w-full flex-col items-center justify-center">
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
      </PageEnterAnimation>
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
    <div className="mb-16 flex w-full flex-col justify-center">
      <div className="flex w-full justify-center text-left text-2xl font-semibold text-slate-500 md:justify-start md:px-16">
        {title}
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {children}
        </div>
      </div>
    </div>
  )
}

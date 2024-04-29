import Header from "@/components/Header"
import BookCard from "@/components/cards/BookCard"
import { getBooks } from "@/lib/api"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seo } = await getBooks()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getBooks()

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data.heading ?? "Example title"}
        subtitle={
          data.description ??
          "Wykaz podręczników dla klas I-V - przedmioty ogólnokształcące na rok szkolny 2023/2024:"
        }
      />
      <div className="flex flex-col items-center">
        {data?.book_groups.map((group: any) => (
          <div
            className="my-2 flex w-full flex-col items-center justify-center"
            key={group.title}
          >
            <div className="flex w-full justify-center py-2 text-xl font-semibold sm:justify-start lg:text-3xl">
              {group.title}
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {group.books?.map((book: any) => (
                <BookCard
                  key={book.title}
                  src={
                    book.image?.url
                      ? process.env.NEXT_PUBLIC_BACKEND_URL + book.image.url
                      : "/cards/matma.jpg"
                  }
                  src={
                    book.image?.url
                      ? process.env.NEXT_PUBLIC_BACKEND_URL + book.image.url
                      : "/cards/matma.jpg"
                  }
                  subject={book.subject}
                  title={book.title}
                  dist={book.distributor}
                  url={book.url ?? ""}
                />
              )) ?? "Brak książek!"}
            </div>
          </div>
        )) ?? "Brak danych"}
      </div>
    </main>
  )
}

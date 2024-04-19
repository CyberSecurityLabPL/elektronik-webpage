import Header from "@/components/Header"
import BookCard from "@/components/cards/BookCard"
import { getBooks } from "@/lib/api"

export default async function Page(){
    const data = await getBooks()

    return (
        <main className="flex items-center flex-col w-full">
            <Header title={data.heading} subtitle={data.description ??"Wykaz podręczników dla klas I-V - przedmioty ogólnokształcące na rok szkolny 2023/2024:"} />
            <div className="flex items-center flex-col">
                {data?.book_groups.map((group: any) => 
                    <div className="flex flex-col justify-center items-center w-11/12 my-2" key={group.title}>
                        <div className="flex justify-start w-full font-semibold text-xl lg:text-3xl">
                            {group.title}
                        </div>
                        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                            {group.books?.map((book: any) => 
                                <BookCard key={book.title} src={book.image ?? "/cards/matma.jpg"} subject={book.subject} title={book.title} dist={book.distributor} url={book.url ?? ""} />
                              ) ?? "Brak książek!"}
                        </div>
                    </div>
                ) ?? "Brak danych"}
            </div>
        </main>
    )
}
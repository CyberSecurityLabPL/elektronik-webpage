import Header from "@/components/Header"
import BookCard from "@/components/cards/BookCard"

export default function Page(){
    const data = [
        {
            title: "Książki dla technikum I klasa",
            books: [
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                },
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                },
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                },
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                }
            ]
        },
        {
            title: "Książki dla technikum II klasa",
            books: [
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                },
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                },
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                },
                {
                    subject: "Matematyka",
                    src: "/matma.jpg",
                    title: "Matematyka cz.I (zakres podstawowy i rozszerzony)",
                    dist: "Nowa Era"
                }
            ]
        }
    ]

    return (
        <main className="flex items-center flex-col w-full">
            <Header title="Podręczniki" subtitle="Wykaz podręczników dla klas I-V - przedmioty ogólnokształcące na rok szkolny 2023/2024:" />
            <div className="flex items-center flex-col">
                {data.map(group => 
                    <div className="flex flex-col justify-center items-center w-11/12 my-2" key={group.title}>
                        <div className="flex justify-start w-full font-semibold text-3xl">
                            {group.title}
                        </div>
                        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
                            {group.books.map(book => 
                                <BookCard key={book.title} src={book.src} subject={book.subject} title={book.title} dist={book.dist} />
                              )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}
import Header from "@/components/Header"
import { ReactNode } from "react"
import FileCard from "@/components/cards/FIleCard"

export default function DocumentsPage(){
    const data = [
        {id: 0, name: "Dzienniczek_Praktyk.txt", date: "05.04.2024 - 13:23", type: "txt"},
        {id: 1, name: "Dzienniczek_Praktyk.pdf", date: "05.04.2024 - 13:23", type: "pdf"},
        {id: 2, name: "Dzienniczek_Praktyk.csv", date: "05.04.2024 - 13:23", type: "csv"},
        {id: 3, name: "Dzienniczek_Praktyk.docx", date: "05.04.2024 - 13:23", type: "docx"},
        {id: 4, name: "Dzienniczek_Praktyk.pdf", date: "05.04.2024 - 13:23", type: "pdf"},
        {id: 5, name: "Dzienniczek_Praktyk.docx", date: "05.04.2024 - 13:23", type: "docx"},
    ]

    return (
        <main className="flex justify-around items-center flex-col w-full">
            <Header title="Dokumenty" />
            <div className="flex justify-center flex-col w-full items-center">
                <FileGroup title="Ostatnio Dodane" >
                    {data.map(item => <FileCard key={item.id} name={item.name} date={item.date} fileType={item.type} url="" />)}
                </FileGroup>
                <FileGroup title="Nabór" >
                    {data.map(item => <FileCard key={item.id} name={item.name} date={item.date} fileType={item.type} url="" />)}
                </FileGroup>
                <FileGroup title="Praktyki" >
                    {data.map(item => <FileCard key={item.id} name={item.name} date={item.date} fileType={item.type} url="" />)}
                </FileGroup>
            </div>
        </main>
    )
}

function FileGroup({title, children} : {title: string, children?: ReactNode}) {
    return (
        <div className="flex justify-center flex-col w-3/4">
            <div className="flex justify-start text-left w-full text-slate-500 font-semibold text-2xl">{title}</div>
            <div className="flex justify-center items-center">
                <div className="grid gap-4 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 p-8">
                    {children}
                </div>
            </div>
        </div>
    )
}
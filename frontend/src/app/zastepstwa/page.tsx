import Header from "@/components/Header"

export default function SubstitutionPage(){
    const data = {
        date: "Czwartek 11.04.2024",
        arr: ["Mariusz Kmieckowiak", "Adam Malysz", "Kacper Slipko"]
    }

    return (
        <main className="flex justify-center items-center flex-col w-full">
            <Header title="Zastępstwa" subtitle={data.date} />
            <div className="min-h-96 h-fit w-3/4 my-12 p-2 bg-background border rounded-lg shadow-sm">
                <div className="text-2xl font-semibold m-2">Dzisiaj nieobecni nauczyciele</div>
                <div>
                    <SubstitutionList arr={data.arr} />
                </div>
            </div>
        </main>
    )
}

function SubstitutionList({arr} : {arr: string[]}) {
    return (
        <ul className="m-4 ml-8 list-disc">
            {arr.map(item => 
                <li key={item}>{item}</li>
            )}
        </ul>
    )
}
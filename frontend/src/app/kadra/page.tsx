import Header from "@/components/Header"
import WorkerCard from "@/components/WorkerCard"

export default function Page() {
    const data = [
        {
            titles: "mgr, inż",
            name: "Sigma Slipko",
            src: "/slipko.png",
            position: "Nauczyciel",
            description: "Przedmioty elektroniczne i informatyczne, plan lekcji oraz arkusz organizacji pracy szkoły.",
            duty: "Dyżur: Poniedziałek 7.50 - 14.50"
        },
        {
            titles: "mgr, inż",
            name: "Sigma Slipko",
            src: "/slipko.png",
            position: "Nauczyciel",
            description: "Najwiekszy sigma w szkole ",
            duty: "Dyżur: Poniedziałek 7.50 - 14.50"
        },
        {
            titles: "mgr, inż",
            name: "Sigma Slipko",
            src: "/slipko.png",
            position: "Nauczyciel",
            description: "Przedmioty elektroniczne i informatyczne, plan lekcji oraz arkusz organizacji pracy szkoły.",
            duty: "Dyżur: Poniedziałek 7.50 - 14.50"
        },
        {
            titles: "mgr, inż",
            name: "Sigma Slipko",
            src: "/slipko.png",
            position: "Nauczyciel",
            description: "Przedmioty elektroniczne i informatyczne, plan lekcji oraz arkusz organizacji pracy szkoły.",
            duty: "Dyżur: Poniedziałek 7.50 - 14.50"
        }
    ]

    return (
        <main className="flex items-center flex-col w-full">
            <Header title="Kadra nauczycielska" subtitle="Poznaj naszą kadrę nauczycielską." />
            <div className="flex justify-center flex-wrap my-2">
                {data.map(item => 
                    <WorkerCard key={item.name} name={item.name} titles={item.titles} src={item.src} position={item.position} description={item.description} duty={item.duty} />
                )}
            </div>
        </main>
    )
}
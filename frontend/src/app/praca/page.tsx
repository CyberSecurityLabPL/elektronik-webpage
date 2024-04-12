import Header from "@/components/Header";
import JobCard from "@/components/JobCard";

export default function Page(){

    const data = [
        {
            name: "Architekt Pojazdów",
            src: "/car-job.jpg",
            minPay: 5000,
            maxPay: 6000,
            location: "Zielona Góra",
            badges: [
                "Architekt", "Inżynier"
            ]
        },
        {
            name: "Architekt Pojazdów",
            src: "/car-job.jpg",
            minPay: 5000,
            maxPay: 6000,
            location: "Zielona Góra",
            badges: [
                "Architekt", "Inżynier"
            ]
        }
    ]

    return (
        <main className="flex items-center flex-col w-full">
            <Header title="Oferty Pracy" subtitle="Oferty pracy dla absolwentów naszej szkoły." />
            <div className="flex justify-center items-center flex-col mt-4">
                {data.map(item => <JobCard key={item.name} name={item.name} src={item.src} minPay={item.minPay} maxPay={item.maxPay} location={item.location} badges={item.badges} />)}
            </div>
        </main>
    )
}
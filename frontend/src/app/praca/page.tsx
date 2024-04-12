import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import JobDialog from "@/components/JobDialog";

export default function Page(){

    const data = [
        {
            name: "Architekt Pojazdów",
            src: "/car-job.jpg",
            minPay: 5000,
            maxPay: 6000,
            location: "Zielona Góra",
            date: "10.05.2019r",
            company: "EXPONDO Zielona Góra",
            badges: [
                "Architekt", "Inżynier"
            ],
            tasks: [
                "Przygotowywanie analiz, raportów oraz prognoz na podstawie danych gromadzonych w systemach wewnętrznych oraz w oparciu o źródła zewnętrzne",
                "Opracowywanie raportów z wyników i procesów sprzedażowych w oparciu o zagraniczne strony www",
                "Gromadzenie danych oraz tworzenie rekomendacji i prognoz w oparciu o pozyskane dane",
                "Monitorowanie działań konkurencji firmy"
            ],
            reqs: [
                "Posiadających dobrą znajomość języka niemieckiego",
                "Jeżeli znasz dodatkowo język angielski - to będzie dodatkowy plus!",
                "Z umiejętnością analitycznego myślenia, kojarzenia faktów i wyciągania logicznych wniosków",
                "Posiadających dobrą znajomość MS Excel - to m.in. na tym programie będziesz pracować"
            ]
        },
        {
            name: "Informatyk",
            src: "/pc-image.jpg",
            minPay: 4000,
            maxPay: 7000,
            location: "Zielona Góra",
            date: "10.05.2019r",
            company: "NOVITA     Zielona Góra",
            badges: [
                "Informatyk", "Inżynier"
            ],
            tasks: [
                "Przygotowywanie analiz, raportów oraz prognoz na podstawie danych gromadzonych w systemach wewnętrznych oraz w oparciu o źródła zewnętrzne",
                "Opracowywanie raportów z wyników i procesów sprzedażowych w oparciu o zagraniczne strony www",
                "Gromadzenie danych oraz tworzenie rekomendacji i prognoz w oparciu o pozyskane dane",
                "Monitorowanie działań konkurencji firmy"
            ],
            reqs: [
                "Posiadających dobrą znajomość języka niemieckiego",
                "Jeżeli znasz dodatkowo język angielski - to będzie dodatkowy plus!",
                "Z umiejętnością analitycznego myślenia, kojarzenia faktów i wyciągania logicznych wniosków",
                "Posiadających dobrą znajomość MS Excel - to m.in. na tym programie będziesz pracować"
            ]
        }
    ]

    return (
        <main className="flex items-center flex-col w-full">
            <Header title="Oferty Pracy" subtitle="Oferty pracy dla absolwentów naszej szkoły." />
            <div className="flex justify-center items-center flex-col mt-4">
                {data.map(item => 
                    <JobDialog key={item.name} company={item.company} jobName={item.name} date={item.date} tasks={item.tasks} reqs={item.reqs}>
                        <JobCard name={item.name} src={item.src} date={item.date} minPay={item.minPay} maxPay={item.maxPay} location={item.location} badges={item.badges} />
                    </JobDialog>
                )}
            </div>
        </main>
    )
}
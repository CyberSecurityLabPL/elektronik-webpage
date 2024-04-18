import Header from "@/components/Header";
import JobCard from "@/components/cards/JobCard";
import JobDialog from "@/components/JobDialog";
import { getJobs } from "@/lib/api";

export default async function Page(){
    const data = await getJobs()

    return (
        <main className="flex items-center flex-col w-full">
            <Header title={data?.heading ?? "Oferty Pracy"} subtitle={data?.description ?? "Oferty pracy dla absolwentów naszej szkoły."} />
            <div className="flex justify-center items-center flex-col mt-4">
                {data?.jobs.map((item: any) => 
                    <JobDialog key={item.name} company={item.company} jobName={item.name} date={item.date} tasks={item.tasks} reqs={item.requirements}>
                        <JobCard name={item.name} src={item.image} date={item.date} minPay={item.minPay} maxPay={item.maxPay} location={item.location} badges={item.badges} />
                    </JobDialog>
                ) ?? "Couldn't get Jobs"}
            </div>
        </main>
    )
}
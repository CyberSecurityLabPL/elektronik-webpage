import Header from "@/components/Header"
import WorkerCard from "@/components/cards/WorkerCard"
import { getTeachers } from "@/lib/api"

export default async function Page() {
    const data = await getTeachers()
    // console.log(data);
    

    return (
        <main className="flex items-center flex-col w-full">
            <Header title="Kadra nauczycielska" subtitle="Poznaj naszą kadrę nauczycielską." />
            <div>
                {data?.teacher_groups.map((group:any) => (
                    <div key={group.title}>
                        <h1>{group.title}</h1>
                        <div className="flex justify-center flex-wrap my-2">
                        {group.teachers.map((teacher:any) => 
                            <WorkerCard 
                                key={teacher.fullname} 
                                name={teacher.fullname} 
                                titles={teacher.titles} 
                                src={teacher.image.url ?? ""} 
                                position={teacher.position} 
                                description={teacher.description} 
                                duty={teacher?.duty ?? "Zawsze"} 
                            />
                        )}
                        </div>
                    </div>
                )) ?? "Brak danych"}
            </div>
        </main>
    )
}
import Header from "@/components/Header"
import WorkerCard from "@/components/cards/WorkerCard"
import { getTeachers } from "@/lib/api"

export default async function Page() {
  const data = await getTeachers()

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title="Kadra nauczycielska"
        subtitle="Poznaj naszą kadrę nauczycielską."
      />
      <div>
        {data?.teacher_groups.map((group: any) => (
          <div key={group.title}>
            <h1 className="my-4 text-2xl font-semibold">{group.title}</h1>
            <div className="gap-4 flex flex-wrap justify-center">
              {group.teachers.map((teacher: any) => (
                <WorkerCard
                  key={teacher.fullname}
                  name={teacher.fullname}
                  titles={teacher.titles}
                  src={teacher.image.url ?? ""}
                  position={teacher.position}
                  description={teacher.description}
                  duty={teacher?.duty ?? "Zawsze"}
                />
              ))}
            </div>
          </div>
        )) ?? "Brak danych"}
      </div>
    </main>
  )
}

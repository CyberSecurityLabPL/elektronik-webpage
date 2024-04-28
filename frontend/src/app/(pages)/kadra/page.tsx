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
            <h1 className="my-4 flex justify-center py-5 text-2xl font-semibold sm:justify-start">
              {group.title}
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
              {group.teachers.map((teacher: any) => (
                <WorkerCard
                  key={teacher.fullname}
                  name={teacher.fullname}
                  titles={teacher.titles}
                  src={teacher.image?.url ?? "/default/person.jpg"}
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

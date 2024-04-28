import AchieveCard from "@/components/cards/AchieveCard"
import AchieveDialog from "@/components/AchieveDialog"
import Header from "@/components/Header"
import { getAchievements } from "@/lib/api"

export default async function Page() {
  const data = await getAchievements()

  return (
    <main className="flex w-full flex-col items-center">
      <Header title={data.heading} subtitle={data.description} />
      <div className="mt-4 flex flex-col items-center justify-center">
        {data?.achievements.map((item: any) => (
          <AchieveDialog
            key={item.title}
            date={item.date}
            opis={item.description}
            name={item.title}
          >
            <AchieveCard
              key={item.name}
              name={item.title}
              src={item.image?.url ?? "/default/trophy.jpg"}
              date={item.date}
              opis={item.description}
            />
          </AchieveDialog>
        ))}
      </div>
    </main>
  )
}

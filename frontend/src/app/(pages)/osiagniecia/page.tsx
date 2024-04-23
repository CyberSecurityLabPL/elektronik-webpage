import AchieveCard from "@/components/cards/AchieveCard"
import AchieveDialog from "@/components/AchieveDialog"
import Header from "@/components/Header"

export default function Page() {
  const data = [
    {
      name: "Wygrana w biegach",
      src: null,
      date: "10.05.2019r",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Złoty puchar w szachach",
      date: "10.05.2019r",
      opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]

  return (
    <main className="flex w-full flex-col items-center">
      <Header title="Osiągnięcia" subtitle="" />
      <div className="mt-4 flex flex-col items-center justify-center">
        {data.map((item) => (
          <AchieveDialog
            key={item.name}
            date={item.date}
            opis={item.opis}
            name={item.name}
          >
            <AchieveCard
              key={item.name}
              name={item.name}
              src={item?.src ?? "/default/trophy.svg"}
              date={item.date}
              opis={item.opis}
            />
          </AchieveDialog>
        ))}
      </div>
    </main>
  )
}

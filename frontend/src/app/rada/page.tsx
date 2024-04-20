import Header from "@/components/Header"
import ParentCard from "@/components/cards/ParentCard"
import { Button } from "@/components/ui/button"

export default function Page() {
  const data = [
    {
      titles: "mgr, inż",
      name: "Mariusz Kmiećkowiak",
      src: "/kmieciu.svg",
      position: "Nauczyciel",
      description:
        "Przedmioty elektroniczne i informatyczne, plan lekcji oraz arkusz organizacji pracy szkoły.",
    },
    {
      titles: "mgr, inż",
      name: "Mariusz Kmiećkowiak",
      src: "/kmieciu.svg",
      position: "Nauczyciel",
      description: "Najwiekszy sigma w szkole ",
    },
    {
      titles: "mgr, inż",
      name: "Mariusz Kmiećkowiak",
      src: "/kmieciu.svg",
      position: "Nauczyciel",
      description:
        "Przedmioty elektroniczne i informatyczne, plan lekcji oraz arkusz organizacji pracy szkoły.",
    },
    {
      titles: "",
      name: "Mariusz Kmiećkowiak",
      src: "/kmieciu.svg",
      position: "Rodzic",
      description:
        "Przedmioty elektroniczne i informatyczne, plan lekcji oraz arkusz organizacji pracy szkoły.",
    },
  ]

  return (
    <main className="flex items-center flex-col w-full">
      <Header
        title="Rada rodziców"
        subtitle="Regulamin Rady Rodziców przy Centrum Kształcenia Zawodowego i Ustawicznego ELEKTRONIK w Zielonej Górze"
      >
        <div>
          Numer konta rady rodziców:
          <span className="font-bold"> 75 1090 1535 0000 0001 4653 3475 </span>
        </div>
        <Button variant={"outline"} className="my-4">
          Zobacz regulamin
        </Button>
      </Header>
      <div className="flex justify-center flex-wrap my-2">
        {data.map((item) => (
          <ParentCard
            key={item.name}
            name={item.name}
            titles={item.titles}
            src={item.src}
            position={item.position}
            description={item.description}
          />
        ))}
      </div>
    </main>
  )
}

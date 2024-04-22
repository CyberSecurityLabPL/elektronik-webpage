import React from "react"
import NewsCard from "../cards/NewsCard"
import { Button } from "../ui/button"
import Link from "next/link"

interface CardDataProps {
  author: string
  date: string
  link: string
  description: string
  src: string
  title: string
}

const CardData: CardDataProps[] = [
  {
    author: "Mariusz Kmiećkowiak",
    date: "4 września 2023, Poniedziałek",
    link: "/aktualnosci",
    description:
      "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
    src: "/images/Cardtest.jpg",
    title: "Powstała nowa strona szkoły",
  },
  {
    author: "Mariusz Kmiećkowiak",
    date: "4 września 2023, Poniedziałek",
    link: "/aktualnosci",
    description:
      "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
    src: "/images/Cardtest.jpg",
    title: "Powstała nowa strona szkoły",
  },
  {
    author: "Mariusz Kmiećkowiak",
    date: "4 września 2023, Poniedziałek",
    link: "/aktualnosci",
    description:
      "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
    src: "/images/Cardtest.jpg",
    title: "Powstała nowa strona szkoły",
  },
  {
    author: "Mariusz Kmiećkowiak",
    date: "4 września 2023, Poniedziałek",
    link: "/aktualnosci",
    description:
      "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
    src: "/images/Cardtest.jpg",
    title: "Powstała nowa strona szkoły",
  },
  {
    author: "Mariusz Kmiećkowiak",
    date: "4 września 2023, Poniedziałek",
    link: "/aktualnosci",
    description:
      "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
    src: "/images/Cardtest.jpg",
    title: "Powstała nowa strona szkoły",
  },
  {
    author: "Mariusz Kmiećkowiak",
    date: "4 września 2023, Poniedziałek",
    link: "/aktualnosci",
    description:
      "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
    src: "/images/Cardtest.jpg",
    title: "Powstała nowa strona szkoły",
  },
]

export default function News() {
  return (
    <div className="z-10 flex w-full flex-col flex-wrap items-center justify-center gap-8 py-4">
      <h1 className="pt-8 text-center text-4xl font-semibold text-slate-800">
        Aktualności
      </h1>
      <div className=" flex w-full grid-cols-1 flex-col items-center justify-center gap-4 px-4 md:grid md:grid-cols-2 md:gap-8 md:px-8 lg:grid-cols-3 xl:w-fit">
        {CardData.slice(0, 3).map((news) => (
          <NewsCard key={news.title} {...news} />
        ))}
      </div>
      <Button asChild className="w-fit">
        <Link href="/aktualnosci">Zobacz więcej</Link>
      </Button>
    </div>
  )
}

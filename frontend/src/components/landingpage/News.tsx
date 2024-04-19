import React from 'react'
import NewsCard from '../cards/NewsCard'
import { Button } from '../ui/button'
import Link from 'next/link'

interface CardDataProps {
    author: string;
    date: string;
    link:string;
    description: string;
    src:string;
    title:string;
}

const CardData: CardDataProps[] = [
    {
        author: "Mariusz Kmiećkowiak",
        date: "4 września 2023, Poniedziałek",
        link:"/aktualnosci",
        description: "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
        src: "/images/Cardtest.jpg",
        title:"Powstała nowa strona szkoły"
    },
    {
        author: "Mariusz Kmiećkowiak",
        date: "4 września 2023, Poniedziałek",
        link:"/aktualnosci",
        description: "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
        src: "/images/Cardtest.jpg",
        title:"Powstała nowa strona szkoły"
    },
    {
        author: "Mariusz Kmiećkowiak",
        date: "4 września 2023, Poniedziałek",
        link:"/aktualnosci",
        description: "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
        src: "/images/Cardtest.jpg",
        title:"Powstała nowa strona szkoły"
    },
    {
        author: "Mariusz Kmiećkowiak",
        date: "4 września 2023, Poniedziałek",
        link:"/aktualnosci",
        description: "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
        src: "/images/Cardtest.jpg",
        title:"Powstała nowa strona szkoły"
    },
    {
        author: "Mariusz Kmiećkowiak",
        date: "4 września 2023, Poniedziałek",
        link:"/aktualnosci",
        description: "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
        src: "/images/Cardtest.jpg",
        title:"Powstała nowa strona szkoły"
    },
    {
        author: "Mariusz Kmiećkowiak",
        date: "4 września 2023, Poniedziałek",
        link:"/aktualnosci",
        description: "Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.",
        src: "/images/Cardtest.jpg",
        title:"Powstała nowa strona szkoły"
    }
]


export default function News() {
    return (
        <div className="flex flex-col justify-center items-center flex-wrap py-4 gap-8 w-full z-10">
            <h1 className='text-4xl text-center font-semibold text-slate-800 pt-8'>Aktualności</h1>
            <div className=' w-full flex flex-col justify-center items-center md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-8 md:gap-8 xl:w-fit'>
                {CardData.slice(0, 3).map((news) => (
                    <NewsCard 
                        key={news.title} 
                        {...news}
                        />
                ))}
            </div>
            <Button asChild className='w-fit'>
                <Link href="/aktualnosci">Zobacz więcej</Link>
            </Button>
        </div> 
    )
}


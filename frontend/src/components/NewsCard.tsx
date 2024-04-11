import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { CalendarPlus, User } from 'lucide-react'
import Link from 'next/link'

export default function NewsCard() {
    return (
        <Card className='w-96 h-96'>
            <CardContent className='h-3/5 bg-neutral-200 rounded-t-lg'>

            </CardContent>
            <CardHeader className='py-2 px-2 '>
                <CardTitle>
                    <Link href={'#'} className='hover:underline'>
                        Card Title

                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className=' px-2 max-h-[20%] text-xs overflow-hidden relative'>
                <div className='w-full h-full bg-gradient-to-b  from-transparent to-white absolute top-0 right-0 pointer-events-none' ></div>
                <p className=' '>Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole. Dotyczyły one zmiany na stanowisku dyrektora oraz utworzenia Branżowego Centrum Umiejętności.Dziś w Radiu Zielona Góra aż trzykrotnie zaprezentowano materiały o naszej szkole.</p>
            </CardContent>
            <CardFooter className='py-2 px-2 flex justify-between  text-xs'>
                <span className='flex gap-1 justify-center items-center'>
                    <CalendarPlus className='text-primary w-4 h-4'/>
                    <p>4 września 2023, Poniedziałek</p>
                </span>
                <span className='flex gap-1 justify-center items-center'>
                    <User className='text-primary w-4 h-4'/>
                    <p>Mariusz Kmiećkowiak</p>
                </span>
            </CardFooter>
        </Card>
    )
}

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

export default function NewsCard({author, src, date, opis, title, link} : {author: string, src: string, date: string, opis: string, title: string, link: string}) {
    return (
        <Card className='w-80 h-96 ml-8'>
                <Image src={src} alt={'www'} width="0" height="0" sizes="100vw" className="w-full rounded-t-md max-h-56"></Image>
            <CardHeader className='py-2 px-2 '>
                <CardTitle>
                    <Link href={link} className='hover:underline'>
                        {title}

                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className=' px-2 max-h-[20%] text-xs overflow-hidden relative'>
                <div className='w-full h-full bg-gradient-to-b  from-transparent to-white absolute top-0 right-0 pointer-events-none' ></div>
                <p className=' '>{opis}</p>
            </CardContent>
            <CardFooter className='py-2 px-2 flex justify-between  text-xs'>
                <span className='flex gap-1 justify-center items-center'>
                    <CalendarPlus className='text-primary w-4 h-4'/>
                    <p>{date}</p>
                </span>
                <span className='flex gap-1 justify-center items-center'>
                    <User className='text-primary w-4 h-4'/>
                    <p>{author}</p>
                </span>
            </CardFooter>
        </Card>
    )
}

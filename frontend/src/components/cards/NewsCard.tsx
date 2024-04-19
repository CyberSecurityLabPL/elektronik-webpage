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

interface NewsCardProps {
    author: string,
    src: string,
    date: string,
    description:string,
    title: string,
    link: string
}

export default function NewsCard({author, src, date, description, title, link} : NewsCardProps) {
    return (
        <Card className='w-72 sm:w-96 md:w-full xl:w-96 px-0 max-w-96'>    
            <CardContent className='h-48  bg-neutral-200 rounded-t-lg relative '>
                <Image src={src} alt='Image' fill className="rounded-t-md object-cover" />
            </CardContent>
            <CardHeader className=' pt-3 pb-0 px-3'>
                <CardTitle>
                    <Link href={link} className='hover:underline'>
                        {title}

                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent className='p-3 h-24 text-xs overflow-hidden relative'>
                <div className='w-full h-full bg-gradient-to-b  from-transparent to-white absolute top-0 right-0 pointer-events-none' ></div>
                <p className=' '>{description}</p>
            </CardContent>
            <CardFooter className=' py-3 px-3 flex justify-between  text-xs'>
                <span className='flex gap-2 justify-center items-center'>
                    <CalendarPlus className='text-primary w-4 h-4 sm:w-5 sm:h-5'/>
                    <p className='text-[8px] xl:text-[10px] '>{date}</p>
                </span>
                <span className='flex gap-2 justify-center items-center'>
                    <User className='text-primary w-4 h-4 sm:w-5 sm:h-5'/>
                    <p className='text-[8px] xl:text-[10px] '>{author}</p>
                </span>
            </CardFooter>
        </Card>
    )
}

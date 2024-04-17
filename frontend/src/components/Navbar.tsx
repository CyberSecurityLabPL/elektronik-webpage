"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Navigation } from './Navigation'
import { revalidateTag } from 'next/cache'




function Navbar({ data }: { data?: any }) {
    revalidateTag('navigation')
    

    return (
    <div className='h-32 w-full flex justify-between '>
        <div className='w-48 flex justify-center items-center px-4'>
            <Link href={'/'}>
                <Image src={'logo.svg'} width={80} height={60} alt='Logo' />
            </Link>
            
        </div>
        <div className='flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50'>
            {/* To-do navigation */}
            <Navigation />

        </div>
        <div className='flex gap-4 justify-center items-center px-8 '>
            <Button variant={'ghost'} asChild>
                <Link href={data.timetable.link ?? 'https://zseis.vercel.app/plan?timetableId=o18'}>{data.timetable.title ?? "Plan Lekcji"}</Link>
            </Button>
            <Button asChild>
                <Link href={data.gradebook.link ?? "https://uonetplus.vulcan.net.pl/zielonagora"}>{data.gradebook.title ?? "E-Dziennik"}</Link>
            </Button>
        </div>
        
    </div>
    )
}

export default Navbar
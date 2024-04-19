"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { revalidateTag } from 'next/cache'
import { Navigation } from './Navigation'
import MobileNavigation from './MobileNavigation'

export default  function Navbar({ data }: { data?: any }) {
    // revalidateTag('navigation')
    

    return (
    <div className='h-32 w-full flex justify-between relative '>
        <div className=' flex justify-center items-center px-8 '>
            <Link href={'/'} passHref>
                <Image src={'logo.svg'} width={80} height={60} alt='Logo'  />
            </Link>
            
        </div>
        <div className='hidden lg:flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50'>
            {/* To-do navigation */}
            <Navigation />

        </div>
        <div className='  px-8 flex justify-center items-center '>
            <div className='hidden lg:flex flex-col-reverse xl:flex-row  gap-4'>
            <Button variant={'secondary'} asChild>
                <Link href={'/'}>Plan Lekcji</Link>
                
                {/* <Link href={data.timetable.link ?? 'https://zseis.vercel.app/plan?timetableId=o18'}>{data.timetable.title ?? "Plan Lekcji"}</Link> */}
            </Button>
            <Button asChild>
                <Link href={'/'}>E-dziennik</Link>
                {/* <Link href={data.gradebook.link ?? "https://uonetplus.vulcan.net.pl/zielonagora"}>{data.gradebook.title ?? "E-Dziennik"}</Link> */}
            </Button>
            </div>
            <div className='flex lg:hidden justify-center items-center'>
                <MobileNavigation />
            </div>
        </div>
        
    </div>
    )
}
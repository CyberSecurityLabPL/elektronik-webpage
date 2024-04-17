import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
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
        <div className='flex justify-center items-center bg-slate-300'>
            {/* To-do navigation */}
            
        </div>
        <div className='flex gap-4 justify-center items-center px-4 '>
            <Button variant={'ghost'} asChild>
                <Link href={'https://zseis.vercel.app/plan?timetableId=o18'}>{data.attributes.timetable.title ?? "Plan Lekcji"}</Link>
            </Button>
            <Button asChild>
                <Link href="https://uonetplus.vulcan.net.pl/zielonagora">E-dziennik</Link>
            </Button>
        </div>
        
    </div>
    )
}

export default Navbar
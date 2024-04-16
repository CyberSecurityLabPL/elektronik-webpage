"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Navigation } from './Navigation'


function Navbar() {
    return (
    <div className='h-32 w-full flex justify-between relative '>
        <div className=' flex justify-center items-center px-8 '>
            <Link href={'/'} passHref>
                <Image src={'logo.svg'} width={80} height={60} alt='Logo'  />
            </Link>
            
        </div>
        <div className='flex justify-center items-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50'>
            {/* To-do navigation */}
            <Navigation />

        </div>
        <div className='flex gap-4 justify-center items-center px-8 '>
            <Button variant={'ghost'} asChild>
                <Link href={'https://zseis.vercel.app/plan?timetableId=o18'}>Plan lekcji</Link>
            </Button>
            <Button asChild>
                <Link href="https://uonetplus.vulcan.net.pl/zielonagora">E-dziennik</Link>
            </Button>
        </div>
        
    </div>
    )
}

export default Navbar
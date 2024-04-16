import React from 'react'
import NewsCard from '../NewsCard'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function News() {
    return (
        <div className="flex flex-col justify-center flex-wrap py-4 items-center gap-4 w-full  z-10">
            <h1 className='text-6xl font-semibold text-slate-800 py-8'>Aktualności</h1>
            <div className='grid grid-cols-3 gap-4'>
                <NewsCard author='Mariusz Kmieckowiak' date='' link='' opis='' src='/bg-overview.svg' title='' />
                <NewsCard author='Mariusz Kmieckowiak' date='' link='' opis='' src='/vercel.svg' title='' />
                <NewsCard author='Mariusz Kmieckowiak' date='' link='' opis='' src='/vercel.svg' title='' />
                <NewsCard author='Mariusz Kmieckowiak' date='' link='' opis='' src='/vercel.svg' title='' />
                <NewsCard author='Mariusz Kmieckowiak' date='' link='' opis='' src='/vercel.svg' title='' />
                <NewsCard author='Mariusz Kmieckowiak' date='' link='' opis='' src='/vercel.svg' title='' />
            </div>
            <Button asChild>
                <Link href="/aktualnosci">Zobacz więcej</Link>
            </Button>
        </div> 
    )
}


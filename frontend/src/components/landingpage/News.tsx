import React from 'react'
import NewsCard from '../NewsCard'
import { Button } from '../ui/button'

export default function News() {
    return (
        <div className="flex flex-col justify-center flex-wrap py-4 items-center gap-4 w-full  z-10">
            <h1 className='text-6xl font-semibold text-slate-800 py-8'>Aktualności</h1>
            <div className='grid grid-cols-3 gap-4'>
                <NewsCard  />
                <NewsCard  />
                <NewsCard  />
                <NewsCard  />
                <NewsCard  />
                <NewsCard  />
            </div>
            <Button>Zobacz więcej</Button>
        </div> 
    )
}


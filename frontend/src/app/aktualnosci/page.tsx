import Header from '@/components/Header'
import React from 'react'
import NewsCard from '@/components/cards/NewsCard'
import { getNews } from '@/lib/api'
import { format } from 'date-fns'
import { formatDate } from '@/lib/utils'

async function page() {
    const data = await getNews()
    console.log(data);
    

    return (
    <div>
        <Header title='Aktualności i ogłoszenia' subtitle='O to co dzieje się w naszej szkole!'   />
        <div className='flex flex-cols-3 gap-4'>
        {data.data.map((item: any, index: number) => 
            <NewsCard key={index + item.title} title={item.title} author={item.updatedBy ?? "Nikt"} description={item.description} link={"/aktualnosci/"+(index + 1)} date={formatDate(item.updatedAt)} src='' />
        )}
        </div>
    </div>
    )
}

export default page
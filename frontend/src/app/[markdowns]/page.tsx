import Header from '@/components/Header'
import React from 'react'


export default function page({ params }: { params: { markdowns: string } }) {
    return (
    <div>
        <Header
                title='Error 404'
                subtitle={'Strona '+params.markdowns+'  nie istnieje'}
            ></Header>
    </div>
    )
}

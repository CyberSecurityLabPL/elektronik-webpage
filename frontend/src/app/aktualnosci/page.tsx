import Header from '@/components/Header'
import React from 'react'
import NewsCard from '@/components/NewsCard'

const data = [
    {
        author: "Wygrana w biegach",
        src: "/typo.jpg",
        date: "10.05.2019r",
        title: 'Tytuł',
        link: '/kontakt',
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        author: "Wygrana w biegach",
        src: "/typo.jpg",
        date: "10.05.2019r",
        title: 'uuuuu',
        link: '/kontakt',
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        author: "Wygrana w biegach",
        src: "/typo.jpg",
        date: "10.05.2019r",
        title: 'rrrrrrr',
        link: '/kontakt',
        opis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

function page() {
    return (
    <div>
        <Header title='Aktualności i ogłoszenia' subtitle='O to co dzieje się w naszej szkole!'   />
        <div className='flex flex-cols-3'>
        {data.map((item => 
        <NewsCard author={item.author} src={item.src} date={item.date} opis={item.opis} title={item.title} link={item.link}></NewsCard>
))}
</div>
    </div>
    )
}

export default page
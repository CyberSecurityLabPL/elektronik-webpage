import Image from 'next/image'
import React from 'react'

export default function Sponsors() {
    return (
    <div className='w-full h-screen '>
        <div className='flex  justify-center items-center gap-8 '>
            <Image src={'/sponsors/ksc.svg'} alt='1' width={150} height={100}/>
            <Image src={'/sponsors/ekoenergetyka.svg'} alt='2' width={150} height={100}/>
            <Image src={'/sponsors/lapp.svg'} alt='3' width={150} height={100}/>
            <Image src={'/sponsors/relpol.svg'} alt='4' width={150} height={100}/>
            <Image src={'/sponsors/seven.svg'} alt='5' width={150} height={100}/>
        </div>
    </div>
    )
}
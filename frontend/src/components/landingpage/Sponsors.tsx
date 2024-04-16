import Image from 'next/image'
import React from 'react'

export default function Sponsors() {
    return (
    <div className='w-full h-[50vh]'>
        <div className='flex justify-center items-center gap-8'>
            <Image src={'/sponsors/ksc.svg'} alt='KSC' width={150} height={100}/>
            <Image src={'/sponsors/ekoenergetyka.svg'} alt='ekoenergetyka' width={150} height={100}/>
            <Image src={'/sponsors/lapp.svg'} alt='lapp' width={150} height={100}/>
            <Image src={'/sponsors/relpol.svg'} alt='relpol' width={150} height={100}/>
            <Image src={'/sponsors/seven.svg'} alt='seven' width={150} height={100}/>
        </div>
    </div>
    )
}
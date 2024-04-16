import Image from 'next/image'
import React from 'react'

export default function Overview() {
    return (
    <div className='bg-overview-bg bg-cover w-full py-48  '>
        <div className='w-full flex'>
            <div className="w-3/5 h-[50vh] relative">
                <Image alt="dyrektor" src={"/sections/school-photo.svg"} fill/>
            </div>
            <div className='w-2/5 flex flex-col  gap-8 text-white'>
                <h1 className='text-6xl font-bold '>Poznaj naszą szkołę</h1>
                <p className='text-2xl pr-8 text-right '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.</p>
            </div>
        </div>

        {/* Rebuild this maybe divide bg to two img */}
        <div className='w-full flex pt-80 pl-12'>
            
            <div className='w-2/5 flex flex-col  gap-6 text-white'>
                <h1 className='text-6xl font-bold '>Poznaj naszą szkołę</h1>
                <p className='text-2xl pr-8 text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.</p>
            </div>
            <div className="w-3/5 h-[50vh] relative">
                <Image alt="dyrektor" src={"/sections/hero.svg"} fill/>
            </div>
        </div>
    </div>
    )
}

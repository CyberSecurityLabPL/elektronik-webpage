import Image from 'next/image'
import React from 'react'

export default function Overview() {
    return (
    <div className=' w-full py-48  '>
        <div className='w-full h-screen flex justify-around items-center bg-yellow-blob bg-cover'>
            <div className="w-3/5 h-[50vh] relative">
                <Image alt="dyrektor" src={"/sections/overview-2.svg"} fill/>
            </div>
            <div className='w-2/5 flex flex-col  gap-8 pr-16 py-8 text-white'>
                <h1 className='text-6xl font-bold '>Poznaj naszą szkołę</h1>
                <p className='text-2xl  text-right'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.</p>
            </div>
        </div>

        {/* Rebuild this maybe divide bg to two img */}
        <div className='w-full h-screen flex justify-between items-center  bg-violet-blob bg-cover'>
            
            <div className='w-3/5 flex flex-col  gap-6 pl-16 py-8 text-white'>
                <h1 className='text-6xl font-bold '>Poznaj naszą szkołę</h1>
                <p className='text-2xl pr-16 text-left '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.</p>
            </div>
            <div className="w-3/5 h-[50vh] relative">
                <Image alt="dyrektor" src={"/sections/overview.svg"} fill/>
            </div>
        </div>
    </div>
    )
}

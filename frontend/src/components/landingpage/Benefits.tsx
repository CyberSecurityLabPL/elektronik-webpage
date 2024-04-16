import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Dribbble, Dumbbell, Headphones } from 'lucide-react'
import Image from 'next/image'

export default function Benefits() {
    return (
    <div className=' w-full  h-fit flex flex-col justify-center items-center'>
        <h1 className='text-5xl font-semibold text-slate-800 py-8'>Dlaczego warto wybrać Elektrona?</h1>
        <div className='grid w-10/12 grid-cols-6 grid-row-2 gap-4'>
            <Card variant={'glass'} className="col-span-2  h-72 ">
                <CardHeader>
                    <CardTitle className='text-3xl '>Świetna Lokalizacja</CardTitle>
                </CardHeader>
            </Card>
            <Card  className="col-span-4  h-72 flex relative">
                <CardContent className='w-3/5 h-full p-0 left-0  absolute '>
                    <div className='w-full h-full relative'>
                        <div className='w-full h-full bg-gradient-to-l from-white from-10% to-transparent absolute top-0 right-0 z-10'/>
                    <Image src={'/images/Cardtest.jpg'} alt='Image' fill className='rounded-l-lg' />
                    </div>
                </CardContent>
                <div className='w-4/5 absolute right-0 z-20 flex flex-col items-end'>
                    <CardHeader className='pb-1'>
                        <CardTitle className='text-3xl text-right'>Świeżo wyremontowana</CardTitle>
                    </CardHeader>
                    <CardContent className='text-right py-0  text-sm w-4/5     '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis.Vivamus tristique, odio et accumsan mollis.</p>
                    </CardContent>
                </div>
                
            </Card>
            <Card  className="col-span-4  h-72 flex relative">
                
                <div className='w-3/4 py-4 flex flex-col justify-end absolute left-0 bottom-0  z-20'>
                    <CardHeader className='pb-1 '>
                        <CardTitle className='text-3xl '>Przyjazna atmosfera</CardTitle>
                    </CardHeader>
                    <CardContent className=' py-0 text-sm w-4/5 '>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla.</p>
                    </CardContent>
                </div>
                <CardContent className='w-3/5 h-full p-0  absolute right-0'>
                    <div className='w-full h-full relative right-0'>
                    <div className='w-full h-full bg-gradient-to-r from-white from-10% to-transparent absolute top-0 right-0 z-10'/>
                    <Image src={'/images/Cardtest.jpg'} alt='Image' fill className='rounded-r-lg' />
                    </div>
                    
                </CardContent>
            </Card>
            <Card variant={'glass'} className="col-span-2  ">
                <CardHeader className='pb-1'>
                    <CardTitle className='text-3xl'>Ciekawe eventy</CardTitle>
                </CardHeader>
                <CardContent className=' pb-2    text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed est eu turpis porta fringilla. Vivamus tristique, odio et accumsan mollis. Vivamus tristique, odio et accumsan mollis.
                </CardContent>
                <CardFooter className=' text-xs px-0 py-4 flex justify-center gap-1   '>
                    <div className='flex flex-col justify-center items-center w-1/4'>
                        <Headphones className='text-primary' />
                        <span className='text-center '>Turnieje Esportowe</span>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/4'>
                        <Dumbbell className='text-primary' />
                        <span className='text-center'>Mocarny Elektroniarz</span>
                    </div>
                    <div className='flex flex-col justify-center items-center w-1/4'>
                        <Dribbble className='text-primary' />
                        <span className='text-center'>Turnieje sportowe</span>
                    </div>
                </CardFooter>
            
            </Card>
        </div>
    </div>
    )
}

import React from 'react'
import { Card } from '../ui/card'
import IconComponent from '../Icon'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from '../ui/separator'

function Map() {
    return (
    <div>
        
        <div className="w-full h-64 bg-repeat-x bg-wave-transition rotate-180 "></div>
            <div className='w-full h-screen bg-primary flex justify-center items-center px-24 py-4 relative'>
                <Card className='w-2/3 h-5/6'>
                    {/* map */}
                    
                </Card>
                <div className='w-1/3 h-5/6 text-white px-4'>
                    <h1 className='text-6xl font-semibold pb-4'>Znajdziesz nas tutaj</h1>
                    <div className='flex flex-col gap-4 '>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo temporibus mollitia sequi corporis dicta dolores placeat cumque.</p>
                        <p className='text-right'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam eligendi nostrum ad voluptatem repellat quis earum adipisci, rerum iste laborum hic odio iusto est.</p>
                    </div>
                </div>
                <Card className='w-2/3 h-16 absolute bottom-1 flex justify-between p-2 '>
                    <div className='flex justify-center items-center gap-2'>
                        <IconComponent icon={Phone} color='blue' IsCircle={true}  />
                        <div className='flex flex-col '>
                            <span className='text-slate-400'>Telefon</span>
                            <span className='font-semibold'>+48 684525100</span>
                        </div>
                    </div>
                    <Separator orientation='vertical'  />
                    <div className='flex justify-center items-center gap-2'>
                        <IconComponent icon={Mail} color='blue' IsCircle={true}  />
                        <div className='flex flex-col '>
                            <span className='text-slate-400'>E-mail</span>
                            <span className='font-semibold'>sekretariat@zseis.zgora.pl</span>
                        </div>
                    </div>
                    <Separator orientation='vertical'  />
                    <div className='flex justify-center items-center gap-2'>
                        <IconComponent icon={MapPin} color='blue' IsCircle={true}  />
                        <div className='flex flex-col '>
                            <span className='text-slate-400'>Adres</span>
                            <span className='font-semibold'>ul. Staszica 2 65-175 Zielona Góra</span>
                        </div>
                    </div>
                </Card>

                

            </div>
            <div className="w-full h-48 bg-repeat-x bg-splash-transition rotate-180 "></div>
    </div>
    )
}

export default Map
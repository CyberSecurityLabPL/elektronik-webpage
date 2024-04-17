import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import IconComponent from '../Icon'
import { Separator } from '../ui/separator'
import { Card } from '../ui/card'

export default function ContactCard() {
    return (
        // make this component responsive
        <Card className='w-fit h-16  flex justify-between p-2 px-4 gap-12 '>
            <div className='flex justify-center items-center gap-2'>
                <IconComponent icon={Phone} color='blue' IsCircle={true}  />
                <div className='flex flex-col '>
                    <span className='text-slate-400'>Telefon</span>
                    <span className='font-semibold'>+48 684 525 100</span>
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
    )
    
}


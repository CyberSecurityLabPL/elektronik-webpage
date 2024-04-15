import { ContactForm } from '@/components/ContactForm'
import Header from '@/components/Header'
import IconComponent from '@/components/Icon'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function page() {
    return (
        <div className='w-full flex flex-col  items-center '>
            <Header title={'Kontakt'} subtitle={'Zauważyłeś błąd? Chcesz się czegoś dowiedzieć? Skontaktuj się z nami!'} />

            <div className='flex flex-col  justify-center  items-center gap-6 w-full '>

            
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
            <Card className='w-2/4 '>
                <CardHeader>
                    <CardTitle>Wyślij wiadomość</CardTitle>
                    <CardDescription>Napisz do nas a my postaramy się odpisać jak najszybciej</CardDescription>
                </CardHeader>
                <CardContent>
                    <ContactForm />
                </CardContent>
                
            </Card>
            </div>
        </div>
    )
}

export default page
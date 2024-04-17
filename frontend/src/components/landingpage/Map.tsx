import GoogleMaps from '../maps/GoogleMaps'
import { Mail, MapPin, Phone } from 'lucide-react'
import IconComponent from '../Icon'
import { Separator } from '../ui/separator'
import { Card } from '../ui/card'

export default function Map() {
    const API_KEY = process.env.GOOGLE_MAPS_API_KEY!;

    return (
    <div>
        
        <div className="w-full h-64 bg-repeat-x bg-wave-transition rotate-180 "></div>
            <div className='w-full h-screen bg-primary flex flex-col gap-4  justify-center items-center px-6 py-4 relative'>
                <div className='w-full h-2/3 flex flex-col-reverse lg:flex-row justify-center items-center gap-8'>
                    <Card className='w-full h-full lg:w-3/5'>
                        <GoogleMaps apiKey={API_KEY} />
                    </Card>
                    <div className=' w-full lg:w-2/5 h-auto lg:h-3/5   text-white'>
                        <h1 className='text-5xl lg:text-6xl lg:text-left text-center font-semibold pb-4 lg:pb-8'>Znajdziesz nas tutaj</h1>
                        <div className='hidden lg:flex flex-col gap-4'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nemo temporibus mollitia sequi corporis dicta dolores placeat cumque.
                            </p>
                            <p className='text-right'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut nam eligendi nostrum ad voluptatem repellat quis earum adipisci, rerum iste laborum hic odio iusto est.
                            </p>
                        </div>
                    </div>
                </div>
                {/* absolute bottom-[15%]  translate-y-[15%] */}
                <Card className='w-fit flex flex-col md:flex-row md:justify-between md:absolute md:bottom-[15%] lg:h-16  md:translate-y-[15%] items-center p-2 px-4  gap-2 lg:gap-12 mx-4'>
                    <div className='flex justify-start items-center gap-2 py-2  w-full border-b-2 md:border-none'>
                        <IconComponent icon={Phone} color='blue' IsCircle={true}  />
                        <div className='flex flex-col '>
                            <span className='text-slate-400'>Telefon</span>
                            <span className='font-semibold'>+48 684525100</span>
                        </div>
                    </div>
                    <Separator orientation='vertical' className='hidden md:block'  />
                    <div className='flex justify-start items-center gap-2 py-2  w-full border-b-2 md:border-none'>
                        <IconComponent icon={Mail} color='blue' IsCircle={true}  />
                        <div className='flex flex-col '>
                            <span className='text-slate-400'>E-mail</span>
                            <span className='font-semibold'>sekretariat@zseis.zgora.pl</span>
                        </div>
                    </div>
                    <Separator orientation='vertical' className='hidden md:block'  />
                    <div className='flex justify-start items-center gap-2 py-2  w-full'>
                        <IconComponent icon={MapPin} color='blue' IsCircle={true}  />
                        <div className='flex flex-col '>
                            <span className='text-slate-400'>Adres</span>
                            <span className='font-semibold lg:text-nowrap'>ul. Staszica 2 65-175 Zielona Góra</span>
                        </div>
                    </div>
                </Card>
            </div>
            <div>
                
            </div>
            
            <div className="w-full h-48 bg-repeat-x bg-splash-transition rotate-180 "></div>
    </div>
    )
}
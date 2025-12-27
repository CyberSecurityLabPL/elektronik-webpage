import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

function ClassSection() {
  return (
    <div className='md:px-12 px-4 h-fit flex flex-col items-center relative'>
      
      <div className="w-full sm:w-3/5  pt-4 flex justify-center   sm:p-8   ">
        {/* Dolne zdjęcie */}
        <div className="h-full  w-full sm:w-11/12 -rotate-5  lg:block sm:-translate-x-4 p-3 rounded-4xl bg-gray-200">
          <div className="overflow-hidden  rounded-3xl bg-white ">
            <Image
              src="https://images.unsplash.com/photo-1761839258605-d1b118266ccc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Klasa"
              width={200}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 pt-4 items-end justify-center md:justify-end w-full lg:pr-12'>
        <h1 className=' font-sans text-4xl font-bold text-right text-foreground' >Wyremontowane Sale</h1>
        <p className='w-full lg:w-3/5 text-right '>Nasze sale po gruntownym remoncie łączą nowoczesny design z funkcjonalnością. Jasne, przestronne wnętrza, wygodne ławki oraz przemyślane oświetlenie tworzą idealne warunki do nauki i pracy w grupie. Każda sala została wyposażona w nowoczesny sprzęt multimedialny, dzięki czemu lekcje są bardziej angażujące, a nauczyciele mają większe możliwości prowadzenia zajęć.
        </p>
        
      </div>
        
      <div className=' hidden md:block absolute bottom-0 -right-20 -z-10 -rotate-16'>
        <Swoosh />
      </div>
      <div className='hidden md:block absolute -right-8 top-24 -z-10 rotate-12'>
        <Swoosh2 />
      </div>
    </div>
  )
}

export default ClassSection

function Swoosh(){
  return(
    <svg width="215" height="98" viewBox="0 0 215 98" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M202.483 84.6229C199.526 72.6209 191.363 15.4733 184.74 12.6108C178.116 9.74834 171.101 64.6734 162.74 67.4482C154.379 70.2231 149.65 32.2219 134.574 29.2599C119.498 26.2979 92.6288 51.2489 72.2834 49.6763C51.9381 48.1037 22.4655 24.7998 12.5019 19.8244" stroke="#9EAAFF" strokeWidth="25" strokeLinecap="round"/>
    </svg>

  )
}

function Swoosh2(){
  return(
    <svg width="359" height="104" viewBox="0 0 359 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5015 21.6485C20.2087 33.1402 46.981 88.6585 58.7446 90.5987C70.5083 92.5388 69.697 37.1697 83.0832 33.2894C96.4694 29.4091 113.101 66.4213 139.062 67.3168C165.023 68.2122 200.708 13.7176 235.188 12.5237C269.667 11.3298 328.091 56.5713 345.939 60.1531" stroke="#826dfc" strokeWidth="25" strokeLinecap="round"/>
    </svg>
  )
}
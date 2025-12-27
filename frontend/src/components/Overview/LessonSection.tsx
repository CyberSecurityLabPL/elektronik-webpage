import Image from 'next/image'
import React from 'react'

function LessonSection() {
  return (
    <div className='relative h-fit  px-4 sm:px-12'>
      <div className=" w-1/2 absolute  -right-140 overflow-visible p-8   ">
        {/* Dolne zdjęcie */}
        
        <div className='relative top-16'>
          {/* <Swoosh /> */}
        </div>
        
      </div>
      <div className='flex flex-col gap-4 items-end w-full '>
        <h1 className=' font-sans text-4xl font-bold text-right text-foreground' >Masa Dodatkowych Zajęć</h1>
        <p className='w-full lg:w-3/5 text-right '>Jako jedna z nielicznych szkół oferujemy duży wachlarz profili. Posiadamy kadre na bardzo wysokim poziomie wykształcenia jak i świeżo odnowione i wyposażone sale. Jako jedna z nielicznych szkół oferujemy duży wachlarz profili. Posiadamy kadre na bardzo wysokim poziomie wykształcenia jak i świeżo odnowione i wyposażone sale.</p>
        
      </div>
      <div className='hidden md:block absolute right-80 top-50 '>
        <Swoosh />
      </div>
      <div className='w-full flex justify-end gap-12 pt-16'>

        <div className='w-full sm:w-2/5 '>
          <div className="h-full  w-full sm:w-11/12 rotate-9 sm:-translate-x-4 p-3 rounded-4xl bg-gray-200">
            <div className="overflow-hidden rounded-3xl bg-white ">
              <Image
                src="https://images.unsplash.com/photo-1766469295724-193a0f282de4?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Klasa"
                width={200}
                height={300}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>


        <div className='w-2/5 hidden sm:block'>
          <div className="h-full  w-full sm:w-11/12 -rotate-9 sm:-translate-x-4 p-3 rounded-4xl bg-gray-200">
            <div className="overflow-hidden rounded-3xl bg-white ">
              <Image
                src="https://images.unsplash.com/photo-1766355583257-680e48b7189c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D"
                alt="Klasa"
                width={200}
                height={300}
                className="h-full w-full object-cover"
              />
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default LessonSection

function Swoosh(){
  return(
    <svg width="415" height="308" viewBox="0 0 415 308" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 222.941C34.6741 198.875 103.419 80.8192 123 78.7266C142.581 76.6339 116.886 224.585 130.489 210.385C144.091 196.184 206.913 -4.45741 225 14.2272C243.087 32.9118 193.842 259.486 220 290.727C246.158 321.967 378.233 160.844 402 137.227" stroke="#465DB9" stroke-width="26" stroke-linecap="round"/>
    </svg>
  )
}
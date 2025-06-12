import CarouselSponsor from '@/components/carouselSponsor'
import Header from '@/components/Header'
import PageEnterAnimation from '@/components/PageEnterAnimation'
import Image from 'next/image'
import React from 'react'


function Page() {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
        <Header
        title={"Sponsorzy Elektrona"}
        subtitle={
          ""
        }
      />
      <PageEnterAnimation className="w-full md:w-3/4 flex flex-col md:flex-row h-auto md:h-[600px] items-center justify-center rounded-lg border border-slate-200 px-4 md:px-0">
        <div className='w-full md:w-1/2 h-full flex flex-col p-4 md:p-8 md:px-12 relative items-center md:items-start'>
          
          <div className="relative w-64 md:w-96 h-64 md:h-96">
            <Image src={"/assets/sponsor.svg"} alt="Sponsorzy Elektrona" fill className='object-contain' />
          </div>
          <div className='text-center md:text-left'>
            <h1 className='text-3xl md:text-5xl font-bold md:w-3/4 pb-4'>Nasi kluczowi partnerzy</h1>
            <p className='text-sm md:text-base'>Współpraca z lokalnymi partnerami to dla nas kluczowy element rozwoju i wzmacniania jakości edukacji.</p>
          </div>
          
        </div>
        <div className='w-full md:w-1/2 h-[600px] px-2 md:px-4 mt-8 md:mt-0'>
          <CarouselSponsor />
        </div>
      </PageEnterAnimation>
      
    </main>
  )
}

export default Page
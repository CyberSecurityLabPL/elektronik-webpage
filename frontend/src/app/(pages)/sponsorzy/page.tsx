import CarouselSponsor from "@/components/carouselSponsor"
import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import Image from "next/image"
import React from "react"

function Page() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Header title={"Sponsorzy Elektrona"} subtitle={""} />
      <PageEnterAnimation className="flex h-auto w-full flex-col items-center justify-center rounded-lg px-4 lg:h-[600px] lg:w-3/4 lg:flex-row lg:px-0">
        <div className="relative flex h-full flex-1 flex-col items-center p-4 lg:items-start lg:p-8 lg:px-12">
          <div className="relative h-64 w-64 lg:h-96 lg:w-96">
            <Image
              src={"/assets/sponsor.svg"}
              alt="Sponsorzy Elektrona"
              fill
              className="object-contain"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="pb-4 text-3xl font-bold lg:max-w-sm lg:text-5xl">
              Nasi kluczowi partnerzy
            </h1>
            <p className="text-sm lg:text-base">
              Współpraca z lokalnymi partnerami to dla nas kluczowy element
              rozwoju i wzmacniania jakości edukacji.
            </p>
          </div>
        </div>
        <div className="mt-8 h-[360px] w-full min-w-0 px-2 sm:h-[600px] lg:mt-0 lg:min-w-[400px] lg:flex-1 lg:px-4">
          <CarouselSponsor />
        </div>
      </PageEnterAnimation>
    </main>
  )
}

export default Page

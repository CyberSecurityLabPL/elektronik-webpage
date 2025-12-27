"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionLanding"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"
import { InView } from "../motion/InView"
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import Image from "next/image"
// { data }: { data: any }
export default function Faq({ data }: { data: any }) {
  return (
    <div className="relative w-full">
      <div className="absolute top-60 -z-50   ">
        <Lines />
      </div>
      <div className="absolute top-10 -z-50 hidden md:block">
        <SwooshGray />
      </div>
      <div className="absolute top-130 left-70 -z-50 ">
        <SwooshGray2 />
      </div>
      <div className="absolute top-50 left-15 sm:top-60 md:left-5 lg:left-15 -z-50 ">
        <GrayQuestion />
      </div>
      <div className="absolute top-0 right-5  -z-50 hidden md:block ">
        <SwooshPurple />
      </div>
    <div
      id={data.sectionId}
      className="relative flex flex-col md:flex-row w-full items-center justify-between md:gap-8 lg:gap-16  p-8 md:p-16 lg:p-32 "
    >
      
      
      <div className="flex flex-col justify-center items-center gap-2 md:gap-6  w-full  md:w-1/3">
        <h1 className="text-6xl font-semibold">FAQ</h1>
        <Image
          src="/assets/Faq/QuestionMark.svg"   
          alt="FAQ sekcja"
          width={620}
          height={800}
          className="w-full h-50 md:h-80"
          priority
        />
      </div>


      <div className="">
      <Accordion type="single" collapsible className="w-full">
            <InView
              viewOptions={{ once: true, margin: "0px 0px -200px 0px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {data.questions.map((question: any, index: number) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                      filter: "blur(6px)",
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{ duration: 0.35 }}
                  className="border-b last:border-b-0 border-slate-100"
                >
                  <AccordionItem value={`value-${index}`} className="border-0 lg:py-2">
                    <AccordionTrigger className="text-sm sm:text-2xl py-4">
                      {question.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-lg text-muted-foreground">
                      {question.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </InView>
          </Accordion>
      </div>
    </div>
    </div>
  )
}

function Lines(){
  return(
    <svg width="1440" height="1273" viewBox="0 0 1440 1273" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.2447 260.944C22.2447 260.944 256.282 428.862 412.662 435.791C551.108 441.925 529.142 308 670.596 323.734C782.753 336.209 834.414 407.489 946.794 442.936C1170.51 513.504 1515.54 495.189 1515.54 495.189" stroke="#ECECEC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16"/>
    </svg>

  )
}

function SwooshGray(){
  return(
  <svg width="332" height="117" viewBox="0 0 332 117" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M319 103.521C310.794 88.3658 282.291 15.1459 269.766 12.5872C257.242 10.0284 258.106 83.0514 243.854 88.1689C229.602 93.2865 211.895 44.4732 184.255 43.2923C156.616 42.1113 114.724 79.5085 78.0146 81.0831C41.3053 82.6578 -16.9976 57.4639 -36 52.74" stroke="#EBEBEB" stroke-width="25" stroke-linecap="round"/>
  </svg>
  )
}

function SwooshGray2(){
  return(
    <svg width="148" height="116" viewBox="0 0 148 116" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M135.501 103.502C132.658 88.3462 122.782 15.1264 118.443 12.5676C114.103 10.0089 114.402 83.0319 109.464 88.1494C104.527 93.2669 98.3915 44.4537 88.8148 43.2727C79.2382 42.0918 64.7236 79.489 52.0046 81.0636C39.2856 82.6382 19.0849 57.4443 12.501 52.7205" stroke="#EBEBEB" stroke-width="25" stroke-linecap="round"/>
    </svg>
    
  )
}
function SwooshPurple(){
  return(
    <svg width="223" height="143" viewBox="0 0 223 143" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5018 130.163C16.5819 110.564 27.8653 15.1272 36.9823 12.5688C46.0992 10.0104 60.1738 109.071 71.4309 113.86C82.6881 118.649 89.7222 48.4357 104.525 41.3016C119.328 34.1675 115.475 86.5224 139.081 87.7873C162.686 89.0521 195.426 63.7871 210.449 59.9342" stroke="#B1B9F7" stroke-width="25" stroke-linecap="round"/>
  </svg>
  )
}



function GrayQuestion(){
  return(
    <svg width="98" height="129" viewBox="0 0 98 129" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M52.1228 84.894C52.1228 84.894 49.2213 77.2822 44.7673 73.1908C37.5357 66.5482 35.3446 73.4055 20.0518 65.7866C11.3686 61.4605 9.38898 51.6557 9.38898 51.6557C9.38898 51.6557 7.60021 42.9434 10.2048 36.3718C12.8094 29.8002 16.3453 25.1705 21.279 22.2294C26.2126 19.2884 33.274 18.0912 38.4781 19.3166C41.5284 20.0348 47.1814 21.4254 51.3433 25.6423C55.2498 29.6004 55.9735 31.3124 58.3092 36.5351" stroke="#F1F5F9" stroke-width="13" stroke-linecap="round"/>
    <circle cx="10.1786" cy="10.1786" r="10.1786" transform="matrix(-0.912864 0.408264 0.408264 0.912864 67.8412 95.1094)" fill="#F1F5F9"/>
    <path d="M59.1101 74.2084C59.1101 74.2084 56.2086 66.5966 51.7546 62.5053C44.523 55.8627 42.3319 62.72 27.0391 55.101C18.3559 50.775 16.3763 40.9702 16.3763 40.9702C16.3763 40.9702 14.5875 32.2579 17.1921 25.6863C19.7967 19.1147 23.3326 14.4849 28.2663 11.5439C33.1999 8.60281 40.2613 7.40561 45.4654 8.63102C48.5157 9.34925 54.1687 10.7399 58.3306 14.9568C62.2371 18.9149 62.9608 20.6269 65.2965 25.8495" stroke="#E2E8F0" stroke-width="13" stroke-linecap="round"/>
    <circle cx="10.1786" cy="10.1786" r="10.1786" transform="matrix(-0.912864 0.408264 0.408264 0.912864 74.8285 84.4238)" fill="#E2E8F0"/>
    </svg>
  )
}
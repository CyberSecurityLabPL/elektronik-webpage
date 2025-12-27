"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import TeachersSection from "../Overview/TeachersSection"
import ClassSection from "../Overview/ClassSection"
import UtilitySection from "../Overview/UtilitySection"
import LessonSection from "../Overview/LessonSection"

const TABS = ["Nauczyciele", "Sale", "Wyposażenie", "Zajęcia dodatkowe"]

export default function Overview() {
  const [active, setActive] = useState(0)
  const controls = useAnimation()
  const SLIDE_COUNT = TABS.length

  // zawsze ustaw pozycję slidera na active
  useEffect(() => {
    controls.start({ x: `-${active * 100}%` })
  }, [active, controls])

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    const threshold = 80
    if (offset < -threshold || velocity < -400) {
      setActive(prev => {
        if (prev >= SLIDE_COUNT - 1) {

          controls.start({ x: `-${prev * 100}%` })
          return prev
        }
        return prev + 1
      })
      return
    }

    if (offset > threshold || velocity > 400) {
      setActive(prev => {
        if (prev <= 0) {
          controls.start({ x: `-${prev * 100}%` })
          return prev
        }
        return prev - 1
      })
      return
    }
    controls.start({ x: `-${active * 100}%` })
  }
  

  return (
    // id={data.sectionId}
    <div  className="w-full relative h-fit">
      {/* TŁO LINES – jak miałeś */}
      <div className="absolute -top-20 -z-50 block hc:hidden">
        <Lines />
      </div>

      {/* HEADING + linia pod Elektrona */}
      <h1 className="px-2 py-4 pb-14 text-center font-sans text-3xl lg:text-5xl font-bold text-foreground">
        Dlaczego warto wybrać{" "}
        <span className="relative inline-block">
          Elektrona
          <span className="pointer-events-none absolute left-0 bottom-0 w-full translate-y-[95%]">
            <Image
              src="/assets/Overview/headingLine.svg"
              alt=""
              width={400}
              height={40}
              className="w-full h-auto"
              priority
            />
          </span>
        </span>
        ?
      </h1>

      {/* MENU z linią pod aktywnym */}
      <div className="flex flex-wrap gap-6 lg:gap-16 items-center justify-center w-full">
        {TABS.map((label, i) => (
          <button
            key={label}
            onClick={() => setActive(i)}
            className={`pb-3 text-sm md:text-xl min-w-24 relative font-medium transition-colors ${
              i === active ? "text-blue-600" : "text-gray-500 hover:text-gray-800"
            }`}
          >
            {label}
            {i === active && (
              <span className="pointer-events-none size-0.5 absolute left-0 bottom-0 w-full -translate-y-[90%]">
                <MenuLine />
              </span>
            
            )}
          </button>
        ))}
      </div>

      {/* SLIDER */}
      <div className="relative w-full pt-16 overflow-hidden h-fit">
        <motion.div
          className="flex w-full h-screen "
          drag="x"
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
          animate={controls}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        >
          <div className="min-w-full ">
            <TeachersSection />
          </div>
          <div className="min-w-full ">
            <ClassSection />
          </div>
          <div className="min-w-full ">
            <UtilitySection />
          </div>
          <div className="min-w-full ">
            <LessonSection />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
function Lines(){
  return(
    <svg width="1440" height="1273" viewBox="0 0 1440 1273" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-25.7648 671.837C-25.7648 671.837 207.181 593.926 343.132 662.248C476.277 729.161 430.99 938.915 580.775 953.42C862.83 980.736 958.697 705.411 1242.23 845.351C1438.32 942.129 1538.82 1071.42 1573.37 1271.36" stroke="#E9E9E9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16"/>
      <path d="M22.2447 260.944C22.2447 260.944 256.282 428.862 412.662 435.791C551.108 441.925 529.142 308 670.596 323.734C782.753 336.209 834.414 407.489 946.794 442.936C1170.51 513.504 1515.54 495.189 1515.54 495.189" stroke="#ECECEC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="16 16"/>
    </svg>

  )
}

function MenuLine() {
  return (
    <svg
      className="menu-line-anim w-full -mt-2"
      width="193"
      height="27"
      viewBox="0 0 193 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="menu-line-path"
        d="M144.698 13.971C128 12.3387 54.1508 19.354 38.7253 26.6471C38.7253 26.9944 38.8992 27.0151 39.111 26.9944C40.8849 26.8208 71.3263 21.5567 93.3701 19.7707C100.512 19.1921 108.309 18.7547 115.66 17.9301C123.011 17.1055 144.698 13.971 144.698 13.971Z"
        fill="none"
        stroke="#6678FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        className="menu-line-path"
        d="M192.942 3.58687C192.942 3.58687 193.096 3.65636 192.903 4.00365C192.8 4.0502 192.402 4.28146 191.399 4.6982C189.934 5.53171 131.527 3.66257 97.7664 6.85141L0.470104 15.117C-0.429541 15.185 0.238722 14.5267 0.238722 14.5267C12.7295 10.9686 25.5365 7.19876 59.5112 4.59412C82.8036 2.16418 126.153 -0.171136 135.019 0.00988214C148.246 0.00988214 176.415 1.6993 192.942 3.58687Z"
        fill="none"
        stroke="#6678FF"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

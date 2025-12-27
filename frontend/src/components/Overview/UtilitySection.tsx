import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from '../ui/button'

function UtilitySection() {
  return (
    <div className='relative h-fit px-4 sm:px-12'>
      <div className=" w-1/2 absolute hidden lg:block -right-140 overflow-visible p-8   ">
        {/* Dolne zdjęcie */}
        <div className="h-full  w-3/4 -rotate-12 -translate-x-64 p-3 rounded-4xl bg-gray-200">
          <div className="overflow-hidden rounded-3xl bg-white ">
            <Image
              src="https://images.unsplash.com/photo-1761839257165-44f08ed617c7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Klasa"
              width={200}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        
        
      </div>
      <div className="w-full sm:w-4/5 lg:w-3/5 overflow-visible  pt-4   sm:p-8   ">
        <div className="h-full  w-full lg:w-11/12 -rotate-5 sm:-translate-x-4 p-3 rounded-4xl bg-gray-200">
          <div className="overflow-hidden rounded-3xl bg-white ">
            <Image
              src="https://images.unsplash.com/photo-1761839257287-3030c9300ece?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Klasa"
              width={200}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4 items-start w-4/5 pt-2 '>
        <h1 className=' font-sans text-4xl font-bold text-left text-foreground' >Najowsze Wyposażenie</h1>
        <p className='w-full lg:w-3/5 '>Jako jedna z nielicznych szkół oferujemy duży wachlarz profili. Posiadamy kadre na bardzo wysokim poziomie wykształcenia jak i świeżo odnowione i wyposażone sale. Jako jedna z nielicznych szkół oferujemy duży wachlarz profili. Posiadamy kadre na bardzo wysokim poziomie wykształcenia jak i świeżo odnowione i wyposażone sale.</p>
        
      </div>

      
      <div className='absolute right-80 bottom-20 rotate-180 hidden lg:block'>
        <Arrow />
      </div>
      
    </div>
  )
}

export default UtilitySection

function Arrow() {
  return(
    <svg
      width="185"
      height="217"
      viewBox="0 0 185 217"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2225_2356)">
        <path
          d="M131.362 123.17C127.532 125.218 123.224 128.236 118.632 129.86C108.987 133.205 99.2465 136.085 89.5064 138.965C71.0073 144.329 52.3041 149.638 32.1567 155.438C40.2699 143.119 54.3889 136.143 56.0177 119.451C53.1844 120.229 51.0337 120.092 50.351 121.007C39.5382 135.238 26.0089 146.545 11.6787 156.759C-0.00666151 165.266 0.960168 171.454 13.8417 176.443C27.3354 181.595 40.4449 188.182 53.774 193.95C55.9092 194.961 58.5778 194.798 61.49 195.358C59.7688 185.455 59.7688 185.455 31.3358 169.931C34.4282 169.003 36.8534 168.116 39.2236 167.433C63.4837 160.978 87.6889 154.727 111.855 147.808C119.688 145.515 127.332 142.293 134.325 138.237C146.756 131.028 149.257 120.06 141.319 108.051C137.275 101.917 131.678 96.6845 125.971 91.8613C119.557 86.4097 112.201 82.0233 105.473 76.9267C100.771 73.2512 96.4371 69.0157 91.6403 64.8758C95.7912 59.1807 101.144 57.9799 106.198 56.26C127.601 49.039 149.405 45.2194 172.034 44.0363C174.703 43.873 177.466 44.1742 180.095 43.3415C181.539 42.8501 183.163 40.8699 183.602 39.2308C183.822 38.4113 182.016 36.1707 180.847 35.6377C177.432 34.5032 173.499 33.6691 170.014 33.6136C145.007 33.0614 120.589 36.8395 97.1146 45.262C92.3191 46.8317 87.7123 49.3303 83.6628 52.1979C76.3408 57.4824 74.7333 64.2981 79.986 71.6345C84.2886 77.6184 89.9411 82.6465 95.7034 87.2647C104.143 94.1374 113.32 99.8902 121.759 106.763C126.202 110.589 130.74 114.879 131.362 123.17Z"
          fill="var(--svg-primary)"
        />
      </g>
      <defs>
        <clipPath id="clip0_2225_2356">
          <rect
            width="186"
            height="141"
            fill="white"
            transform="matrix(-0.258819 0.965926 0.965926 0.258819 48.1404 0)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
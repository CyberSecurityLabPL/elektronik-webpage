"use client"
import { cn } from "@/lib/utils"
import { Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Suspense, useEffect, useState } from "react"
import { buttonVariants } from "../ui/button"
import { HeroImages } from "./HeroImages"
import { motion as m } from "framer-motion"
import { TextEffect } from "../motion/TextEffect"
import { useTheme } from "next-themes"
const Hero = ({ data }: { data: any }) => {
  return (
    <div className="relative mb-20 flex w-full flex-col items-center  py-32">
      {/* BUBBLES BACKGROUND */}
      <Image
        src="/backgrounds/bg-squares-hero.svg"
        alt=""
        className="absolute left-0 top-0 -z-10 h-[848px] w-full hc:hidden"
        width={1920}
        height={1080}
      />
      <Image
        src="/backgrounds/bubbles.svg"
        alt=""
        className="absolute bottom-0 left-0 -z-20 h-[848px] w-full hc:hidden"
        width={1920}
        height={1080}
      />

      <div className="relative flex w-full max-w-xl flex-col items-center gap-12 px-2 md:gap-20 2xl:max-w-2xl 3xl:max-w-4xl">
        <div className="flex flex-col items-center justify-center">
          <TextEffect
            per="word"
            preset="slide"
            as="h1"
            className="text-center text-4xl font-bold text-foreground xs:text-5xl xl:text-6xl"
            highlightedWords={["pasje", "chęć"]}
          >
            {data?.heading ?? "Witaj w Elektroniku"}
          </TextEffect>
        </div>

        <p className="text-center text-base text-primary-foreground xs:text-lg xl:text-xl ">
          {data?.text ?? "Zapraszamy do zapoznania się z naszą ofertą."}
        </p>
        {/* BUTTON */}
        <div className="mt-20 flex flex-col gap-8 sm:flex-row">
          <Link
            href={data.linkPrimary.link}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full max-w-xs border-[3px] border-primary py-6 text-lg"
            )}
            target={data.linkPrimary.isExternal ? "_blank" : "_self"}
          >
            {data.linkPrimary.title}
          </Link>
          <Link
            href={data.linkSecondary.link}
            target={data.linkSecondary.isExternal ? "_blank" : "_self"}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full max-w-xs py-6 text-lg"
            )}
          >
            Dowiedz się więcej <Lightbulb className="ml-2 h-5 w-5" />
          </Link>
        </div>
        {/* ARROWS */}
        <m.div
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 10 }}
          transition={{
            delay: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2.5,
          }}
          className="absolute -left-[280px] top-[200px] hidden md:block"
        >
          <LeftArrow />
        </m.div>
        <m.div
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: -10 }}
          transition={{
            delay: 2.5,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 3,
          }}
          className="absolute -right-[220px] -top-[80px] hidden md:block"
        >
          <RightArrow />
        </m.div>
        {/* SYMBOLS */}
        <m.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 100 }}
          transition={{
            delay: 0,
            repeat: 0,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="absolute -left-[300px] -top-[100px] hidden md:block"
        >
          <MSymbol />
        </m.div>
        <m.div
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 100 }}
          transition={{
            delay: 0,
            repeat: 0,
            repeatType: "reverse",
            duration: 1.5,
          }}
          className="absolute -right-[300px] top-[260px] hidden md:block"
        >
          <Wiggle />
        </m.div>
        <m.div
          initial={{ pathLength: 0, rotate: 0 }}
          animate={{ pathLength: 1, rotate: 360 }}
          transition={{
            delay: 0,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            duration: 1.5,
          }}
          className="absolute -left-[390px] top-[480px] hidden md:block"
        >
          <Ball />
        </m.div>
      </div>
      <div className="mt-20 w-full ">
        <Suspense
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          }
        >
          <HeroImages images={data.images} />
        </Suspense>
      </div>
    </div>
  )
}

export function HighlightCircle({ className }: { className?: string }) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isHc = theme === "high-contrast"
  const fillColor = isHc ? "#00ffea" : "#6577FB"

  return (
    <svg
      width="379"
      height="128"
      viewBox="0 0 379 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <style>
        {`
          .highlight-path {
            fill: transparent;
            stroke: ${fillColor};
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 1500;
            stroke-dashoffset: 1500;
            animation: drawHighlight 2s ease-out forwards;
          }

          @keyframes drawHighlight {
            0% {
              stroke-dashoffset: 1500;
              fill: transparent;
            }
            70% {
              stroke-dashoffset: 400;
              fill: transparent;
            }
            85% {
              stroke-dashoffset: 0;
              fill: ${fillColor}40; /* 25% opacity */
            }
            100% {
              stroke-dashoffset: 0;
              fill: ${fillColor};
            }
          }
        `}
      </style>
      <path
        className="highlight-path"
        d="M21.8412 63.4796C15.7831 116.373 304.416 101.727 313.311 65.1704C316.558 63.8484 317.023 65.8439 318.348 69.7471C310.103 104.518 20.7865 122.743 11.6818 66.3561C0.276335 -4.28034 366.611 -32.4707 378.299 54.7832C384.536 101.346 160.664 138.193 13.5452 124.099C8.2534 123.509 4.48391 122.289 0.434328 120.914C157.008 131.193 375.31 97.9693 364.974 52.1611C347.156 -26.8073 28.4566 5.71901 21.8412 63.4796Z"
      />
    </svg>
  )
}

function LeftArrow() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isHc = theme === "high-contrast"
  const fillColor = isHc ? "#ffffff" : "#032666"

  return (
    <svg
      width="272"
      height="152"
      viewBox="0 0 272 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M236.552 52.3421C228.067 61.5136 218.7 69.8275 208.585 77.1635C194.83 87.229 179.747 95.3415 163.763 101.27C155.394 104.448 146.77 106.909 137.984 108.628C133.705 113.729 129.024 118.479 123.987 122.833C114.46 130.958 103.748 137.582 92.2202 142.476C81.5635 147.019 70.2544 149.849 58.7114 150.862C53.3529 151.249 47.9715 151.202 42.6199 150.723C37.4899 150.346 32.4247 149.345 27.5359 147.744C18.0905 144.648 9.55044 139.221 4.68231 131.081C2.34716 127.132 0.902702 122.722 0.449852 118.158C0.120118 113.919 0.384358 109.656 1.23492 105.491C2.74097 98.447 5.08303 91.609 8.21139 85.1216C10.5186 80.2371 13.2396 75.5591 16.3446 71.1387C18.2606 68.3673 20.3567 65.7248 22.6193 63.2282C24.1752 61.5252 25.0856 60.7161 25.1937 60.8301C25.3019 60.9441 22.269 64.7299 17.7304 72.131C14.9776 76.6272 12.5597 81.3199 10.4961 86.1712C7.74396 92.5085 5.73627 99.1439 4.51328 105.944C3.86165 109.758 3.74191 113.643 4.15752 117.49C4.65349 121.447 6.02419 125.244 8.1702 128.607C12.5147 135.511 20.3047 140.285 29.1727 142.932C33.7745 144.317 38.5266 145.141 43.3256 145.386C48.4258 145.703 53.5431 145.608 58.6277 145.104C69.5305 143.941 80.1821 141.075 90.194 136.611C101.024 131.839 111.071 125.462 119.997 117.694C122.512 115.461 124.952 113.104 127.284 110.632C127.004 110.681 126.703 110.717 126.413 110.787C123.638 111.13 120.846 111.323 118.05 111.365C112.312 111.568 106.571 111.049 100.961 109.821C97.8385 109.139 94.8577 107.921 92.1512 106.22C89.4498 104.391 87.0837 102.111 85.157 99.479C83.109 96.5435 81.7733 93.1717 81.2559 89.6312C80.7849 85.9515 81.1249 82.2139 82.252 78.6804C84.5104 71.953 88.4957 65.9369 93.8099 61.2332C101.307 54.3515 110.604 49.7369 120.622 47.9249C123.883 47.3684 127.192 47.1437 130.499 47.2543C137.267 47.3585 143.835 49.5724 149.286 53.5871C152.243 55.8291 154.535 58.8318 155.918 62.2743C157.25 65.8561 157.68 69.7099 157.171 73.496C156.032 80.4575 153.447 87.1027 149.584 93.0043C148.672 94.7133 147.575 96.2951 146.488 97.9106C151.644 96.5692 156.721 94.9462 161.698 93.0488C176.903 87.3962 191.279 79.7294 204.441 70.2536C214.126 63.3194 223.155 55.5115 231.413 46.9278C240.525 37.3825 248.834 27.1018 256.255 16.1901C258.306 12.9782 259.739 10.872 260.796 9.52242C249.147 9.41346 237.533 8.20421 226.11 5.91092C216.758 3.90668 211.235 1.74875 211.471 0.77731C211.992 -1.30873 235.074 2.30515 263.91 2.20559L265.399 2.21188C266.064 2.23029 266.725 2.31862 267.371 2.47544C268.586 2.79735 269.635 3.56766 270.305 4.63116C271.085 6.11763 271.327 7.82754 270.99 9.47137L270.765 12.1652L270.299 17.2637L269.326 26.904C268.644 33.0412 267.945 38.5223 267.292 43.1269C265.942 52.3128 264.662 57.934 263.74 57.9206C262.817 57.9072 262.42 52.2635 262.514 43.0554C262.579 38.4462 262.755 32.9401 263.037 26.8145L263.566 17.1623L263.703 14.4217C263.002 15.7363 262.293 17.384 261.273 19.4013C254.461 31.401 246.253 42.5535 236.822 52.627L236.552 52.3421ZM143.236 89.169C146.463 84.2345 148.636 78.6867 149.618 72.8728C150.013 70.4355 149.73 67.9359 148.8 65.6478C147.869 63.3597 146.327 61.3711 144.342 59.8998C140.036 56.8543 134.899 55.2049 129.626 55.1752C126.86 55.1151 124.096 55.3281 121.373 55.8112C118.617 56.3611 115.914 57.1518 113.297 58.174C108.014 60.2914 103.168 63.3639 99.0003 67.2377C94.9315 70.8457 91.8735 75.4512 90.1273 80.6009C89.3754 82.7952 89.1537 85.1365 89.4804 87.4335C89.807 89.7304 90.6728 91.9179 92.0069 93.817C93.4181 95.6546 95.1092 97.2593 97.0185 98.5723C98.9935 99.7376 101.146 100.572 103.39 101.042C108.345 102.073 113.407 102.495 118.463 102.298C120.974 102.243 123.479 102.058 125.97 101.742L133.505 100.498C134.41 100.334 135.282 100.123 136.198 99.9368C138.769 96.4679 141.145 92.8589 143.315 89.1266"
        fill={fillColor}
      />
    </svg>
  )
}
function RightArrow() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isHc = theme === "high-contrast"
  const fillColor = isHc ? "#ffffff" : "#354DFC"
  return (
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
          fill={fillColor}
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

function MSymbol() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const isHc = theme === "high-contrast"
  const fillColor = isHc ? "#00ffea" : "#354DFC"

  return (
    <svg
      width="166"
      height="158"
      viewBox="0 0 166 158"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M152.547 98.334C140.866 84.0459 90.5205 12.8408 82.4613 12.6055C74.4022 12.3702 107.901 91.4518 104.192 96.9223C100.483 102.393 67.4779 44.4013 60.2064 45.4287C52.9348 46.4562 65.6449 98.3384 60.5623 103.087C55.4798 107.836 37.5954 66.898 29.711 73.9203C21.8266 80.9425 15.9985 133.337 13.256 145.221"
        stroke={fillColor}
        strokeWidth="25"
        strokeLinecap="round"
      />
    </svg>
  )
}
function Wiggle() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const isHc = theme === "high-contrast"
  const fillColor = isHc ? "#00ffea" : "#354DFC"

  return (
    <svg
      width="192"
      height="166"
      viewBox="0 0 192 166"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M176.211 15.9997C167.201 56.4931 162.204 147.762 146.343 150.232C130.481 152.702 135.082 31.0038 123.631 24.1887C112.179 17.3736 124.513 123.271 108.382 127.641C92.251 132.01 80.6079 41.1789 70.1574 38.6742C59.7069 36.1694 84.9982 116.144 73.7396 119.338C62.481 122.531 50.2896 50.0066 32.8361 49.2604C15.3826 48.5141 20.997 96.4702 15.8827 116.864"
        stroke={fillColor}
        strokeOpacity="0.74"
        strokeWidth="31"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Ball() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const isHc = theme === "high-contrast"
  const fillColor = isHc ? "#00ffea" : "#5266F3"

  return (
    <svg
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2225_2362)">
        <path
          d="M2.40079 42.9486C4.08909 29.1414 11.1264 24.7128 17.4278 20.7886C23.8622 16.78 29.4275 13.2689 28.758 0.0771484C25.8229 0.286909 22.933 0.916135 20.1765 1.94565C20.4565 12.415 15.4969 15.52 10.6843 18.5182C5.60135 21.6841 0.799813 24.6753 0.499023 36.4796C0.901 38.7265 1.54 40.8958 2.40079 42.9486Z"
          fill={fillColor}
        />
        <path
          d="M9.21781 16.165C13.7033 13.3692 17.3308 11.0821 17.4126 3.1368C9.24831 7.13855 3.09391 14.625 0.891357 23.6459C3.15213 19.9463 6.29447 17.985 9.21781 16.165ZM10.037 53.8135C11.1293 39.0984 17.5859 33.9628 23.847 28.9908C30.6487 23.5905 37.0762 18.4729 36.7144 0.519797C35.0021 0.201353 33.2661 0.0274751 31.5247 0C32.2427 14.7775 25.4715 19.044 18.893 23.1414C12.2285 27.2928 5.35052 31.6023 4.82102 47.5663C6.27956 49.8674 8.03313 51.9677 10.037 53.8135ZM43.2361 37.6347C49.4487 32.6488 55.3092 27.9027 54.996 11.3579C53.3211 9.31928 51.3948 7.501 49.263 5.94648C49.1756 24.0216 42.1494 29.6714 35.3393 35.1355C28.9299 40.2794 22.8795 45.1461 22.4359 60.7996C24.9919 61.5343 27.6796 61.9515 30.4574 62.0014C31.1879 47.3459 37.3021 42.3988 43.2361 37.6347ZM53.6487 44.101C49.1992 46.8122 45.3402 49.1894 44.8911 58.7232C53.4227 54.4359 59.7116 46.3299 61.5025 36.6561C59.5037 40.5289 56.4722 42.3808 53.6487 44.101Z"
          fill={fillColor}
        />
        <path
          d="M52.2071 41.7352C56.9726 38.8299 61.4761 36.0881 60.9272 23.3399L61.0699 23.3344C60.344 20.4954 59.2164 17.7747 57.7211 15.2547C57.0654 30.0446 50.936 35.0125 44.9743 39.7974C39.3008 44.3467 33.949 48.6811 33.2407 61.9241C36.2649 61.7102 39.241 61.0516 42.0731 59.9697C42.2422 47.8078 47.5344 44.5823 52.2071 41.7352ZM33.6066 32.9735C40.4194 27.508 46.8566 22.3308 46.4796 4.13377C44.2844 2.86505 41.9413 1.87157 39.5032 1.17578C39.7014 19.9439 32.5213 25.6437 25.5713 31.1618C19.2422 36.1865 13.2694 40.9604 12.6997 56.004C14.8599 57.5908 17.2171 58.8903 19.7121 59.8699C20.3969 43.6176 27.1029 38.1923 33.6066 32.9735Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_2225_2362">
          <rect width="62" height="62" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Hero

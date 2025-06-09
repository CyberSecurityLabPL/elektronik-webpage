"use client"
import { Apple, CircleCheckBig, DownloadIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function MobileAppSection() {
  const { theme } = useTheme()
  const [isHc, setIsHc] = useState(false)
  useEffect(() => {
    setIsHc(theme === "high-contrast")
  }, [theme])

  return (
    <div className="relative my-24 flex w-full flex-col items-center justify-center gap-2 bg-primary px-4 py-8 hc:bg-background-accent sm:px-8 md:my-72 lg:flex-row lg:gap-32">
      <div className="absolute left-0 top-0 -z-10 aspect-[1716/216] w-full -translate-y-[65%]">
        <Image
          src={
            isHc
              ? "/assets/MobileBackgroundTopHc.svg"
              : "/assets/MobileBackgroundTop.svg"
          }
          alt="Mobile Image"
          fill
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 aspect-[1713/319] w-full translate-y-[75%]">
        <Image
          src={
            isHc
              ? "/assets/MobileBackgroundBottomHc.svg"
              : "/assets/MobileBackgroundBottom.svg"
          }
          alt="Mobile Image"
          fill
        />
      </div>

      <div className="relative mr-24 mt-16 aspect-[364/739] h-80 -translate-y-12 sm:h-96 md:h-[540px] lg:mt-0 xl:h-[640px]">
        <Image
          className="relative z-10"
          src={"/assets/MobileApp.svg"}
          alt="Mobile Image"
          fill
        />
        <Image
          className="absolute left-0 top-0 -translate-y-10 translate-x-20 rotate-[9deg] scale-125 md:-translate-y-20 md:translate-x-40"
          src={"/assets/MobileApp2.svg"}
          alt="Mobile Image"
          fill
        />
      </div>
      <div className="flex h-full max-w-[800px] flex-col items-start justify-center gap-12 text-background">
        <div className="flex flex-col items-start gap-4">
          <div className="text-3xl font-semibold text-white sm:text-4xl xl:text-5xl">
            Chcesz być na bieżąco?
          </div>
          <div className="text-sm text-background/80 hc:text-white/80 sm:text-base xl:text-lg">
            Aplikacja Elektronik to niezastąpione narzędzie dla każdego ucznia.
            Dzięki niej zawsze wiesz, ile czasu zostało do końca lekcji i nie
            przegapisz żadnego ogłoszenia oraz wydarzenia. Wszystko to masz pod
            ręką w przejrzystym i nowoczesnym interfejsie!
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="text-base font-semibold text-white sm:text-lg xl:text-xl">
            Co zyskujesz z aplikacją Elektronik?
          </div>
          <BulletPoint
            title="Aktualności na bieżąco"
            description="Bądź pierwszy i dowiedz się o najnowszych informacjach szkolnych"
          />
          <BulletPoint
            title="Plan w zasięgu ręki"
            description="Możesz sprawdzić plan kiedy tylko chcesz"
          />
          <BulletPoint
            title="Kalendarz wydarzeń"
            description="Wyczekuj zbliżających się eventów szkolnych"
          />
          <BulletPoint
            title="Tablica Zastępstw"
            description="Sprawdź zastępstwa na dzisiaj lub inne dni"
          />
          <div className="text-xs text-white sm:text-sm xl:text-base">
            oraz wiele więcej!
          </div>
        </div>
        <DownloadsAndQr />
      </div>
    </div>
  )
}

const BulletPoint = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex size-5 items-center justify-center sm:size-7">
        <CircleCheckBig className="size-5 stroke-[#032666] hc:stroke-primary sm:size-7" />
      </div>
      <div>
        <span className="text-xs font-semibold text-white sm:text-sm xl:text-base">
          {title}
        </span>
        <span className="text-xs text-white sm:text-sm xl:text-base">{` - ${description}`}</span>
      </div>
    </div>
  )
}

const DownloadsAndQr = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
      <DownloadButton
        href="https://play.google.com/store/apps/details?id=pl.krystian_wybranowski.elektronPlus"
        header="GET IT ON"
        storeName="Google Play"
        type="google"
        imageClassName="scale-110"
      />
      <DownloadButton
        type="apple"
        href=""
        header="Download on the"
        storeName="App Store"
      />
    </div>
  )
}

export const DownloadButton = ({
  header,
  storeName,
  href,
  type,
  imageClassName,
}: {
  header: string
  storeName: string
  href: string
  type: "apple" | "google"
  imageClassName?: string
}) => {
  return (
    <Link href={href} target="_blank">
      <Button className="h-fit w-fit gap-2 border border-white bg-black px-4 py-2 text-white hover:bg-black/50">
        <div className="relative flex aspect-square size-12 items-center justify-center">
          <Image
            className={imageClassName}
            src={
              type === "google"
                ? "/assets/google-play.svg"
                : "/assets/apple.svg"
            }
            alt="Mobile Image"
            fill
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-1 md:gap-0">
          <div className="text-sm font-light leading-none text-white md:text-base">
            {header}
          </div>
          <div className="text-xl font-medium leading-none text-white md:text-2xl">
            {storeName}
          </div>
        </div>
      </Button>
    </Link>
  )
}

import { CircleCheckBig } from "lucide-react"
import Image from "next/image"

export default function MobileApp() {
  return (
    <div className="relative my-72 flex w-full items-center justify-center gap-32 bg-primary p-8">
      <div className="absolute left-0 top-0 -z-10 aspect-[1716/216] w-full -translate-y-[65%]">
        <Image
          src={"/assets/MobileBackgroundTop.svg"}
          alt="Mobile Image"
          fill
        />
      </div>
      <div className="absolute bottom-0 left-0 -z-10 aspect-[1713/319] w-full translate-y-[75%]">
        <Image
          src={"/assets/MobileBackgroundBottom.svg"}
          alt="Mobile Image"
          fill
        />
      </div>

      <div className="relative mr-24 aspect-[364/739] h-[640px] -translate-y-12">
        <Image
          className="relative z-10"
          src={"/assets/MobileApp.svg"}
          alt="Mobile Image"
          fill
        />
        <Image
          className="absolute left-0 top-0 -translate-y-20 translate-x-40 rotate-[9deg] scale-125"
          src={"/assets/MobileApp2.svg"}
          alt="Mobile Image"
          fill
        />
      </div>
      <div className="flex h-full max-w-[800px] flex-col items-start justify-center gap-12 text-background">
        <div className="flex flex-col items-start gap-4">
          <div className="text-5xl font-semibold">Chcesz być na bieżąco?</div>
          <div className="text-lg text-background/80">
            Aplikacja Elektronik to niezastąpione narzędzie dla każdego ucznia.
            Dzięki niej zawsze wiesz, ile czasu zostało do końca lekcji i nie
            przegapisz żadnego ogłoszenia oraz wydarzenia. Wszystko to masz pod
            ręką w przejrzystym i nowoczesnym interfejsie!
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="text-xl font-semibold">
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
          <div>oraz wiele więcej!</div>
        </div>
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
      <CircleCheckBig size={28} className="stroke-[#032666]" />
      <div>
        <span className="font-semibold">{title}</span>
        <span>{` - ${description}`}</span>
      </div>
    </div>
  )
}

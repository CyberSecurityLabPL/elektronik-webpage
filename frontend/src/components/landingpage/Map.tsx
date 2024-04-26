import GoogleMaps from "../maps/GoogleMaps"
import { Mail, MapPin, Phone } from "lucide-react"
import IconComponent from "../Icon"
import { Separator } from "../ui/separator"
import { Card } from "../ui/card"

export default function Map({ data }: { data: any }) {
  return (
    <div id={data.sectionId}>
      <div className="h-64 w-full rotate-180 bg-wave-transition bg-repeat-x "></div>
      <div className="relative flex h-screen w-full flex-col items-center justify-center gap-4 bg-primary px-6 py-4 md:px-10">
        <div className="flex h-2/3 w-full flex-col-reverse items-start justify-center gap-8 lg:flex-row xl:items-center">
          <Card className="h-full w-full lg:w-3/5">
            <GoogleMaps />
          </Card>
          <div className=" w-full text-white  lg:h-3/5 lg:w-2/5">
            <h1 className="pb-4 text-center text-5xl font-semibold lg:pb-8 lg:text-left lg:text-6xl">
              {data.title}
            </h1>
            <div className="hidden flex-col gap-4 lg:flex">
              <p className="text-right">{data.Content}</p>
            </div>
          </div>
        </div>
        <Card className="mx-4 flex w-fit flex-col items-center gap-2 p-2 px-4  md:absolute md:bottom-[13%] md:translate-y-[15%] md:flex-row  md:justify-between lg:h-16 lg:gap-12">
          <div className="flex w-full items-center justify-start gap-2  border-b-2 py-2 md:border-none">
            <IconComponent icon={Phone} color="blue" IsCircle={true} />
            <div className="flex flex-col ">
              <span className="text-slate-400">Telefon</span>
              <span className="text-nowrap font-semibold">
                {data.phoneNumber}
              </span>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div className="flex w-full items-center justify-start gap-2  border-b-2 py-2 md:border-none">
            <IconComponent icon={Mail} color="blue" IsCircle={true} />
            <div className="flex flex-col ">
              <span className="text-slate-400">E-mail</span>
              <span className="font-semibold">{data.email}</span>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden md:block" />
          <div className="flex w-full items-center justify-start gap-2  py-2">
            <IconComponent icon={MapPin} color="blue" IsCircle={true} />
            <div className="flex flex-col">
              <span className="text-slate-400">Adres</span>
              <span className="font-semibold lg:text-nowrap">
                {data.location}
              </span>
            </div>
          </div>
        </Card>
      </div>
      <div></div>

      <div className="h-48 w-full rotate-180 bg-splash-transition bg-repeat-x "></div>
    </div>
  )
}

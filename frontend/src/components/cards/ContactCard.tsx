import { Mail, MapPin, Phone } from "lucide-react"
import React from "react"
import IconComponent from "../Icon"
import { Separator } from "../ui/separator"
import { Card } from "../ui/card"

export default function ContactCard() {
  return (
    // make this component responsive
    <Card className="mx-4 flex w-fit flex-col items-center gap-2 p-2 px-4 md:flex-row  md:justify-between lg:h-16 lg:gap-12">
      <div className="flex w-full items-center justify-start gap-2  border-b-2 py-2 md:border-none">
        <IconComponent icon={Phone} color="blue" IsCircle={true} />
        <div className="flex flex-col ">
          <span className="text-slate-400">Telefon</span>
          <span className="font-semibold">+48 684525100</span>
        </div>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="flex w-full items-center justify-start gap-2  border-b-2 py-2 md:border-none">
        <IconComponent icon={Mail} color="blue" IsCircle={true} />
        <div className="flex flex-col ">
          <span className="text-slate-400">E-mail</span>
          <span className="font-semibold">sekretariat@zseis.zgora.pl</span>
        </div>
      </div>
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="flex w-full items-center justify-start gap-2  py-2">
        <IconComponent icon={MapPin} color="blue" IsCircle={true} />
        <div className="flex flex-col ">
          <span className="text-slate-400">Adres</span>
          <span className="font-semibold lg:text-nowrap">
            ul. Staszica 2 65-175 Zielona Góra
          </span>
        </div>
      </div>
    </Card>
  )
}

import { ContactForm } from "@/components/ContactForm"
import Header from "@/components/Header"
import IconComponent from "@/components/Icon"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { LucideProps, Mail, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Elektronik - Kontakt",
  description: "Skontaktuj się z nami na naszej stronie kontaktowej!",
  keywords: [
    "kontakt",
    "elektronik",
    "ckziu",
    "zseis",
    "informacje",
    "adres",
    "lokalizacja",
    "telefon",
    "email",
  ],
}

function page() {
  return (
    <div className="flex w-full flex-col  items-center ">
      <Header
        title={"Kontakt"}
        subtitle={
          "Zauważyłeś błąd? Chcesz się czegoś dowiedzieć? Skontaktuj się z nami!"
        }
      />

      <PageEnterAnimation className="relative flex w-full max-w-4xl flex-col items-center justify-center gap-6">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Wyślij wiadomość</CardTitle>
            <CardDescription>
              Napisz do nas a my postaramy się odpisać jak najszybciej
            </CardDescription>
          </CardHeader>
          <CardContent className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            <div className="">
              <InfoLabel icon={Phone} title="Telefon" text="+48 684 525 100" />
              <InfoLabel
                icon={Mail}
                title="E-mail"
                text="sekretariat@zseis.zgora.pl"
              />
              <InfoLabel
                icon={MapPin}
                title="Adres"
                text="ul. Staszica 2 65-175 Zielona Góra"
              />
            </div>
            <ContactForm className=" space-y-4 md:-order-1" />
          </CardContent>
        </Card>
      </PageEnterAnimation>
    </div>
  )
}

function InfoLabel({
  icon,
  title,
  text,
}: {
  icon: React.FC<LucideProps>
  title: string
  text: string
}) {
  return (
    <div className="flex w-full items-center justify-start gap-4 py-2">
      <IconComponent icon={icon} color="blue" IsCircle={true} />
      <div className="flex flex-col ">
        <span className="font-semibold">{title}</span>
        <span className="text-sm font-medium text-slate-500">{text}</span>
      </div>
    </div>
  )
}

export default page

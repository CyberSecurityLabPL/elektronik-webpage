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
import { getContact } from "@/lib/api"
import { LucideProps, Mail, MapPin, Phone, School } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"
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

export default async function page() {
  const data = await getContact()

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
            <div>
              <InfoLabel
                icon={School}
                title="Nazwa szkoły"
                text='Centrum Kształcenia Zawodowego i Ustawicznego "Elektronik" w Zielonej Górze'
              />
              <InfoLabel
                icon={Phone}
                title="Telefon"
                text={data.phone}
                href={`tel:${data.phone}`}
              />
              <InfoLabel
                icon={Mail}
                title="E-mail"
                text={data.email}
                href={`mailto:${data.email}`}
              />
              <InfoLabel
                icon={MapPin}
                title="Adres"
                text={data.address}
                href="https://maps.app.goo.gl/8jpAnoftNGedyz747"
                target="_blank"
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
  href,
  target,
}: {
  icon: React.FC<LucideProps>
  title: string
  text: string
  href?: string
  target?: string
}) {
  return (
    <Link
      draggable={false}
      href={href ?? "#"}
      target={target}
      className="flex w-full items-center justify-start gap-4 rounded-lg p-2 transition-colors hover:bg-secondary hc:hover:bg-background-muted hc:hover:text-muted-foreground"
    >
      <IconComponent icon={icon} color="blue" IsCircle={true} />
      <div className="flex flex-col ">
        <span className="font-semibold">{title}</span>
        <span className="text-sm font-medium text-slate-500">{text}</span>
      </div>
    </Link>
  )
}

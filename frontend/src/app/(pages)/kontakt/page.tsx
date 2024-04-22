import { ContactForm } from "@/components/ContactForm"
import Header from "@/components/Header"

import ContactCard from "@/components/cards/ContactCard"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import React from "react"

function page() {
  return (
    <div className="flex w-full flex-col  items-center ">
      <Header
        title={"Kontakt"}
        subtitle={
          "Zauważyłeś błąd? Chcesz się czegoś dowiedzieć? Skontaktuj się z nami!"
        }
      />

      <div className="flex w-full  flex-col  items-center justify-center gap-6 ">
        <ContactCard />
        <Card className="w-2/4 ">
          <CardHeader>
            <CardTitle>Wyślij wiadomość</CardTitle>
            <CardDescription>
              Napisz do nas a my postaramy się odpisać jak najszybciej
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default page

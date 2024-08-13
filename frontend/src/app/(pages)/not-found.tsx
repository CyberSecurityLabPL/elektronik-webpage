import Header from "@/components/Header"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Elektronik - Nie znaleziono strony",
}

export default function NotFound() {
  return (
    <div>
      <Header title={"Error 404"} subtitle={"Nie znaleziono strony"} />
    </div>
  )
}

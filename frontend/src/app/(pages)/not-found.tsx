import { Metadata } from "next"

import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Elektronik - Nie znaleziono strony",
}

export default function NotFound() {
  return (
    <div className="mx-auto flex-col px-8">
      <div className="mt-10 flex flex-col">
        <h1 className="text-center text-2xl font-bold text-primary md:text-3xl">
          Nie znaleźliśmy strony, której szukasz
        </h1>
      </div>
      <div className="relative mx-auto block aspect-square w-full max-w-lg hc:hidden">
        <Image src={"/assets/404.svg"} alt="Błąd 404" fill />
      </div>
      <div className="relative mx-auto hidden aspect-square w-full max-w-lg hc:block">
        <Image src={"/assets/404-high_contrast.svg"} alt="Błąd 404" fill />
      </div>
      <div className="mt-10 flex flex-col">
        <ul className="flex flex-wrap justify-between gap-2 text-xl underline">
          <li>
            <Link href="/">Strona główna</Link>
          </li>
          <li>
            <Link href="/aktualnosci">Aktualności</Link>
          </li>
          <li>
            <Link href="/plan">Plan lekcji</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

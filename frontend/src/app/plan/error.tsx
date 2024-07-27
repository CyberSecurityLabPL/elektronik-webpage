"use client"
import Link from "next/link"

const error = () => {
  return (
    <div>
      <p>Nie udało się pobrać planu lekcji.</p>
      <Link href={"https://zseis.zgora.pl/plan"}>
        Skorzystaj ze starego planu lekcji
      </Link>
    </div>
  )
}

export default error

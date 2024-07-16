import Header from "@/components/Header"
import { getImages } from "@/lib/api"
import type { Metadata } from "next"
import Gallery from "@/components/Gallery"

export const metadata: Metadata = {
  title: "Elektronik - Galeria",
  description: "Zobacz zdjęcia w naszej szkole!",
  keywords: ["grafika", "zdjecia", "galeria", "ckziu", "zseis"],
}

const Page = async () => {
  const data = await getImages()

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Header title="Galeria" subtitle="Zobacz zdjęcia naszej szkoły." />
      <Gallery initialData={data} />
    </div>
  )
}

export default Page

import LightGallery from "@/components/LightGallery"
import Header from "@/components/Header"
import { getImages } from "@/lib/api"
import { Skeleton } from "@/components/ui/skeleton"
import type { Metadata } from "next"

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
      <section className="grid w-full auto-rows-[10px] grid-cols-gallery">
        {data.files.map(
          (
            item: {
              id: number
              name: string
              url: string
              width: number
              height: number
            },
            idx: any
          ) => {
            const widtHeightRatio = item.height / item.width
            const galleryHeight = Math.ceil(250 * widtHeightRatio)
            const photoSpans = Math.ceil(galleryHeight / 10) + 1
            return (
              <LightGallery
                key={item.id}
                url={process.env.NEXT_PUBLIC_BACKEND_URL + item.url}
                name={item.name}
                data={data}
                item={item}
                idx={idx}
                photoSpans={photoSpans}
                height={item.height}
                width={item.width}
              />
            )
          }
        )}
      </section>
    </div>
  )
}

export default Page

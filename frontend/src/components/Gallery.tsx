"use client"

import { useState } from "react"
import LightGallery from "@/components/LightGallery"
import { Button } from "./ui/button"

export default function Gallery({initialData} : {initialData: any}){
    const pageSize = 9
    const [offset, setOffset] = useState(0)
    const limit = initialData.files.length

    const loadMore = () => {
        setOffset(offset+pageSize)
    }

    return (
        <div className="w-full flex flex-col justify-center items-center gap-4">
            <section className="grid w-full auto-rows-[10px] grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
                {initialData.files.slice(0, pageSize+offset).map(
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
                        data={initialData}
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
            {pageSize+offset>=limit ? null : 
                <Button variant={"outline"} onClick={loadMore}>Wczytaj Więcej</Button>
            }
        </div>
        
    )
}
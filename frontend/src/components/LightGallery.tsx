"use client"
import React, { useRef } from "react"
import type { LightGallery } from "lightgallery/lightgallery"
import LightGalleryComponent from "lightgallery/react"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import Image from "next/image"

const MyLightGallery = ({
  data,
  item,
  idx,
  photoSpans,
  width,
  height,
  url,
  name,
}: {
  data: any
  item: any
  idx: any
  photoSpans: any
  width: number
  height: number
  url: string
  name: string
}) => {
  const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <>
      <div
        key={item.name}
        className="w-[250px] justify-self-center px-3"
        style={{ gridRow: `span ${photoSpans}` }}
      >
        <div className="group overflow-hidden rounded-xl">
          <Image
            src={url}
            alt={name}
            width={width}
            height={height}
            sizes="250px"
            className="object-cover group-hover:opacity-75"
            onClick={() => {
              lightboxRef.current?.openGallery(idx)
            }}
          />
        </div>
        <LightGalleryComponent
          onInit={(ref) => {
            if (ref) {
              lightboxRef.current = ref.instance
            }
          }}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          dynamic
          dynamicEl={data.files.map((item: any) => ({
            src: process.env.NEXT_PUBLIC_BACKEND_URL + item.url,
            thumb: process.env.NEXT_PUBLIC_BACKEND_URL + item.url,
          }))}
        />
      </div>
    </>
  )
}

export default MyLightGallery

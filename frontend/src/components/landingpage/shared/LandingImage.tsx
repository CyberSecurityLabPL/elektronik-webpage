import { cn } from "@/lib/utils"
import { ImageIcon } from "lucide-react"
import Image from "next/image"
import type { LandingImage as LandingImageType } from "@/content/landing"

/**
 * Image that fills its (relatively positioned) parent.
 * When no `src` is provided, a neutral placeholder is rendered instead,
 * so the layout stays intact until a real photo is added.
 */
export default function LandingImage({
  image,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
}: {
  image?: LandingImageType | null
  className?: string
  sizes?: string
  priority?: boolean
}) {
  if (!image?.src) {
    return (
      <div
        role="img"
        aria-label={image?.alt ?? "Miejsce na zdjęcie"}
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-200/70 text-slate-400 hc:bg-background-muted hc:text-muted-foreground",
          className
        )}
      >
        <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
        {image?.alt && (
          <span className="max-w-[80%] text-center text-xs">{image.alt}</span>
        )}
      </div>
    )
  }

  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  )
}

import { cn, getImage } from "@/lib/utils"
import { format } from "date-fns"
import { pl } from "date-fns/locale/pl"
import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
  author: string
  src?: string
  date: string
  description: string
  title: string
  link: string
  className?: string
  variant?: "default" | "featured"
}

export default function NewsCard({
  author,
  src,
  date,
  description,
  title,
  link,
  className,
  variant = "default",
}: NewsCardProps) {
  const isFeatured = variant === "featured"

  return (
    <Link
      href={link}
      passHref
      className={cn(
        "relative flex w-full min-w-64 items-center gap-4 bg-background p-4 transition-colors hover:bg-slate-50 xs:rounded-3xl md:flex-col md:items-start md:gap-2 lg:w-full",
        {
          " h-full w-full max-w-full flex-col shadow-lg shadow-slate-400/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-400/50 md:col-span-2 md:flex-row md:gap-12 lg:col-span-3":
            isFeatured,
        },
        className
      )}
    >
      {/* IMAGE */}
      <div
        className={cn(
          "aspect-[21:9] relative h-28 w-2/5 overflow-hidden rounded-3xl md:h-[200px] md:w-full",
          isFeatured ? "h-[250px] w-full md:h-full md:w-3/5 lg:h-[400px]" : ""
        )}
      >
        <Image
          src={src ? getImage(src) : "/cards/kmieciu.svg"}
          alt="Miniaturka artykułu"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div
        className={cn(
          "flex w-3/5 flex-col self-start overflow-hidden pt-2 md:w-full",
          isFeatured ? "w-full py-4 md:w-2/5" : ""
        )}
      >
        {/* DATE */}
        <span className="prose-sm self-start text-xs font-semibold text-zinc-400 md:text-sm">
          {format(new Date(date), "dd MMM yyyy ", {
            locale: pl,
          })}
        </span>

        {/* TITLE */}
        <h3
          className={cn(
            "pb-[.5em] pt-[.3em] text-lg font-semibold",
            isFeatured ? " text-2xl md:text-4xl" : ""
          )}
          title={title}
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <div
          className={cn(
            "text-prettyk h-20 truncate",
            !isFeatured ? "hidden md:block" : ""
          )}
        >
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

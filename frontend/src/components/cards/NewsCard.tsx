import { cn, getRandomImg } from "@/lib/utils"
import { format } from "date-fns"
import { pl } from "date-fns/locale/pl"
import { LucideIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface NewsCardProps {
  author: string
  src: string
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
        "relative flex flex-col gap-2 rounded-3xl p-4 transition-colors hover:bg-slate-50 min-w-64 lg:w-full",
        {
          // 12
          " md:col-span-2 lg:col-span-3 h-full w-full max-w-full  md:flex-row md:gap-12": isFeatured,
        },
        className
      )}
    >
      {/* IMAGE */}
      <div
        className={cn(
          "relative h-[200px] w-full overflow-hidden rounded-3xl",
          isFeatured ? "h-[250px] md:h-full w-full md:w-3/5" : ""
        )}
      >
        <Image
          src={"/cards/car-job.jpg"}
          alt="Miniaturka artykułu"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className={cn("flex flex-col", isFeatured ? "w-full md:w-2/5 py-4" : "")}>
        {/* DATE */}
        <span className="prose-sm self-start font-semibold text-zinc-400">
          {format(new Date(new Date()), "dd MMM yyyy ", {
            locale: pl,
          })}
        </span>

        {/* TITLE */}
        <h3
          className={cn(
            "pb-[.5em] pt-[.6em] text-lg font-semibold",
            isFeatured ? "text-2xl md:text-4xl" : ""
          )}
        >
          {isFeatured ? "Calkiem dlugo tytul xdxd spoko fajny tytul" : title}
        </h3>

        {/* DESCRIPTION */}
        <div className={cn("h-20 truncate text-pretty")}>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

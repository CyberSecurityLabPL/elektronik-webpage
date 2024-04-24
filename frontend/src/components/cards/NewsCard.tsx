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
        "relative flex min-w-64 flex-col gap-2 rounded-3xl p-4 transition-colors hover:bg-slate-50 lg:w-full",
        {
          // 12
          " h-full w-full max-w-full md:col-span-2 md:flex-row  md:gap-12 lg:col-span-3":
            isFeatured,
        },
        className
      )}
    >
      {/* IMAGE */}
      <div
        className={cn(
          "relative h-[200px] w-full overflow-hidden rounded-3xl",
          isFeatured ? "h-[250px] w-full md:h-full md:w-3/5" : ""
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
      <div
        className={cn(
          "flex flex-col",
          isFeatured ? "w-full py-4 md:w-2/5" : ""
        )}
      >
        {/* DATE */}
        <span className="prose-sm self-start font-semibold text-zinc-400">
          {format(new Date(date), "dd MMM yyyy ", {
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

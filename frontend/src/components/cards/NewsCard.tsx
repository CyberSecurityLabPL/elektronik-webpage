"use client"
import { cn, getImage } from "@/lib/utils"
import { format } from "date-fns"
import { pl } from "date-fns/locale/pl"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
interface NewsCardProps {
  src?: string
  date: string
  description: string
  title: string
  link: string
  className?: string
  variant?: "default" | "featured"
}

export default function NewsCard({
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
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="h-full w-full overflow-hidden rounded-3xl border"
    >
      <Link
        href={link}
        passHref
        className={cn(
          "relative flex h-full w-full min-w-64 flex-col items-center gap-4 bg-background transition-colors hover:bg-slate-50 xs:rounded-3xl md:items-start md:gap-2",
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
            "aspect-[21:9] relative h-48 w-full overflow-hidden md:h-[200px] md:w-full",
            isFeatured ? "h-[250px] w-full  md:w-3/5 lg:h-[400px]" : ""
          )}
        >
          <Image
            src={getImage(src, "/default/article.svg")}
            alt="Miniaturka artykułu"
            fill
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div
          className={cn(
            "flex flex-col self-start overflow-hidden p-4 ",
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
              "h-20 truncate text-pretty",
              !isFeatured ? "hidden md:block" : ""
            )}
          >
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

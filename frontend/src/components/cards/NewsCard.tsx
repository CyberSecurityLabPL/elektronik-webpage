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

// export default function NewsCard({
//   author,
//   src,
//   date,
//   description,
//   title,
//   link,
// }: NewsCardProps) {
//   return (
//     <Link
//       href={link}
//       passHref
//       className="block max-w-96 px-0 sm:w-96 md:w-full xl:w-96"
//     >
//       <Card className=" ">
//         <CardContent className="relative  h-48 rounded-t-lg bg-neutral-200 ">
//           <Image src={src} alt="Image" fill className="rounded-t-md  " />
//         </CardContent>
//         <CardHeader className=" px-3 pb-0 pt-3">
//           <CardTitle>{title}</CardTitle>
//         </CardHeader>
//         <CardContent className="relative h-24 overflow-hidden p-3 text-xs">
//           <div className="pointer-events-none absolute right-0  top-0 h-full w-full bg-gradient-to-b from-transparent to-white"></div>
//           <p className=" ">{description}</p>
//         </CardContent>
//         <CardFooter className=" flex justify-between px-3 py-3  text-xs">
//           <CardInfo
//             author={author}
//             date={date}
//             side="left"
//             Icon={CalendarPlus}
//           />
//           <CardInfo
//             author={"Nieznany autor"}
//             date=""
//             side="right"
//             Icon={User}
//           />
//         </CardFooter>
//       </Card>
//     </Link>
//   )
// }

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
        "relative flex flex-col gap-2 rounded-3xl p-4 transition-colors hover:bg-slate-50 sm:w-96 md:w-full",
        {
          "col-span-3 h-full w-full max-w-full flex-row gap-12": isFeatured,
        },
        className
      )}
    >
      {/* IMAGE */}
      <div
        className={cn(
          "relative h-[200px] w-full overflow-hidden rounded-3xl",
          isFeatured ? "h-full w-3/5" : ""
        )}
      >
        <Image
          src={getRandomImg()}
          alt="Miniaturka artykułu"
          fill
          className="object-fill"
        />
      </div>

      {/* CONTENT */}
      <div className={cn("flex flex-col", isFeatured ? "w-2/5 py-4" : "")}>
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
            isFeatured ? "text-4xl" : ""
          )}
        >
          {isFeatured
            ? "Jeabc mishe tego ukrainca jebanego nieroba pierdolonego"
            : title}
        </h3>

        {/* DESCRIPTION */}
        <div className={cn("h-20 truncate text-pretty")}>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Link>
  )
}

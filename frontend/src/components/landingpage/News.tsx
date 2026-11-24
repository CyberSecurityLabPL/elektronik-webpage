import { getArticles, getLatestArticle } from "@/lib/api"
import { MotionDiv, MotionLi } from "@/lib/motion"
import {
  cn,
  formatDayMonthYear,
  getAuthor,
  getDate,
  getImage,
} from "@/lib/utils"
import { ArrowRight, Newspaper } from "lucide-react"
import { BrushUnderline } from "./shared/Decorations"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

type ArticleType = {
  documentId: string
  [key: string]: any
}

const LIST_LENGTH = 4

export default async function News({ data: section }: { data?: any }) {
  const sectionId = section?.sectionId ?? "news"

  const [articles, latestArticle] = await Promise.all([
    getArticles() as Promise<{ data: ArticleType[] } | undefined>,
    getLatestArticle(),
  ])

  const list = articles?.data?.slice(0, LIST_LENGTH) ?? []
  const allNews = (
    <Link
      href="/aktualnosci"
      className={cn(
        buttonVariants({ variant: "outline", size: "lg" }),
        "group gap-2 px-7 text-base"
      )}
    >
      Wszystkie aktualności
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  )

  return (
    <section
      id={sectionId}
      className="relative w-full scroll-mt-28 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-end justify-between gap-6 lg:mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              Z życia szkoły
            </span>
            <h2 className="mt-5 text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              Aktualności ze{" "}
              <span className="relative inline-block text-primary">
                szkoły
                <BrushUnderline className="absolute -bottom-2 left-0 h-3 w-full text-cyan-400 hc:text-primary sm:h-4" />
              </span>
            </h2>
          </div>
          <div className="hidden shrink-0 sm:block">{allNews}</div>
        </MotionDiv>

        {!latestArticle && list.length === 0 ? (
          <p className="rounded-2xl bg-slate-50 p-8 text-center text-muted-foreground hc:bg-background-muted">
            Brak aktualności do wyświetlenia.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            {latestArticle && (
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7"
              >
                <FeaturedArticle data={latestArticle} />
              </MotionDiv>
            )}

            {list.length > 0 && (
              <ul className="flex flex-col divide-y divide-slate-200 hc:divide-muted-foreground/40 lg:col-span-5 lg:justify-between">
                {list.map((article, index) => (
                  <MotionLi
                    key={article.documentId}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.08 * index }}
                    className="py-2 first:pt-0 last:pb-0"
                  >
                    <ArticleRow data={article} />
                  </MotionLi>
                ))}
              </ul>
            )}
          </div>
        )}

        <div className="mt-10 flex justify-center sm:hidden">{allNews}</div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */

function DateText({ data, className }: { data: any; className?: string }) {
  const date = getDate(data)
  return (
    <time dateTime={date} className={className}>
      {formatDayMonthYear(date)}
    </time>
  )
}

function Thumb({
  src,
  alt,
  sizes,
  className,
  imgClassName,
  priority,
}: {
  src?: string | null
  alt: string
  sizes: string
  className?: string
  imgClassName?: string
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        // images with transparent backgrounds (logos) need a light base
        src ? "bg-white" : "bg-slate-100 hc:bg-background",
        className
      )}
    >
      {src ? (
        <Image
          src={getImage(src)}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-slate-300">
          <Newspaper className="h-1/3 w-1/3" aria-hidden="true" />
        </div>
      )}
      {/* hairline edge – many article images have a white background */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-slate-900/5 hc:ring-0"
      />
    </div>
  )
}

function ArticleRow({ data }: { data: any }) {
  const thumb = data.image?.formats?.thumbnail?.url ?? data.image?.url

  return (
    <Link
      href={`/aktualnosci/${data.documentId}`}
      className="group -mx-3 flex items-center gap-4 rounded-2xl p-3 transition-colors lg:py-2.5 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-primary hc:hover:bg-background-muted sm:gap-5"
    >
      <Thumb
        src={thumb}
        alt=""
        sizes="80px"
        className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-2xl"
        imgClassName="transition-transform duration-500 group-hover:scale-110"
      />
      <div className="min-w-0 flex-1">
        <DateText data={data} className="text-sm text-muted-foreground" />
        <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {data.title}
        </h3>
      </div>
      <ArrowRight
        aria-hidden="true"
        className="hidden h-5 w-5 shrink-0 -translate-x-2 text-primary opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 sm:block"
      />
    </Link>
  )
}

function FeaturedArticle({ data }: { data: any }) {
  const excerpt = data.description?.trim() || makeExcerpt(data.content)
  const image = data.image?.url
  const ambient = data.image?.formats?.thumbnail?.url ?? image

  return (
    <Link
      href={`/aktualnosci/${data.documentId}`}
      className="group grid h-full overflow-hidden rounded-[2rem] bg-white ring-1 ring-slate-200 transition-all duration-300 hover:shadow-[0_30px_60px_-34px_rgba(53,77,252,0.55)] hover:ring-primary/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary hc:bg-background hc:ring-muted-foreground/40 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]"
    >
      {/* Photo "print" on an ambient backdrop. Article images are small
          (~350px) and often have white margins baked in, so instead of
          stretching them edge-to-edge they sit in a white frame. */}
      <div className="relative isolate flex items-center justify-center overflow-hidden bg-primary/10 px-10 pb-10 pt-16 hc:bg-background-muted sm:px-8 sm:py-12">
        {ambient && (
          <Image
            src={getImage(ambient)}
            alt=""
            aria-hidden="true"
            fill
            sizes="200px"
            className="-z-20 scale-150 object-cover opacity-50 blur-2xl saturate-150 hc:hidden"
          />
        )}
        {ambient && (
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/25 via-primary/5 to-cyan-400/25 hc:hidden"
          />
        )}
        <span className="absolute left-5 top-5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-primary shadow-sm hc:bg-black">
          Najnowsze
        </span>
        <div className="w-full max-w-[16rem] -rotate-3 rounded-[1.25rem] bg-white p-2 shadow-[0_24px_50px_-20px_rgba(15,23,42,0.45)] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-[1.03] hc:bg-black hc:ring-1 hc:ring-muted-foreground/40">
          <Thumb
            src={image}
            alt={data.image?.alternativeText || data.title}
            priority
            sizes="256px"
            className="aspect-square w-full rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <DateText data={data} className="text-muted-foreground" />
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="font-medium text-primary">{getAuthor(data)}</span>
        </div>
        <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[1.75rem]">
          {data.title}
        </h3>
        {excerpt && (
          <p className="mt-3 line-clamp-4 text-pretty text-base leading-relaxed text-slate-600 hc:text-foreground">
            {excerpt}
          </p>
        )}
        <span className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-primary">
          Czytaj dalej
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-white">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </span>
      </div>
    </Link>
  )
}

/** Plain-text teaser from the article's Markdown content. */
function makeExcerpt(content?: string, max = 220) {
  if (!content) return ""
  const text = content
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ") // images
    .replace(/\[([^\]]*)]\([^)]*\)/g, "$1") // links -> text
    .replace(/<[^>]+>/g, " ") // html
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, "") // headings, quotes, lists
    .replace(/[*_~`|]+/g, "") // emphasis, code, table pipes
    .replace(/\s+/g, " ")
    .trim()
  if (text.length <= max) return text
  return text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:–-]+$/, "") + "…"
}

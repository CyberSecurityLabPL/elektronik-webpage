import { programs, type ProgramIcon } from "@/content/landing"
import { getRecruitments } from "@/lib/api"
import { MotionDiv } from "@/lib/motion"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Calculator,
  Car,
  Code,
  Cpu,
  GraduationCap,
  Server,
  Sun,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import {
  BrushUnderline,
  DashedCurve,
  DotGrid,
  ScribbleM,
} from "./shared/Decorations"

/* ----------------------------------------------------------------------------
 * Data – the same Strapi single type as `/nabor` (`/api/recruitments-page`)
 * ------------------------------------------------------------------------- */

type StrapiRecruitment = {
  profession: string
  spaces?: number
  groups?: number
  link?: string
}

type StrapiRecruitmentGroup = {
  title: string
  recruitments?: StrapiRecruitment[]
}

type Program = {
  name: string
  spaces?: number
  groups?: number
  href: string | null
  isExternal: boolean
  icon: ProgramIcon
  tagline: string
}

type Group = { title: string; programs: Program[] }

const ICONS: Record<ProgramIcon, LucideIcon> = {
  code: Code,
  server: Server,
  cpu: Cpu,
  bot: Bot,
  sun: Sun,
  car: Car,
  wrench: Wrench,
  graduation: GraduationCap,
}

/** Groups with at least this many programs get a full-width grid of their own. */
const BIG_GROUP = 3

function normalizeLink(link?: string) {
  const l = link?.trim()
  if (!l) return { href: null, isExternal: false }
  if (/^https?:\/\//.test(l)) return { href: l, isExternal: true }
  return { href: l.startsWith("/") ? l : `/${l}`, isExternal: false }
}

function decorate(r: StrapiRecruitment): Program {
  const name = r.profession.trim()
  const lower = name.toLowerCase()
  const hit =
    programs.highlights.find((h) => h.match.some((m) => lower.includes(m))) ??
    programs.fallback
  return {
    name,
    spaces: r.spaces,
    groups: r.groups,
    ...normalizeLink(r.link),
    icon: hit.icon,
    tagline: hit.tagline,
  }
}

/** "Technikum 5 letnie" -> "Technikum 5-letnie" */
function formatGroupTitle(title: string) {
  return title.trim().replace(/(\d)\s+letni/i, "$1-letni")
}

/** Polish plural: plural(5, ["miejsce", "miejsca", "miejsc"]) -> "miejsc" */
function plural(n: number, [one, few, many]: [string, string, string]) {
  if (n === 1) return one
  const d = n % 10
  const t = n % 100
  return d >= 2 && d <= 4 && (t < 12 || t > 14) ? few : many
}

/* ----------------------------------------------------------------------------
 * Section
 * ------------------------------------------------------------------------- */

export default async function Programs() {
  const data = await getRecruitments()
  const groups: Group[] = ((data?.recruitment_groups ??
    []) as StrapiRecruitmentGroup[])
    .map((g) => ({
      title: formatGroupTitle(g.title ?? ""),
      programs: (g.recruitments ?? [])
        .filter((r) => r?.profession)
        .map(decorate),
    }))
    .filter((g) => g.programs.length > 0)

  if (!groups.length) return null

  const c = programs
  const [before, after] = c.title.split(c.highlight)
  let cardIndex = 0

  return (
    <section
      id={c.sectionId}
      className="relative w-full scroll-mt-24 overflow-hidden py-16 sm:py-24 lg:py-28"
    >
      <DashedCurve
        variant={2}
        className="absolute inset-x-0 top-[30%] -z-10 hidden h-72 w-full text-slate-200 hc:hidden md:block"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <DotGrid className="absolute -top-8 right-0 hidden text-slate-300 hc:text-muted-foreground lg:block" />
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
              <GraduationCap className="h-4 w-4" aria-hidden="true" />
              {c.eyebrow}
            </span>
            <h2 className="mt-5 text-balance text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
              {before}
              <span className="relative inline-block text-primary">
                {c.highlight}
                <BrushUnderline className="absolute -bottom-2 left-0 h-3 w-full text-cyan-400 hc:text-primary sm:h-4" />
              </span>
              {after}
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 hc:text-foreground lg:text-lg">
              {c.description}
            </p>
          </div>
          <Link
            href={c.link.href}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group relative w-fit shrink-0 gap-2 px-7 text-base"
            )}
          >
            {c.link.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </MotionDiv>

        {/* Groups */}
        <div className="mt-12 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {groups.map((group) => {
            const big = group.programs.length >= BIG_GROUP
            const two = group.programs.length === 2
            return (
              <div
                key={group.title}
                className={cn(
                  "flex min-w-0 flex-col",
                  big && "sm:col-span-2 lg:col-span-3",
                  two && "sm:col-span-2"
                )}
              >
                <GroupHeader
                  title={group.title}
                  count={group.programs.length}
                />
                {/* animate the whole group at once – on mobile the big group
                    is a horizontal scroller, so per-card in-view triggers
                    would leave the off-screen cards invisible */}
                <MotionDiv
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } },
                  }}
                  className={cn(
                    "grid flex-1 gap-5",
                    big &&
                      "no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 overflow-x-auto px-5 pb-6 pt-1 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:p-0 lg:grid-cols-3",
                    two && "sm:grid-cols-2"
                  )}
                >
                  {group.programs.map((program) => {
                    const i = cardIndex++
                    return (
                      <MotionDiv
                        key={program.name + i}
                        variants={{
                          hidden: { opacity: 0, y: 24 },
                          show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.45 },
                          },
                        }}
                        className={cn(
                          "h-full",
                          big && "w-[80%] max-w-sm shrink-0 snap-start sm:w-auto sm:max-w-none"
                        )}
                      >
                        <ProgramCard program={program} index={i + 1} />
                      </MotionDiv>
                    )
                  })}
                </MotionDiv>
              </div>
            )
          })}

          {/* Help / CTA card – fills the free slot next to the small groups */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <GroupHeader title="Masz pytania?" />
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="flex-1"
            >
              <HelpCard />
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  )
}

function GroupHeader({ title, count }: { title: string; count?: number }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <h3 className="shrink-0 text-lg font-semibold text-foreground">
        {title}
      </h3>
      {count !== undefined && (
        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600 hc:bg-background-muted hc:text-foreground">
          {count} {plural(count, ["kierunek", "kierunki", "kierunków"])}
        </span>
      )}
      <span
        aria-hidden="true"
        className="h-px flex-1 bg-slate-200 hc:bg-muted-foreground/40"
      />
    </div>
  )
}

function ProgramCard({ program, index }: { program: Program; index: number }) {
  const Icon = ICONS[program.icon]
  const content = (
    <>
      {/* big faded icon in the corner */}
      <Icon
        aria-hidden="true"
        strokeWidth={1.25}
        className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 -rotate-12 text-primary/[0.06] transition-transform duration-500 group-hover:rotate-0 group-hover:scale-110 hc:text-primary/20"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-white hc:group-hover:text-black">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className="text-sm font-semibold tabular-nums text-slate-300 hc:text-muted-foreground"
        >
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <h4 className="relative mt-6 text-balance text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {program.name}
      </h4>
      {program.tagline && (
        <p className="relative mt-2 text-pretty text-sm leading-relaxed text-slate-600 hc:text-foreground">
          {program.tagline}
        </p>
      )}

      <div className="relative mt-auto flex items-end justify-between gap-3 pt-6">
        <dl className="flex flex-wrap gap-2 text-xs font-medium">
          {!!program.spaces && (
            <div className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hc:bg-background hc:text-foreground">
              <dt className="sr-only">Liczba miejsc</dt>
              <dd>
                {program.spaces}{" "}
                {plural(program.spaces, ["miejsce", "miejsca", "miejsc"])}
              </dd>
            </div>
          )}
          {!!program.groups && (
            <div className="rounded-full bg-slate-100 px-3 py-1 text-slate-700 hc:bg-background hc:text-foreground">
              <dt className="sr-only">Liczba oddziałów</dt>
              <dd>
                {program.groups}{" "}
                {plural(program.groups, ["oddział", "oddziały", "oddziałów"])}
              </dd>
            </div>
          )}
        </dl>
        {program.href && (
          <span
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white hc:border-muted-foreground/40 hc:group-hover:text-black"
          >
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        )}
      </div>
    </>
  )

  const className =
    "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white p-6 ring-1 ring-slate-200/80 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)] transition-all duration-300 hc:bg-background-muted hc:ring-muted-foreground/30 sm:p-7"

  if (!program.href) return <div className={className}>{content}</div>

  return (
    <Link
      href={program.href}
      target={program.isExternal ? "_blank" : undefined}
      className={cn(
        className,
        "hover:-translate-y-1 hover:shadow-[0_30px_55px_-28px_rgba(53,77,252,0.5)] hover:ring-primary/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      )}
    >
      {content}
    </Link>
  )
}

function HelpCard() {
  const { cta } = programs
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-[var(--landing-blue)] p-6 text-white sm:p-7">
      <ScribbleM className="pointer-events-none absolute -bottom-4 -right-3 w-32 rotate-12 text-white/15" />
      <p className="relative text-xl font-semibold leading-snug">{cta.title}</p>
      <p className="relative mt-2 max-w-sm text-pretty text-sm leading-relaxed text-white/80">
        {cta.description}
      </p>
      <div className="relative mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-6">
        <Link
          href={cta.link.href}
          target={cta.link.isExternal ? "_blank" : undefined}
          className="group inline-flex h-10 items-center gap-2 rounded-xl bg-white px-5 text-sm font-semibold text-primary transition-colors hover:bg-white/90 hc:bg-black hc:text-primary"
        >
          {cta.link.title}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          href={cta.secondary.href}
          target={cta.secondary.isExternal ? "_blank" : undefined}
          rel={cta.secondary.isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-white/90 underline-offset-4 hover:text-white hover:underline"
        >
          <Calculator className="h-4 w-4" aria-hidden="true" />
          {cta.secondary.title}
        </Link>
      </div>
    </div>
  )
}

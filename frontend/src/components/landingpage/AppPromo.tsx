"use client"
import { appPromo, type LandingImage as LandingImageType } from "@/content/landing"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { CalendarDays, CheckCircle2, Home, QrCode, Table2, Bell } from "lucide-react"
import Link from "next/link"
import LandingImage from "./shared/LandingImage"
import { DashedCurve, SwooshArrow } from "./shared/Decorations"
import { Wave } from "./shared/Shapes"

export default function AppPromo() {
  const c = appPromo

  return (
    <section id={c.sectionId} className="relative w-full scroll-mt-24">
      <Wave />
      <div className="relative -mt-px overflow-hidden bg-[var(--landing-blue)] text-white">
        {/* subtle dashed ornaments */}
        <DashedCurve
          variant={2}
          className="absolute -left-10 top-10 hidden h-64 w-[60%] rotate-12 text-white/25 md:block"
        />
        <DashedCurve
          variant={3}
          className="absolute -right-20 bottom-0 hidden h-72 w-[55%] -rotate-12 text-white/20 md:block"
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:py-14">
          {/* Phones */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative order-2 mx-auto h-[400px] w-full max-w-[380px] sm:h-[480px] lg:order-1 lg:col-span-5 lg:h-[540px] lg:max-w-none"
          >
            {/* On hover the phones fan out: the back one slides away and
                tilts further, the front one leans the other way. */}
            <div
              className={cn(
                PHONE_MOTION,
                "absolute right-[4%] top-0 w-[48%] lg:right-[8%]",
                "motion-safe:group-hover:-translate-y-[5%] motion-safe:group-hover:translate-x-[9%] motion-safe:group-hover:rotate-[5deg]"
              )}
            >
              <Phone
                variant="light"
                image={c.screens.back}
                className="rotate-[10deg]"
              />
            </div>
            <div
              className={cn(
                PHONE_MOTION,
                "absolute bottom-0 left-[4%] w-[52%] lg:left-0",
                "motion-safe:group-hover:-translate-x-[4%] motion-safe:group-hover:-translate-y-[3%] xl:motion-safe:group-hover:-translate-x-[12%] motion-safe:group-hover:-rotate-[5deg] motion-safe:group-hover:scale-[1.03]"
              )}
            >
              <Phone
                variant="dark"
                image={c.screens.front}
                className="-rotate-[3deg] group-hover:shadow-[0_36px_60px_-22px_rgba(0,0,0,0.7)]"
              />
            </div>
            <SwooshArrow className="absolute -right-2 bottom-16 hidden w-28 text-white transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:translate-x-3 motion-safe:group-hover:-rotate-6 lg:block xl:-right-6" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-7"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {c.title}
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
              {c.description}
            </p>

            <h3 className="mt-8 text-base font-semibold">{c.featuresTitle}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {c.features.map((f) => (
                <li key={f.title} className="flex items-start gap-3 text-sm sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                  <span className="text-white/80">
                    <strong className="font-semibold text-white">{f.title}</strong>{" "}
                    – {f.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 pl-8 text-sm text-white/70">{c.featuresFooter}</p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-3">
                  <StoreBadge store="google" href={c.stores.googlePlay} />
                  <StoreBadge store="apple" href={c.stores.appStore} />
                </div>
                {c.note && <p className="text-xs text-white/70">{c.note}</p>}
              </div>

              {/* QR code – useful only on desktop */}
              <div className="hidden items-center gap-3 rounded-2xl bg-white p-2.5 pr-4 text-foreground shadow-lg hc:bg-background-muted lg:flex">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-white">
                  {c.qrCode.src ? (
                    <LandingImage image={c.qrCode} sizes="80px" className="object-contain" />
                  ) : (
                    <div
                      role="img"
                      aria-label={c.qrCode.alt}
                      className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed border-slate-300 text-slate-400"
                    >
                      <QrCode className="h-10 w-10" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <p className="max-w-[7rem] text-xs font-medium leading-snug text-slate-600 hc:text-foreground">
                  {c.qrCaption}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Wave flip mirror className="-mt-px" />
    </section>
  )
}

/* -------------------------------------------------------------------------- */

const PHONE_MOTION =
  "transition-[translate,rotate,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"

function Phone({
  variant,
  image,
  className,
}: {
  variant: "dark" | "light"
  image: LandingImageType
  className?: string
}) {
  return (
    <div
      className={cn(
        "aspect-[9/19] w-full rounded-[2.4rem] p-[6px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] transition-shadow duration-700",
        variant === "dark" ? "bg-zinc-900" : "bg-zinc-800",
        className
      )}
    >
      <div
        className={cn(
          "relative h-full w-full overflow-hidden rounded-[2rem]",
          variant === "dark" ? "bg-zinc-900" : "bg-white"
        )}
      >
        {image.src ? (
          <LandingImage image={image} sizes="220px" />
        ) : variant === "dark" ? (
          <MockHomeScreen />
        ) : (
          <MockPlanScreen />
        )}
        {/* notch */}
        <div className="absolute left-1/2 top-2 h-[14px] w-[34%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  )
}

/** Simplified app UI shown until a real screenshot is provided. */
function MockHomeScreen() {
  return (
    <div aria-hidden="true" className="flex h-full flex-col gap-2.5 px-3 pb-3 pt-9 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-white/50">Dzień dobry,</p>
          <p className="text-xs font-semibold">Uczeń</p>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
          <Bell className="h-3 w-3" />
        </div>
      </div>
      <div className="flex items-center justify-between rounded-xl bg-white/10 px-2.5 py-2">
        <p className="text-[8px] leading-tight text-white/70">
          Do końca lekcji
          <br />
          zostało
        </p>
        <p className="text-sm font-bold text-violet-300">14 min</p>
      </div>
      <div className="rounded-xl bg-orange-400 p-2.5">
        <p className="text-[8px] font-semibold text-black/70">Ogłoszenie</p>
        <p className="mt-1 text-[9px] font-medium leading-tight text-black">
          Sukces uczniów w konkursie przedmiotowym
        </p>
      </div>
      <p className="text-[8px] text-white/50">Aktualności</p>
      <div className="flex-1 rounded-xl bg-lime-400 p-2.5">
        <p className="text-[9px] font-semibold leading-tight text-black">
          Dzień otwarty w Elektroniku
        </p>
        <div className="mt-2 space-y-1">
          <div className="h-1 w-full rounded bg-black/15" />
          <div className="h-1 w-4/5 rounded bg-black/15" />
          <div className="h-1 w-3/5 rounded bg-black/15" />
        </div>
      </div>
      <div className="flex items-center justify-around rounded-xl bg-white/5 py-1.5 text-white/50">
        <Table2 className="h-3 w-3" />
        <CalendarDays className="h-3 w-3" />
        <span className="rounded-full bg-violet-500/40 p-1 text-white">
          <Home className="h-3 w-3" />
        </span>
        <Bell className="h-3 w-3" />
      </div>
    </div>
  )
}

function MockPlanScreen() {
  const lessons = ["Matematyka", "J. polski", "Programowanie", "Fizyka", "J. angielski", "Elektronika"]
  return (
    <div aria-hidden="true" className="flex h-full flex-col px-3 pb-3 pt-9 text-zinc-900">
      <p className="text-sm font-semibold">Plan lekcji</p>
      <div className="mt-2 flex gap-1">
        {["Pon", "Wt", "Śr", "Czw", "Pt"].map((d, i) => (
          <span
            key={d}
            className={cn(
              "flex-1 rounded-md py-1 text-center text-[7px] font-medium",
              i === 1 ? "bg-[#354dfc] text-white" : "bg-zinc-100 text-zinc-500"
            )}
          >
            {d}
          </span>
        ))}
      </div>
      <div className="mt-2 flex flex-1 flex-col gap-1.5">
        {lessons.map((l, i) => (
          <div key={l} className="flex items-center gap-2 rounded-lg border border-zinc-100 px-2 py-1.5">
            <span className="text-[8px] font-semibold text-zinc-400">{i + 1}</span>
            <span className="text-[8px] font-medium">{l}</span>
            <span className="ml-auto text-[7px] text-zinc-400">s. {101 + i * 7}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StoreBadge({ store, href }: { store: "google" | "apple"; href: string }) {
  const isGoogle = store === "google"
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="flex h-12 items-center gap-2.5 rounded-xl border border-white/25 bg-black px-4 text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      aria-label={isGoogle ? "Pobierz z Google Play" : "Pobierz z App Store"}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path
          fill="currentColor"
          d={
            isGoogle
              ? "M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"
              : "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
          }
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] uppercase tracking-wide text-white/80">
          {isGoogle ? "Pobierz z" : "Pobierz w"}
        </span>
        <span className="mt-0.5 text-base font-semibold">
          {isGoogle ? "Google Play" : "App Store"}
        </span>
      </span>
    </Link>
  )
}

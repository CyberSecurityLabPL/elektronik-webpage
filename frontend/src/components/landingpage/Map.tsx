"use client"
import { mapExtras } from "@/content/landing"
import { motion } from "framer-motion"
import { Bus, Mail, MapPin, Navigation, Phone, TrainFront } from "lucide-react"
import Link from "next/link"
import GoogleMaps from "../maps/GoogleMaps"
import { Skyline } from "./shared/Shapes"

export default function Map({ data }: { data: any }) {
  const contacts = [
    data?.phoneNumber && {
      icon: Phone,
      label: "Telefon",
      value: data.phoneNumber,
      href: `tel:${String(data.phoneNumber).replace(/\s+/g, "")}`,
    },
    data?.email && {
      icon: Mail,
      label: "E-mail",
      value: data.email,
      href: `mailto:${data.email}`,
    },
    data?.location && {
      icon: MapPin,
      label: "Adres",
      value: data.location,
      href: mapExtras.directionsUrl,
      external: true,
    },
  ].filter(Boolean) as {
    icon: typeof Phone
    label: string
    value: string
    href: string
    external?: boolean
  }[]

  return (
    <section id={data?.sectionId ?? "map"} className="relative w-full scroll-mt-24">
      <Skyline mirror />
      <div className="-mt-px bg-[var(--landing-blue)] text-white">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:py-14">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="order-2 h-[320px] overflow-hidden rounded-3xl bg-white p-1.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] hc:bg-background-muted sm:h-[400px] lg:order-1 lg:col-span-7 lg:h-[460px]"
          >
            <GoogleMaps className="rounded-[1.25rem] p-0" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-5"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {data?.title ?? "Tutaj nas znajdziesz"}
            </h2>
            {data?.Content && (
              <p className="mt-4 text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
                {data.Content}
              </p>
            )}

            <ul className="mt-8 flex flex-col gap-3">
              {contacts.map(({ icon: Icon, label, value, href, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    className="group flex items-center gap-4 rounded-2xl bg-white/10 p-3 pr-4 transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary hc:bg-primary hc:text-black">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs text-white/70">{label}</span>
                      <span className="break-words text-sm font-semibold sm:text-base">
                        {value}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {mapExtras.transport.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {mapExtras.transport.map((t) => {
                  const Icon = t.type === "train" ? TrainFront : Bus
                  return (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-3 py-1.5 text-xs text-white/90"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="font-medium">{t.label}</span>
                      <span className="text-white/60">· {t.detail}</span>
                    </span>
                  )
                })}
              </div>
            )}

            <Link
              href={mapExtras.directionsUrl}
              target="_blank"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 hc:bg-primary hc:text-black"
            >
              <Navigation className="h-4 w-4" />
              Wyznacz trasę
            </Link>
          </motion.div>
        </div>
      </div>
      <Skyline flip className="-mt-px" />
    </section>
  )
}

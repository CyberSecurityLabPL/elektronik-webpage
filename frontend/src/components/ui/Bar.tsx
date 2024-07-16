"use client"
import { X } from "lucide-react"
import { useState } from "react"
interface alertProps {
  Alert: string | null
}
export default function Bar({ alert }: { alert: alertProps }) {
  const [dataState, setDataState] = useState(alert?.Alert ? "open" : "closed")

  return (
    <div
      data-state={dataState}
      className={`data-[state=closed]:animate-bar-up relative top-0 flex h-fit py-2 w-full items-center justify-between bg-foreground text-secondary transition-all data-[state=closed]:invisible data-[state=closed]:h-0 data-[state=closed]:py-0`}
    >
      <p className="flex w-full justify-center gap-2 overflow-hidden truncate whitespace-nowrap px-2 sm:px-4 sm:text-sm text-xs md:text-base text-pretty">
        <span className="font-semibold">Alert: </span>
        {alert?.Alert ?? ""}
      </p>
      <span className="flex justify-end sm:px-4 px-2">
        <X onClick={() => setDataState("closed")} className="cursor-pointer" />
      </span>
    </div>
  )
}

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
      className={`data-[state=closed]:animate-bar-up relative top-0 flex h-12 w-full items-center justify-between bg-foreground text-secondary transition-all data-[state=closed]:invisible  data-[state=closed]:h-0`}
    >
      <p className="flex w-full justify-center gap-2  overflow-hidden truncate whitespace-nowrap  px-4 ">
        <span className="font-semibold">Alert: </span>
        {alert?.Alert ?? ""}
      </p>
      <span className="flex justify-end  px-4">
        <X onClick={() => setDataState("closed")} className="cursor-pointer" />
      </span>
    </div>
  )
}

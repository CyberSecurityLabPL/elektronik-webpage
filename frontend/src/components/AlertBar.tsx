"use client"
import { X } from "lucide-react"
import { useState } from "react"

interface AlertProps {
  alert: string | null
}

export default function AlertBar({ data }: { data: AlertProps }) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div
      data-isopen={isOpen}
      className={`relative top-0 flex h-fit w-full items-center justify-between bg-foreground py-2 text-secondary transition-all data-[isopen=false]:invisible data-[isopen=false]:h-0 data-[isopen=false]:animate-bar-up data-[isopen=false]:py-0`}
    >
      <p className="flex w-full justify-center gap-2 overflow-hidden truncate whitespace-nowrap text-pretty px-2 text-xs sm:px-4 sm:text-sm md:text-base">
        <span className="font-semibold">Alert: </span>
        {data?.alert ?? ""}
      </p>
      <span className="flex justify-end px-2 sm:px-4">
        <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
      </span>
    </div>
  )
}

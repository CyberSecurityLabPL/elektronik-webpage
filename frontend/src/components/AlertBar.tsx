"use client"
import { X } from "lucide-react"
import { useEffect, useState } from "react"

export default function AlertBar({ data }: { data: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const updatedAt = new Date(data.updatedAt)

  const openAlert = () => {
    setIsOpen(true)
    localStorage.setItem("alertbar_closed", "false")
    localStorage.removeItem("alertbar_closed_at")
  }

  const closeAlert = () => {
    setIsOpen(false)
    localStorage.setItem("alertbar_closed", "true")
    localStorage.setItem("alertbar_closed_at", Date.now().toString())
  }

  const getAlertbarStatus = (): boolean => {
    const item = localStorage.getItem("alertbar_closed")
    if (item !== "false" && item !== "true") {
      return false
    } else {
      return JSON.parse(item)
    }
  }

  const getAlertbarClosedAt = (): string | null =>
    JSON.parse(localStorage.getItem("alertbar_closed_at") ?? "null")

  useEffect(() => {
    const isAlertbarClosed = getAlertbarStatus()

    const alertbarClosedAt = getAlertbarClosedAt()

    if (isAlertbarClosed) {
      if (alertbarClosedAt !== null && new Date(alertbarClosedAt) < updatedAt) {
        openAlert()
      }
    } else {
      openAlert()
    }
  }, [isOpen])

  return (
    <div
      data-isopen={isOpen}
      className={`relative top-0 flex h-fit w-full items-center justify-between bg-foreground py-2 text-secondary transition-all data-[isopen=false]:invisible data-[isopen=false]:h-0 data-[isopen=false]:animate-bar-up data-[isopen=false]:py-0`}
    >
      <p className="flex w-full justify-center gap-2 overflow-hidden truncate whitespace-nowrap text-pretty px-2 text-xs sm:px-4 sm:text-sm md:text-base">
        {/* <span className="font-semibold">Alert: </span> */}
        {data?.alert ?? ""}
      </p>
      <span className="flex justify-end px-2 sm:px-4">
        <X onClick={closeAlert} className="cursor-pointer" />
      </span>
    </div>
  )
}

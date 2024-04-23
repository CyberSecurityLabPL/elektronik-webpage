"use client"
import { config } from "@/config"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { createContext, useEffect, useState } from "react"
const queryClient = new QueryClient()

export const SelectContext = createContext({
  timetableName: "",
  setTimetableName: (v: string) => {},
  timetableId: "",
  setTimetableId: (v: string) => {},
  timetableType: "",
})

export default function Providers({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams()
  const id = searchParams.get("timetableId")

  const [timetableName, setTimetableName] = useState<string>(config.initialName)
  const [timetableId, setTimetableId] = useState<string>(config.initialId)

  const timetableType = timetableId?.startsWith("o")
    ? "oddział"
    : timetableId?.startsWith("n")
      ? "nauczyciel"
      : timetableId?.startsWith("s")
        ? "sala"
        : "oddział"

  useEffect(() => {
    if (id) setTimetableId(id?.toString())
    // set name from id
  }, [id])

  const select = {
    timetableName,
    setTimetableName,
    timetableId,
    setTimetableId,
    timetableType,
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SelectContext.Provider value={select}>{children}</SelectContext.Provider>
    </QueryClientProvider>
  )
}

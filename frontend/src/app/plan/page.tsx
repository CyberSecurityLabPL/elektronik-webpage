"use client"
import Timetable from "@/components/timetable/Timetable"
import React, { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useContext } from "react"
import { SelectContext } from "@/components/Providers"
import { timetableConfig } from "@/config"

const Page = () => {
  const { setTimetableId } = useContext(SelectContext)
  const router = useRouter()
  const searchParams = useSearchParams()
  useEffect(() => {
    const id = searchParams.get("timetableId")
    const isValid = id?.match(/[n;o;s][1-9]+/)

    if (!isValid || !id)
      router.push(`?timetableId=${timetableConfig.initialId}`)
    setTimetableId(id!)
  }, [router, searchParams, setTimetableId])
  return <Timetable />
}

export default Page

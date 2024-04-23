"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { ServerResponse } from "@/types/timetable"

const useTimetable = () => {
  async function fetchTimetable() {
    const res = await axios.get("https://elektron.wybran.dev/Timetable")
    return (await res.data) as ServerResponse
  }

  return useQuery({
    queryKey: ["timetable"],
    queryFn: fetchTimetable,
  })
}

export default useTimetable

"use server"

import { getExactSubstitutions, getSubstitutions } from "@/lib/api"
import { formatStrapiDate } from "@/lib/utils"

export async function getMoreSubstitutions(page: number) {
  return await getSubstitutions(page)
}

export async function getExactSubstitution(date: Date) {
  return await getExactSubstitutions(formatStrapiDate(date))
}

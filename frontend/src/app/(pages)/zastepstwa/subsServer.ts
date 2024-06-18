"use server"

import { getExactSubstitutions, getSubstitutions } from "@/lib/api"

export async function getMoreSubstitutions(page: number){
    return await getSubstitutions(page)
}

export async function getExactSubstitution(date: Date){
    return await getExactSubstitutions(date)
}
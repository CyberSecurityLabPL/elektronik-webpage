"use server"

import { getSubstitutions } from "@/lib/api"

export async function getMoreSubstitutions(page: number){
    return await getSubstitutions(page)
}
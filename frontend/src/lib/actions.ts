"use server"
import { revalidatePath, revalidateTag } from "next/cache"
import { after } from "next/server"

export async function revalidate(path: string) {
  // "use server"
  after(() => revalidatePath(path))
}

export async function revalidateT(tag: string) {
  // "use server"
  after(() => revalidateTag(tag, "max"))
}

import { revalidatePath, revalidateTag } from "next/cache"

export async function revalidate(path: string) {
  "use server"
  revalidatePath(path)
}

export async function revalidateT(tag: string) {
  "use server"
  revalidateTag(tag)
}

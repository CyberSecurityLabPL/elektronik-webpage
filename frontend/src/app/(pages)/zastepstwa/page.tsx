import { redirect } from "next/navigation"

export default async function SubstitutionPage() {
  const dateString = new Date().toISOString().split("T")[0] // "YYYY-MM-DD"
  redirect(`/zastepstwa/${dateString}`)
}

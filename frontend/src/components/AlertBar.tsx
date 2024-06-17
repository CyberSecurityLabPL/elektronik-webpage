import { getHotAlert } from "@/lib/api"

import Bar from "./ui/Bar"
export default async function AlertBar() {
  const data = await getHotAlert()
  return <Bar alert={data} />
}

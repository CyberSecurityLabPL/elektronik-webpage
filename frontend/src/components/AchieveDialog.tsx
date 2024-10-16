import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"
import { Separator } from "./ui/separator"

export default function AchieveDialog({
  date,
  opis,
  children,
  name,
}: {
  date: string
  opis: string
  children?: ReactNode
  name: string
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="w-11/12"></DialogTitle>
          <DialogDescription>
            <div className=" text-lg font-semibold text-black">{name}</div>
            {date}
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <div className="text-sm font-medium">{opis}</div>
      </DialogContent>
    </Dialog>
  )
}

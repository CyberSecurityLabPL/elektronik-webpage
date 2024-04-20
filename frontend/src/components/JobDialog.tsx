import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "./ui/separator"
import { ReactNode } from "react"
import { formatDateYear } from "@/lib/utils"

export default function JobDialog({
  company,
  jobName,
  date,
  tasks,
  reqs,
  children,
}: {
  company: string
  jobName: string
  date: string
  tasks: string[]
  reqs: string[]
  children?: ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="w-11/12">{`${company} - ${jobName}`}</DialogTitle>
          <DialogDescription>{formatDateYear(date)}</DialogDescription>
        </DialogHeader>
        <div className="flex items-start flex-col">
          <div className="p-1">
            <div className="text-sm font-semibold">Zadania</div>
            <ul className="list-disc">
              {tasks.map((task: any) => (
                <li
                  className="text-xs font-light my-1 ml-4"
                  key={task.id + task.value}
                >
                  {task.value}
                </li>
              ))}
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="p-1">
            <div className="text-sm font-semibold">Wymagania</div>
            <ul className="list-disc">
              {reqs.map((req: any) => (
                <li
                  className="text-xs font-light my-1 ml-4"
                  key={req.id + req.value}
                >
                  {req.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

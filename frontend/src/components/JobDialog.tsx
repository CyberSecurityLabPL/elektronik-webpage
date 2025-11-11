import {
  Dialog,
  DialogContent,
  DialogDescription,
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
      <DialogContent className="w-full ">
        <DialogHeader className="box-border w-fit whitespace-pre-wrap wrap-break-word ">
          <DialogTitle className="box-border w-11/12  whitespace-pre-wrap wrap-break-word break-all text-left ">{`${company} - ${jobName}`}</DialogTitle>
          <DialogDescription className="text-left">
            {formatDateYear(date)}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-start">
          <div className="p-1">
            <div className="text-sm font-semibold">Zadania</div>
            <ul className="list-disc">
              {tasks.map((task: any) => (
                <li
                  className="my-1 ml-4 text-xs font-light"
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
                  className="my-1 ml-4 text-xs font-light"
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

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

export default function JobDialog({company, jobName, date, tasks, reqs, children} : {company: string, jobName: string, date: string, tasks: string[], reqs: string[], children?: ReactNode}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="w-11/12">{`${company} - ${jobName}`}</DialogTitle>
          <DialogDescription>
            {date}
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center flex-col">
            <div className="p-1">
                <div className="text-sm font-semibold">Zadania</div>
                <ul className="list-disc">
                    {tasks.map((task) => <li className="text-xs font-light my-1 ml-4" key={task}>{task}</li>)}
                </ul>
            </div>
            <Separator className="my-4" />
            <div className="p-1">
            <div className="text-sm font-semibold">Wymagania</div>
                <ul className="list-disc">
                    {reqs.map((req) => <li className="text-xs font-light my-1 ml-4" key={req}>{req}</li>)}
                </ul>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

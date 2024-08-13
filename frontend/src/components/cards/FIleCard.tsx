import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Download } from "lucide-react"
import { Pdf, Docx, Csv, Default } from "../icons"
import { LucideProps } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FileIcon } from "../Icon"
import { IconColors } from "../Icon"
import Link from "next/link"

import { format } from "date-fns"

type FileProps = {
  color: IconColors
  icon: React.FC<LucideProps>
}

interface FileCardProps {
  name: string
  date: string
  url: string
  fileType: string
}

export default function FileCard({ name, date, url, fileType }: FileCardProps) {
  const fileProps = getFileProps(fileType)

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-[0px_4px_15px] shadow-slate-400/25 xs:rounded-2xl">
      <div className="flex gap-4 ">
        <div className="flex items-center">
          <FileIcon icon={fileProps.icon} color={fileProps.color} />
        </div>
        <div className="flex flex-col">
          <span className=" text-lg xs:text-xl">{name}</span>
          <span className="text-sm font-medium text-zinc-400 xs:text-base">
            {format(new Date(date), "dd.MM.yyyy - HH:mm")}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button variant="ghost" size="icon" asChild>
          <Link href={process.env.NEXT_PUBLIC_STRAPI_URL + url} target="_blank">
            <Download className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function getFileProps(type: string): FileProps {
  switch (type.toLowerCase()) {
    case ".pdf":
      return {
        color: "red",
        icon: Pdf,
      }
    case ".docx":
      return {
        color: "blue",
        icon: Docx,
      }
    case ".csv":
      return {
        color: "green",
        icon: Csv,
      }
    default:
      return {
        color: "slate",
        icon: Default,
      }
  }
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Download,
  File,
  FileText,
  FileSpreadsheet,
  FileAxis3D,
} from "lucide-react"
import { Pdf, Docx, Csv, Default } from "../icons"
import { LucideProps } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FileIcon } from "../Icon"
import { IconColors } from "../Icon"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { format } from "date-fns"

type FileProps = {
  color: IconColors
  icon: React.FC<LucideProps>
}

export default function FileCard({
  name,
  date,
  url,
  fileType,
}: {
  name: string
  date: string
  url: string
  fileType: string
}) {
  console.log(fileType)

  const fileProps = getFileProps(fileType)

  return (
    <Link passHref href={url}>
      <Card className="flex  cursor-pointer items-center justify-between  rounded-lg border-none p-4 shadow-md">
        <div className="flex  items-center justify-start gap-2">
          <CardContent className="flex items-center justify-center p-0">
            <FileIcon icon={fileProps.icon} color={fileProps.color} />
          </CardContent>
          <CardHeader className="flex  flex-col items-start justify-center space-y-0 p-0">
            <CardTitle className="w-40 truncate text-wrap text-lg font-normal text-slate-950 md:w-60 ">
              {name}
            </CardTitle>
            <CardDescription className="text-xs font-medium text-slate-400">
              {format(date, "dd.MM.yyyy - HH:mm")}
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="flex items-center justify-center p-0">
          <DownloadIcon />
        </CardContent>
      </Card>
    </Link>
  )
}

function DownloadIcon() {
  return (
    <Button variant="ghost" size="icon">
      <Download className="h-5 w-5" />
    </Button>
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

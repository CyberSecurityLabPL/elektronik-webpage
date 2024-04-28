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
  const fileProps = getFileProps(fileType)

  return (
    <Link
      passHref
      href={process.env.NEXT_PUBLIC_BACKEND_URL + url}
      className=""
    >
      <Card className="flex items-center justify-between  p-4">
        <div className="flex items-center gap-2">
          <CardContent className="flex items-center p-0">
            <FileIcon icon={fileProps.icon} color={fileProps.color} />
          </CardContent>
          <CardHeader className="items-start space-y-0 p-0">
            <CardTitle className=" text-xl">{name}</CardTitle>
            <CardDescription className="">
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

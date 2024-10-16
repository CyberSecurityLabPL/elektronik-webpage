import { Button } from "@/components/ui/button"
import { Download, LucideProps } from "lucide-react"
import Link from "next/link"
import { FileIcon, IconColors } from "../Icon"
import { Csv, Default, Docx, Pdf } from "../icons"

import { format } from "date-fns"

type FileProps = {
  color: IconColors
  icon: React.FC<LucideProps>
}

interface FileCardProps {
  name: string
  url: string
  fileType: string
}

export default function CourseCard({ name, url, fileType }: FileCardProps) {
  const fileProps = getFileProps(fileType)

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-[0px_4px_15px] shadow-slate-400/25 rounded-lg xs:rounded-2xl">
      <div className="flex gap-4 ">
        <div className="hidden items-center lg:flex">
          <FileIcon icon={fileProps.icon} color={fileProps.color} />
        </div>
        <div className="flex max-w-[30rem] items-center justify-center max-xs:w-56 lg:px-2">
          <span className="text-left text-pretty text-xs lg:text-xl">{name}</span>
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

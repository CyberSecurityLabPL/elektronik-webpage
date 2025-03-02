import { Button } from "@/components/ui/button"
import { Download, LucideProps } from "lucide-react"
import Link from "next/link"
import { FileIcon, IconColors } from "../Icon"
import { Csv, Default, Docx, Pdf } from "../icons"

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
    <div className="flex items-center justify-between rounded-lg bg-background p-4 shadow-[0px_4px_15px] shadow-slate-400/25 xs:rounded-2xl hc:shadow-none hc:border border-background-accent">
      <div className="flex gap-4 ">
        <div className=" flex items-center">
          <FileIcon icon={fileProps.icon} color={fileProps.color} />
        </div>
        <div className="flex  items-center justify-center lg:px-2">
          <span className="lg:text-regular w-full text-pretty text-left text-xs font-medium lg:text-xl">
            {name}
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

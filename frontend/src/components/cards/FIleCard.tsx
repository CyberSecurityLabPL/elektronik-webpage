import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Download, File, FileText, FileSpreadsheet, FileAxis3D } from "lucide-react"
import { LucideProps } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { FileIcon } from "../Icon"
import { IconColors } from "../Icon"
import Link from "next/link";

type FileProps = {
    color: IconColors,
    icon: React.FC<LucideProps>
}

export default function FileCard({name, date, url, fileType} : {name: string, date: string, url: string, fileType: string}){
    
    const fileProps = getFileProps(fileType)

    return (
        <Link passHref href={url}>
            <Card className="w-[20rem] mx-4 my-2 aspect-[493/96] flex justify-between items-center cursor-pointer">
                <div className="flex justify-center">
                    <CardContent className="flex justify-center items-center space-y-0 p-0 mx-2">
                        <FileIcon icon={fileProps.icon} color={fileProps.color} />
                    </CardContent>
                    <CardHeader className="flex flex-col items-start space-y-0 p-0">
                        <CardTitle className="text-base font-normal text-slate-950">{name}</CardTitle>
                        <CardDescription className="text-[10px] font-medium text-slate-400">{date}</CardDescription>
                    </CardHeader>
                </div>
                <CardContent className="flex justify-center items-center space-y-0 p-0 m-2">
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

function getFileProps(type: string) : FileProps{
    switch (type.toLowerCase()){
        case "pdf":
            return {
                color: "red",
                icon: FileAxis3D
            }
        case "docx":
            return {
                color: "blue",
                icon: FileText
            }
        case "csv":
            return {
                color: "green",
                icon: FileSpreadsheet
            }
        default:
            return {
                color: "slate",
                icon: File
            }
    }
}


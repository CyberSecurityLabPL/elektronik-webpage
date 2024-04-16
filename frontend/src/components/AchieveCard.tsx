import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

const truncate = (opis: string) =>
    opis?.length > 100 ? `${opis.substring(0, 90)}...` : opis;



export default function AchieveCard({name, src, date, opis} : {name: string, src: string, date: string, opis: string}) {
    return (
        <Card className="w-[48rem] h-[11rem] rounded-3xl mx-4 my-2 aspect-[935/136] flex justify-between items-center cursor-pointer shadow-sm">
            <div className={`flex h-full rounded-[inherit] rounded-r-none`}>
                <div className="w-60 h-full overflow-hidden rounded-[inherit] bg-slate-600 relative">
                    <Image alt={name+" image"} src={src} fill objectFit="cover"/>
                </div>
                <div className="max-w-md overflow-clip">
                    <CardHeader>
                        <CardTitle className="text-slate-800">{name}</CardTitle>
                    </CardHeader>
                    <CardContent className="inline-block align-center font-medium">
                    <div className="flex float-left justify-end items-center text-black">{truncate(opis)}
                    </div>
                    </CardContent>
                    <CardFooter className="flex text-slate-400 text-sm font-semibold py-0">
                    <div className="flex float-left justify-end items-center text-slate-400 text-xs font-light mb-2">{date}</div>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}
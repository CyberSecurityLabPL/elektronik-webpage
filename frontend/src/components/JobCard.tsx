import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "./ui/badge";
import IconComponent from "./Icon";
import { MapPin } from "lucide-react";
import Image from "next/image";

function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function JobCard({name, src, minPay, maxPay, location, badges} : {name: string, src: string, minPay: number, maxPay: number, location: string, badges: string[]}) {
    return (
        <Card className="w-[58rem] rounded-3xl mx-4 my-2 aspect-[935/136] flex justify-between items-center cursor-pointer shadow-sm">
            <div className={`flex h-full rounded-[inherit] rounded-r-none`}>
                <div className="w-60 h-full overflow-hidden rounded-[inherit] bg-slate-600 relative">
                    <Image alt={name+" image"} src={src} fill objectFit="cover"/>
                </div>
                <div className="max-w-md overflow-clip">
                    <CardHeader>
                        <CardTitle className="text-slate-800">{name}</CardTitle>
                        <CardDescription className="font-bold text-primary">{`${numberWithSpaces(minPay)} PLN - ${numberWithSpaces(maxPay)} PLN`}</CardDescription>
                    </CardHeader>
                    <CardFooter className="text-slate-400 text-sm font-semibold">
                        <MapPin className="p-[2px] ml-[-4px]" />
                        <div>{location}</div>
                    </CardFooter>
                </div>
            </div>
            <div className="flex items-start h-full mt-4 p-5">
                <Badge className="mx-1 bg-primary/25 text-primary hover:bg-primary/20">{badges[0]}</Badge>
                <Badge className="mx-1 text-primary border-primary" variant="outline" >{badges[1]}</Badge>
            </div>
        </Card>
    )
}
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge";
import IconComponent from "../Icon";
import { MapPin } from "lucide-react";
import Image from "next/image";

function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function JobCard({name, src, date, minPay, maxPay, location, badges} : {name: string, src: string, date: string, minPay: number, maxPay: number, location: string, badges: string[]}) {
    return (
        <Card className="w-[19rem] h-[5rem] rounded-3xl mx-4 my-2 aspect-[935/136] flex justify-between items-center cursor-pointer shadow-sm md:w-[42rem] md:h-[8.5rem] lg:w-[52rem] lg:h-[10rem]">
            <div className={`flex h-full rounded-[inherit] rounded-r-none w-[10.5rem] md:w-[30rem]`}>
                <div className="w-36 h-full overflow-hidden rounded-[inherit] bg-slate-600 relative md:w-[10rem] lg:w-[15rem] xl:w-[19rem]">
                    <Image alt={name+" image"} src={src} fill objectFit="cover"/>
                </div>
                <div className="max-w-md overflow-clip w-[16rem] grid grid-col lg:w-[25rem]">
                    <CardHeader className='relative w-[20rem] lg:w-[25rem]'>
                        <CardTitle className="z-10 font-bold text-slate-800 w-[14rem] text-[0.7rem] absolute top-[0.3rem] left-[0.4rem] md:text-[1.5rem] lg:text-[1.8rem] lg:w-[20rem]">{name}</CardTitle>
                        <CardDescription className="font-bold text-primary text-[0.5rem] absolute top-1/3 left-[0.4rem] md:text-[1rem]">{`${numberWithSpaces(minPay)} PLN - ${numberWithSpaces(maxPay)} PLN`}</CardDescription>
                    </CardHeader>
                    <div className='relative'>
                    <CardFooter className="text-slate-400 text-sm font-semibold py-0">
                        <MapPin className="p-[2px] ml-[-4px] w-[01rem] absolute bottom-[0.4rem] left-[0.4rem] md:w-[1.4rem] lg:w-[1.7rem]" />
                        <div className='font-medium absolute bottom-[0.4rem] left-[1.1rem] lg:left-[1.8rem] md:left-[1.4rem] text-[0.6rem] md:text-[0.9rem] lg:text-[1.1rem]'>{location}</div>
                    </CardFooter>
                    </div>
                </div>
            </div>
            <div className="relative justify-between h-full mt-4 p-5 float-left">
                <div className="justify-center w-20 grid grid-cols-1 gap-[0.5rem] md:w-[12rem]">
                    <Badge className="absolute top-[0.1rem] right-[3.6rem] md:right-[7rem] lg:right-[8rem] mx-1 justify-center bg-primary/25 text-primary font-bold hover:bg-primary/ text-[0.5rem] w-[3rem] md:w-[5rem] md:h-[1.5rem] md:text-[0.6rem] lg:h-[1.9rem] lg:text-[0.8rem] lg:w-[6rem]">{badges[0]}</Badge>
                    <Badge className="absolute top-[0.1rem] right-[0.2rem] md:right-[1rem] mx-1 justify-center text-primary border-primary font-bold text-[0.5rem] w-[3rem] md:w-[5rem] md:h-[1.5rem] md:text-[0.6rem] lg:h-[1.9rem] lg:w-[6rem] lg:text-[0.8rem]" variant="outline" >{badges[1]}</Badge>
                </div>
                <div className="absolute bottom-[0.7rem] lg:bottom-[1rem] right-[3.2rem] xl:right-[1rem] justify-end items-center text-slate-400 text-xs text-[0.5rem] font-light md:text-[0.9rem] lg:text-[1.0rem]">{date}</div>
            </div>
        </Card>
    )
}
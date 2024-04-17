import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"

export default function BookCard({subject, src, title, dist} : {subject: string, src: string, title: string, dist: string}){
    return (
        <Card className="flex w-fit aspect-[55/26] m-4 shadow-sm p-3">
            <div className="w-32 h-full relative">
                <Image alt={`${title} img`} src={src} fill objectFit="cover"/>
            </div>
            <div className="w-[19rem] h-full">
                <CardHeader className="py-0 pb-2">
                    <CardTitle className="font-semibold text-foreground text-2xl">{subject}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-foreground py-0 pb-2">
                    <p className="font-light">Tytuł: </p>
                    <p className="font-medium mb-1">{title}</p>
                    <p className="font-light">Wydawnictwo: </p>
                    <p className="font-medium">{dist}</p>
                </CardContent>
                <CardFooter className="flex justify-center items-center w-full py-0 my-0">
                    <Button variant={"outline"}>Kup Teraz</Button>
                </CardFooter>
            </div>
        </Card>
    )
}
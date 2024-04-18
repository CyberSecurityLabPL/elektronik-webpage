import Header from "@/components/Header";
import { formatDate, renderMarkdown } from "@/lib/utils";
import Image from "next/image";
import { CalendarPlus, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { getNews } from "@/lib/api";
import { log } from "console";
import H1, { H2, H3 } from "@/components/markdown/Headers";
import { ReactNode } from "react";
import { format } from "date-fns"

export default async function Page({params} : {params: {news: string}}) {
    const data = await getNews(params.news)

    return (
        <main className="w-full flex flex-col items-center gap-4">
            <Header title={"Aktualności i ogłoszenia"} subtitle={"O to co dzieje się w naszej szkole!"} />
            <div className="w-11/12 flex flex-col p-4 items-center gap-4 bg-background shadow-sm rounded-xl">
                <div className="relative w-full aspect-[30/10] sm:aspect-[1307/209] rounded-xl sm:rounded-3xl bg-slate-600">
                    <Image
                        className="rounded-[inherit] object-cover"
                        fill
                        alt={"xd"}
                        src={
                        "/images/cardtest.jpg"
                        }
                    />
                </div>
                <div className="flex flex-col items-center w-full gap-4">
                    <h1 className="flex w-full justify-start text-left py-2 font-semibold text-xl sm:text-3xl">{data?.title ?? `Couldn't load ${params.news} article!`}</h1>
                    <div className="flex w-full flex-col items-start">
                        <span className='flex gap-1 justify-center items-center text-sm sm:text-base'>
                            <CalendarPlus className='text-primary size-3 sm:size-4'/>
                            <p>{formatDate(data?.updatedAt)}</p>
                        </span>
                        <span className='flex gap-1 justify-center items-center text-sm sm:text-base'>
                            <User className='text-primary size-3 sm:size-4'/>
                            <p>{data?.updatedBy ?? "No creator found!"}</p>
                        </span>
                    </div>
                    <Separator />
                    <div className="w-full py-2 text-xs sm:text-base">
                        {renderMarkdown(data?.content ?? "Couldn't load content!", {
                            components: {
                                h1: H1,
                                h2: H2,
                                h3: H3,
                                hr: () => <Separator className="my-2" />,
                                ul: (props) => <ul className="list-disc pl-4 py-2">{props.children}</ul>, 
                                ol: (props) => <ol className="list-decimal pl-4 py-2">{props.children}</ol>
                            }
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
}
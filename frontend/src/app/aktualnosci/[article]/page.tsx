import Header from "@/components/Header";
import H1, { H2, H3 } from "@/components/markdown/Headers";
import { Separator } from "@/components/ui/separator";
import { getNews } from "@/lib/api";
import { formatDate, renderMarkdown } from "@/lib/utils";
import { CalendarPlus, User } from "lucide-react";
import Image from "next/image";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
    const articles = await getNews({
        flatteners: ["id"]
    })

    const params = articles.data.map((article: any) => ({
        article: article.id + "",
    }))      

    return params
  }



export default async function Page({params} : {params: {article: string}}) {
    const article = await getNews({
        params: params.article,
    })

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
                    <h1 className="flex w-full justify-start text-left py-2 font-semibold text-xl sm:text-3xl">{article?.title ?? `Couldn't load ${params.article} article!`}</h1>
                    <div className="flex w-full flex-col items-start">
                        <span className='flex gap-1 justify-center items-center text-sm sm:text-base'>
                            <CalendarPlus className='text-primary size-3 sm:size-4'/>
                            <p>{formatDate(article?.updatedAt)}</p>
                        </span>
                        <span className='flex gap-1 justify-center items-center text-sm sm:text-base'>
                            <User className='text-primary size-3 sm:size-4'/>
                            <p>{article?.updatedBy ?? "No creator found!"}</p>
                        </span>
                    </div>
                    <Separator />
                    <div className="w-full py-2 text-xs sm:text-base">
                        {renderMarkdown(article?.content ?? "Couldn't load content!", {
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
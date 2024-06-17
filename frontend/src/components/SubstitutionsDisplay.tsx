"use client"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import { renderMarkdown } from "@/lib/utils"
import Header from "./Header";
import { formatDateWeek } from "@/lib/utils"
import { Button } from "./ui/button";
import { useState } from "react";
import { getMoreSubstitutions } from "@/app/(pages)/zastepstwa/subsServer";
import { Loader2 } from "lucide-react";

export default function SubstitutionsDisplay({page, initial} : {page: any, initial: any}) {
    const sub = initial.data[0].attributes
    const meta = initial.meta.pagination.pageCount

    const [prevLoading, setPrevLoading] = useState(false)
    const [nextLoading, setNextLoading] = useState(false)

    const [curPage, setCurPage] = useState(1);
    const [data, setData] = useState(sub);

    function change(backwards: boolean){
        const page = backwards ? curPage-1 : curPage+1
        setCurPage(page)
        if(backwards){
            setNextLoading(true)
            setPrevLoading(false)
        } else {
            setPrevLoading(true)
            setNextLoading(false)
        }
        getMoreSubstitutions(page).then((res: any) => {
            console.log(res);
            setData(res.data[0].attributes)
        }).finally(() => {
            setNextLoading(false)
            setPrevLoading(false)
        })
    }

    return (
        <>
            <Header title={page?.heading ?? "Zastępstwa"} subtitle={formatDateWeek(data?.date ?? data?.createdAt)} />
            <div className="h-fit min-h-96 w-3/4 rounded-lg border bg-background p-3 shadow-sm">
                <div className="px-2 text-xs sm:text-base">
                    {renderMarkdown(
                        data?.substitutions ?? "Couldn't load content!",
                        markdownOptions
                    )}
                </div>
                
            </div>
            <div className="grid gap-x-4 grid-cols-2">
                {prevLoading ? <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {"Please wait"}
                    </Button>
                    : 
                    <Button className={`${curPage<meta ? "" : "invisible"}`} onClick={() => {change(false)}} variant={"outline"}>{"< Previous"}</Button>
                }
                {nextLoading ? <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {"Please wait"}
                    </Button>
                    : 
                    <Button className={`${curPage>1 ? "" : "invisible"}`} onClick={() => {change(true)}} variant={"outline"}>{"Next >"}</Button>
                }
            </div>
        </>
    )
}


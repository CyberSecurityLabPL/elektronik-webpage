"use client"
import markdownOptions from "@/components/markdown/MarkdownOptions"
import { renderMarkdown } from "@/lib/utils"
import Header from "./Header";
import { formatDateWeek } from "@/lib/utils"
import { Button } from "./ui/button";
import { Dispatch, SetStateAction, useState } from "react";
import { getExactSubstitution, getMoreSubstitutions } from "@/app/(pages)/zastepstwa/subsServer";
import { Loader2 } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";

export default function SubstitutionsDisplay({page, initial} : {page: any, initial: any}) {
    const sub = initial.data[0].attributes
    const meta = initial.meta.pagination.pageCount

    const [prevLoading, setPrevLoading] = useState(false)
    const [nextLoading, setNextLoading] = useState(false)

    const [curPage, setCurPage] = useState(1);
    const [data, setData] = useState(sub);

    const [exact, setExact] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date())

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
            setData(res.data[0].attributes)
            setSelectedDate(new Date(res.data[0].attributes?.date ?? res.data[0].attributes?.createdAt))
        }).finally(() => {
            setNextLoading(false)
            setPrevLoading(false)
        })
    }

    function getExact(date: Date){
        setExact(true)
        getExactSubstitution(date).then((res: any) => {
            console.log(res);
            if (res.length==0){
                setData({
                    date: date,
                    substitutions: "Brak Zastępstw!",
                    createdAt: null
                })
                return
            }
            setData(res[0].attributes)
        }).finally(() => {
            setNextLoading(false)
            setPrevLoading(false)
        })
    }

    function reset(){
        const page = 1
        setCurPage(page)
        setExact(false)
        getMoreSubstitutions(page).then((res: any) => {
            console.log(res);
            setData(res.data[0].attributes)
            setSelectedDate(new Date(res.data[0].attributes?.date ?? res.data[0].attributes?.createdAt))
        }).finally(() => {
            setNextLoading(false)
            setPrevLoading(false)
        })
    }

    return (
        <>
            <Header title={page?.heading ?? "Zastępstwa"}>
                <DatePicker curData={data} selectedDate={selectedDate} setSelectedDate={setSelectedDate} getExact={getExact} />
            </Header>
            <div className="h-fit min-h-96 w-3/4 rounded-lg border bg-background p-3 shadow-sm">
                <div className="px-2 text-xs sm:text-base">
                    {renderMarkdown(
                        data?.substitutions ?? "Couldn't load content!",
                        markdownOptions
                    )}
                </div>
                
            </div>
            <div className={`${exact ? "flex justify-center items-center" : "grid grid-cols-2"} gap-x-4`}>
                {
                    exact ? 
                    <>
                        <Button onClick={()=>{reset()}} variant={"outline"}>{"Go back"}</Button>
                    </>
                    : 
                    <>
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
                    </>
                }
                
            </div>
        </>
    )
}

function DatePicker({curData, selectedDate, setSelectedDate, getExact} : {curData: any, selectedDate: Date, setSelectedDate: Dispatch<SetStateAction<Date>>, getExact: any}){
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={()=>setOpen(!open)}>
        <PopoverTrigger asChild>
            <div className="flex items-center justify-center px-2">
                <div className="hover:text-primary hover:cursor-pointer text-md flex max-w-[54rem] items-center justify-center text-pretty text-center leading-relaxed text-primary-foreground sm:text-lg lg:text-xl">
                    {formatDateWeek(curData?.date ?? curData?.createdAt)}
                </div>
            </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
            <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(d: any) => {
                    const date : Date = d ? d : new Date()
                    setSelectedDate(date)
                    setOpen(false)
                    getExact(date)
                }}
                initialFocus
            />
        </PopoverContent>
        </Popover>
    )
}

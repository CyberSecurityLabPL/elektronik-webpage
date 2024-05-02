"use client"
import { LegendOption } from "@/types/timetable"

import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react"
import { ScrollArea } from "../ui/scroll-area"

import useTimetable from "@/state/timetable-state"
import { useRouter } from "next/navigation"
import { SelectContext } from "../Providers"

const Footer = () => {
  const { setTimetableName, timetableName, timetableType, timetableId } =
    useContext(SelectContext)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [value, setValue] = useState(timetableName)
  const [value2, setValue2] = useState("")
  const [value3, setValue3] = useState("")

  const handleChange = (v: string, n: number) => {
    switch (n) {
      case 1:
        setValue(v)
        setValue2("")
        setValue3("")
        setTimetableName(v)
        break
      case 2:
        setValue("")
        setValue2(v)
        setValue3("")
        setTimetableName(v)
        break
      case 3:
        setValue("")
        setValue2("")
        setValue3(v)
        setTimetableName(v)
        break
      default:
        break
    }
  }

  const { data: timetable, isPending, isError, error } = useTimetable()

  useEffect(() => {
    const name = // @ts-ignore
      (timetable?.legend[timetableType].options as LegendOption[])?.filter(
        (v: LegendOption) => v.value === timetableId?.slice(1)
      )[0]?.name

    setTimetableName(name)
    const n =
      timetableType === "oddział"
        ? 1
        : timetableType === "nauczyciel"
          ? 2
          : timetableType === "sala"
            ? 3
            : 1
    handleChange(name, n)
  }, [setTimetableName, timetable?.legend, timetableId, timetableType])

  useEffect(() => {
    if (!window.document) return
    const id = document
      .querySelector(`div[data-value='${timetableName}']`)
      ?.getAttribute("data-id")
  }, [timetableName])

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  const oddzialy = timetable.legend["oddział"]
  const nauczyciele = timetable.legend["nauczyciel"]
  const sale = timetable.legend["sala"]

  return (
    <div className="relative flex h-20 w-full items-center justify-center gap-8 bg-primary">
      <Select
        open={open}
        setOpen={setOpen}
        setValue={(v: string) => handleChange(v, 1)}
        value={value}
        data={oddzialy}
        name={"Wybierz oddział..."}
      />
      <Select
        open={open2}
        setOpen={setOpen2}
        setValue={(v: string) => handleChange(v, 2)}
        value={value2}
        data={nauczyciele}
        name={"Wybierz nauczyciela..."}
      />
      <Select
        open={open3}
        setOpen={setOpen3}
        setValue={(v: string) => handleChange(v, 3)}
        value={value3}
        data={sale}
        name={"Wybierz salę..."}
      />
    </div>
  )
}

export default Footer

interface ISelect {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  value: string
  setValue: any
  data: { id: string; options: LegendOption[] }
  name: string
}

function Select({ open, setOpen, value, setValue, data, name }: ISelect) {
  const router = useRouter()
  const { setTimetableId } = useContext(SelectContext)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-start gap-4 rounded-xl hover:border-[1px] hover:border-white hover:bg-primary hover:text-white"
        >
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          {value ? value : name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[250px] overflow-hidden rounded-xl p-0">
        <Command>
          <ScrollArea className="h-96 overflow-hidden rounded-xl pr-2">
            <CommandEmpty>Nic nie znaleziono.</CommandEmpty>
            <CommandGroup className="">
              {data.options.map((element) => (
                <CommandItem
                  className="cursor-pointer rounded-xl transition-colors aria-selected:bg-primary aria-selected:text-white"
                  key={data.id + element.value}
                  data-id={data.id + element.value}
                  onSelect={(currentValue: string) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)

                    router.push(`/plan?timetableId=${data.id + element.value}`)
                    setTimetableId(data.id + element.value)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === element.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {element.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </ScrollArea>
          <CommandInput placeholder={name} />
        </Command>
      </PopoverContent>
    </Popover>
  )
}

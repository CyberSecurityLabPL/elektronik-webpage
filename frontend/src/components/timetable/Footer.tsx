"use client"
import { ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { ScrollArea } from "../ui/scroll-area"
import { cn } from "@/lib/utils"
import Link from "next/link"

type TimetableItem = {
  id: string
  name: string
}

const Footer = ({ timetableItems }: { timetableItems: TimetableItem[] }) => {
  const [selectedId, setSelectedId] = useState("")
  const [open, setOpen] = useState(false)

  const timetableData = [
    {
      heading: "Oddziały",
      items: timetableItems.filter((item) => item.id.startsWith("o")),
    },
    {
      heading: "Nauczyciele",
      items: timetableItems.filter((item) => item.id.startsWith("n")),
    },
    {
      heading: "Sale",
      items: timetableItems.filter((item) => item.id.startsWith("s")),
    },
  ]

  return (
    <div className="relative flex h-20 w-full items-center justify-center gap-8 bg-primary">
      <Select
        open={open}
        setOpen={setOpen}
        setValue={setSelectedId}
        value={selectedId}
        data={timetableData}
        name={"Wyszukaj..."}
      />
    </div>
  )
}

function Select({
  open,
  setOpen,
  value,
  setValue,
  data,
  name,
}: {
  open: boolean
  setOpen: (value: boolean) => void
  value?: string
  setValue: (value: string) => void
  data: { heading: string; items: { id: string; name: string }[] }[]
  name: string
}) {
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[350px] justify-start gap-4 rounded-xl text-zinc-800 hover:border-[1px] hover:border-white hover:bg-primary hover:text-white"
        >
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          {value ? value : name}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[1000px] overflow-hidden rounded-xl p-0">
        <Command>
          <CommandInput placeholder={name} />
          <div className=" grid w-full grid-cols-3 p-4">
            {data.map((group) => (
              <CommandList key={group.heading} className=" overflow-y-auto">
                <CommandEmpty>Nic nie znaleziono.</CommandEmpty>
                <CommandGroup heading={group.heading} className="scroll-m-4">
                  {group.items.map((info) => (
                    <Link key={info.name} href={`?id=${info.id}`} passHref>
                      <CommandItem
                        value={info.name}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                        className={cn(
                          "cursor-pointer rounded-lg px-2 transition-colors",
                          {
                            "bg-primary text-white": value === info.name,
                          }
                        )}
                      >
                        {info.name}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
              </CommandList>
            ))}
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Footer

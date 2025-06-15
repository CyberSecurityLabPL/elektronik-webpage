"use client"
import { cn } from "@/lib/utils"
import { ChevronsUpDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
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
import { ChangeThemeButton } from "../ui/themeButton"
import { useRouter } from "next/navigation"

type TimetableItem = {
  id: string
  name: string
}

const Footer = ({ timetableItems }: { timetableItems: TimetableItem[] }) => {
  const [selectedId, setSelectedId] = useState("")
  const [open, setOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    router.push(`/plan?id=${selectedId}`)
  }, [selectedId])
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
    <div className="relative flex w-full  flex-col sm:flex-row items-center justify-center gap-4 bg-primary py-4 md:h-20">
      <Select
        open={open}
        setOpen={setOpen}
        setValue={setSelectedId}
        value={selectedId}
        data={timetableData}
        name={"Wyszukaj..."}
        allItems={timetableItems}
      />
      <div className="flex justify-center items-center  gap-2">

      
      <Button
        variant={"secondary"}
        asChild
        className="right-2 bg-white md:absolute"
      >
        <Link href={"/"}> Wroć do strony głównej</Link>
      </Button>
      <ChangeThemeButton /> 
      </div>
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
  allItems,
}: {
  open: boolean
  setOpen: (value: boolean) => void
  value?: string
  setValue: (value: string) => void
  data: { heading: string; items: { id: string; name: string }[] }[]
  name: string
  allItems: TimetableItem[]
}) {
  const [searchQuery, setSearchQuery] = useState("")
  
  const modifiedItems = data[0].items.map((item) => {
    let nameParts = item.name.split(" ")
    if (nameParts[1]) {
      nameParts[1] = nameParts[1].slice(1)
    }
    return {
      ...item,
      name: nameParts.join(" "),
    }
  })
  const newData = [
    { heading: "Oddziały", items: modifiedItems },
    ...data.slice(1),
  ]
  const removeNumbers = (str: string) => str.replace(/(\d+[A-Za-z]+)\d+/, "$1")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-72 justify-start gap-4 rounded-xl text-zinc-800 hc:text-foreground hover:border-[1px] hover:border-white hover:bg-primary hover:text-white md:w-[350px]"
        >
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          <span className="truncate">
            {value ? allItems.find(item => item.id === value)?.name || name : name}
          </span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[1000px] overflow-hidden rounded-xl p-0 bg-background hc:bg-background">
        <Command className="bg-background" shouldFilter={false}>
          <CommandInput 
            placeholder={name} 
            className="hc:text-foreground"
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <div className="grid w-full grid-cols-1 p-4 md:grid-cols-3">
            {newData.map((group) => (
              <CommandList
                key={group.heading}
                className="hidden overflow-y-auto md:block"
              >
                <CommandEmpty>Nic nie znaleziono.</CommandEmpty>
                <CommandGroup heading={group.heading} className="scroll-m-4">
                  {group.items
                    .filter((info) => 
                      !searchQuery || info.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((info) => (
                    <CommandItem
                      key={info.name}
                      value={info.name}
                      onSelect={() => {
                        setValue(info.id)
                        setOpen(false)
                      }}
                      className={cn(
                        "cursor-pointer rounded-lg px-2 transition-colors hc:hover:bg-accent",
                        {
                          "bg-primary text-white hc:bg-accent hc:text-accent-foreground": value === info.id,
                        }
                      )}
                    >
                      {info.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            ))}
            <CommandList className="block overflow-y-auto md:hidden">
              <CommandEmpty>Nic nie znaleziono.</CommandEmpty>
              {newData.map((group) => (
                <CommandGroup
                  heading={group.heading}
                  className="scroll-m-4"
                  key={group.heading}
                >
                  {group.items
                    .filter((info) => 
                      !searchQuery || info.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((info) => (
                    <CommandItem
                      key={info.name + "asd"}
                      value={info.name}
                      onSelect={() => {
                        setValue(info.id)
                        setOpen(false)
                      }}
                      className={cn(
                        "cursor-pointer rounded-lg px-2 transition-colors hc:hover:bg-accent",
                        {
                          "bg-primary text-white hc:bg-accent hc:text-accent-foreground": value === info.id,
                        }
                      )}
                    >
                      {info.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default Footer

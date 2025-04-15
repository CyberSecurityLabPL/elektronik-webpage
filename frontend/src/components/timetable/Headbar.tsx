import { getLuckyNumber } from "@/lib/api"
import { uppercaseLastCharacters } from "@/lib/utils"
import React from "react"

const Headbar = async ({ name: timetableName }: { name: string }) => {
  const LuckyNumber = await getLuckyNumber()
  return (
    <div className="flex flex-col h-24 min-h-16 w-full items-center justify-center bg-primary">
      <div className="flex gap-2 justify-center items-center lg:absolute right-4 mb-1">
        <h1 className="font-normal text-xl text-background">Sczęśliwy numerek:</h1>
        <span className="bg-background text-foreground w-10 h-10 flex justify-center items-center rounded-lg">{LuckyNumber.value}</span>
      </div>
      <h1 className="text-xl text-secondary hc:text-black md:text-3xl">
        {timetableName?.endsWith(" i")
          ? uppercaseLastCharacters(timetableName, 1)
          : timetableName?.endsWith(" ii")
            ? uppercaseLastCharacters(timetableName, 2)
            : timetableName}
      </h1>
      
    </div>
  )
}

export default Headbar

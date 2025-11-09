import { getLuckyNumber } from "@/lib/api"
import { uppercaseLastCharacters } from "@/lib/utils"
import React from "react"

const Headbar = async ({ name: timetableName }: { name: string }) => {
  const LuckyNumber = await getLuckyNumber()
  return (
    <div className="flex min-h-24 w-full flex-col items-center justify-center bg-primary">
      <div className="right-4 mb-1 flex items-center justify-center gap-2 lg:absolute">
        <h1 className="text-xl font-normal text-background">
          Sczęśliwy numerek:
        </h1>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-foreground">
          {LuckyNumber.value}
        </span>
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

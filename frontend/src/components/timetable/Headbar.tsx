import { uppercaseLastCharacters } from "@/lib/utils"
import React from "react"

const Headbar = ({ name: timetableName }: { name: string }) => {
  return (
    <div className="flex h-24 w-full items-center justify-center bg-primary">
      <h1 className="text-3xl text-secondary">
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

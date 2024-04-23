"use client"
import useTimetable from "@/state/timetable-state"
import { useContext, useEffect, useState } from "react"
import { SelectContext } from "../Providers"

const Headbar = () => {
  const { data: timetable, isPending, isError, error } = useTimetable()

  const { timetableName, timetableId } = useContext(SelectContext)

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  function uppercaseLastCharacters(inputString: string, numCharacters: number) {
    // Check if the input is valid
    if (
      typeof inputString !== "string" ||
      !Number.isInteger(numCharacters) ||
      numCharacters < 0
    ) {
      return "Invalid input"
    }

    // Get the length of the input string
    const inputLength = inputString.length

    // If numCharacters is greater than or equal to the length of the string, uppercase the entire string
    if (numCharacters >= inputLength) {
      return inputString.toUpperCase()
    }

    // Split the string into two parts: the part to be uppercased and the rest
    const uppercasedPart = inputString.slice(inputLength - numCharacters)
    const restOfString = inputString.slice(0, inputLength - numCharacters)

    // Uppercase the specified part and combine it with the rest of the string
    return restOfString + uppercasedPart.toUpperCase()
  }

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

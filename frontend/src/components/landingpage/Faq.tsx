import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Faq() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="z-50 h-fit w-4/5">
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
          <CardDescription>Zobacz najczęściej zadawane pytania</CardDescription>
        </CardHeader>
        <CardContent className=" flex gap-2">
          <div className="w-full ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Ile trwają przerwy?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Czy szkoła przyjmuje uczniów z potrzebami specjalnymi?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Czy jest w szkole psycholog ?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Jak oceniacie atmosferę w szkołach i przyjemność nauki?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Czy szkoła Elektronik jest tylko dla chłopaków?
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="relative hidden w-2/5 justify-center lg:flex">
            <Image
              src={"/images/faq.svg"}
              alt="faq image"
              width={300}
              height={300}
              className="absolute"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-center font-semibold  ">
            Jeśli masz do nas inne pytania napisz do nas!
          </h1>
          <Button variant={"outline"} asChild>
            <Link href={"/kontakt"}>Napisz wiadomość!</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

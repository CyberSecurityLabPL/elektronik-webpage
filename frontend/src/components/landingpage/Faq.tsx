"use client"
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
import { motion } from "framer-motion"
import { InView } from "../motion/InView"

export default function Faq({ data }: { data: any }) {
  return (
    <div
      id={data.sectionId}
      className="flex w-full items-center justify-center py-8"
    >
      <Card className="z-50 h-fit w-4/5">
        <CardHeader>
          <CardTitle>FAQ</CardTitle>
          <CardDescription>Zobacz najczęściej zadawane pytania</CardDescription>
        </CardHeader>
        <CardContent className=" flex gap-2">
          <div className="w-full ">
            <Accordion type="single" collapsible>
              <InView
                viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
                variants={{
                  hidden: {
                    opacity: 0,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.5,
                    },
                  },
                }}
              >
                {data.questions.map((question: any, index: number) => (
                  <motion.div
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 0.8,
                        filter: "blur(10px)",
                        x: -150,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                        x: 0,
                      },
                    }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    className="mb-4"
                  >
                    <AccordionItem value={`value-${index}`}>
                      <AccordionTrigger>{question.question}?</AccordionTrigger>
                      <AccordionContent>{question.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </InView>
            </Accordion>
          </div>
          <div className="relative hidden w-2/5 justify-center lg:flex">
            <Image
              src={"/images/faq.svg"}
              alt="faq image"
              width={300}
              height={300}
              className="absolute h-auto w-auto"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-2 pt-4">
          <h1 className="text-center font-semibold  ">
            Jeśli masz do nas inne pytania, napisz do nas!
          </h1>
          <div className="growAnim">
            <Button variant={data.linkButton.type} asChild>
              <Link href={data.linkButton.link}>{data.linkButton.title}</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

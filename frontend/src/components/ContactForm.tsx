"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldErrors, Resolver, useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  title: z.string().trim().min(1, {
    message: "Wpisz tytul wiadomosci",
  }),
  content: z
    .string()
    .trim()
    .min(10, {
      message: "Za krotka wiadomosc. Wpisz co najmniej 10 znakow",
    })
    .max(160, {
      message: "Za dluga wiadomosc. Wpisz maksymalnie 160 znakow",
    }),
})

type ContactFormValues = z.infer<typeof formSchema>

const contactFormResolver: Resolver<ContactFormValues> = async (values) => {
  const result = formSchema.safeParse(values)

  if (result.success) {
    return {
      values: result.data,
      errors: {},
    }
  }

  const errors: FieldErrors<ContactFormValues> = {}

  for (const issue of result.error.issues) {
    const fieldName = issue.path[0]

    if (
      typeof fieldName === "string" &&
      fieldName in formSchema.shape &&
      !errors[fieldName as keyof ContactFormValues]
    ) {
      errors[fieldName as keyof ContactFormValues] = {
        type: issue.code,
        message: issue.message,
      }
    }
  }

  return {
    values: {},
    errors,
  }
}

export function ContactForm({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<ContactFormValues>({
    resolver: contactFormResolver,
    defaultValues: {
      title: "",
      content: "",
    },
  })

  async function onSubmit(values: ContactFormValues) {
    const params = new URLSearchParams({
      subject: values.title,
      body: values.content,
    })

    router.push(`mailto:sekretariat@zseis.zgora.pl?${params.toString()}`)
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn(className)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tytul:</FormLabel>
              <FormControl>
                <Input placeholder="Wpisz tytul wiadomosci" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tresc:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Napisz do nas..."
                  className="h-64 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="w-full">
          Wyslij
          {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  )
}

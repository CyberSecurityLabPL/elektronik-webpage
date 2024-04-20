"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { Textarea } from "./ui/textarea"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

const formSchema = z.object({
  email: z.string().email(),
  title: z.string(),
  content: z
    .string()
    .min(10, {
      message: "Treść musi być większa niż 10 znaków",
    })
    .max(160, {
      message: "Treść musi być mniejsza niż 160 znaków",
    }),
})

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      title: "",
      content: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    async function fetchData() {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setLoading(false)
      toast.success("Wiadomość została wysłana!")
    }

    fetchData()
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email:</FormLabel>
              <FormControl>
                <Input placeholder="elektroniarz@zseis.pl" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title:</FormLabel>
              <FormControl>
                <Input placeholder="Opisz swój problem" {...field} />
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
              <FormLabel>Treść</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Elektronik to taka cudowna szkoła"
                  className="resize-none h-64"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {loading ? (
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit">Wyślij</Button>
        )}
      </form>
    </Form>
  )
}

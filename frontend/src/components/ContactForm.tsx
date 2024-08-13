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
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "./ui/textarea"
import { cn } from "@/lib/utils"

const formSchema = z.object({
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

export function ContactForm({ className }: { className?: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `mailto:sekretariat@zseis.zgora.pl?subject=${values.title}&body=${values.content}`
    )
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
              <FormLabel>Tytuł:</FormLabel>
              <FormControl>
                <Input placeholder="Wpisz tytuł wiadomości" {...field} />
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
              <FormLabel>Treść: </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Napisz do nas..."
                  className="h-64 resize-none "
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={loading} className="w-full">
          Wyślij
          {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  )
}

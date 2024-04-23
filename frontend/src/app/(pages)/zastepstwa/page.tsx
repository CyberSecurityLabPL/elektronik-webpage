import Header from "@/components/Header"
import { renderMarkdown, formatDateWeek } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { getSubstitutions } from "@/lib/api"
import markdownOptions from "@/components/markdown/MarkdownOptions"

export default async function SubstitutionPage() {
  const data = await getSubstitutions()

  return (
    <main className="flex w-full flex-col items-center gap-4">
      <Header title="Zastępstwa" subtitle={formatDateWeek(data?.date)} />
      <div className="h-fit min-h-96 w-3/4 rounded-lg border bg-background p-3 shadow-sm">
        <div className="px-2  text-xs sm:text-base">
          {renderMarkdown(data?.content ?? "Couldn't load content!", markdownOptions)}
        </div>
      </div>
    </main>
  )
}

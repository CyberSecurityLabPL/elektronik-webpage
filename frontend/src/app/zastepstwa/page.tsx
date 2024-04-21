import Header from "@/components/Header"
import { renderMarkdown, formatDateWeek } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import H1, { H2, H3 } from "@/components/markdown/Headers"
import { getSubstitutions } from "@/lib/api"

export default async function SubstitutionPage() {
  const data = await getSubstitutions()

  return (
    <main className="flex w-full flex-col items-center gap-4">
      <Header title="Zastępstwa" subtitle={formatDateWeek(data?.date)} />
      <div className="h-fit min-h-96 w-3/4 rounded-lg border bg-background p-4 shadow-sm">
        <div className="px-2 py-2 text-xs sm:text-base">
          {renderMarkdown(data?.content ?? "Couldn't load content!", {
            components: {
              h1: H1,
              h2: H2,
              h3: H3,
              hr: () => <Separator className="my-2" />,
              ul: (props) => (
                <ul className="list-disc py-2 pl-4">{props.children}</ul>
              ),
              ol: (props) => (
                <ol className="list-decimal py-2 pl-4">{props.children}</ol>
              ),
            },
          })}
        </div>
      </div>
    </main>
  )
}

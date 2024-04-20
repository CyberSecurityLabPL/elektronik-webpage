import Header from "@/components/Header"
import { renderMarkdown, formatDateWeek } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import H1, { H2, H3 } from "@/components/markdown/Headers"
import { getSubstitutions } from "@/lib/api"

export default async function SubstitutionPage() {
  const data = await getSubstitutions()

  return (
    <main className="flex items-center flex-col w-full gap-4">
      <Header title="Zastępstwa" subtitle={formatDateWeek(data?.date)} />
      <div className="min-h-96 h-fit w-3/4 p-2 bg-background border rounded-lg shadow-sm">
        <div className="py-2 px-8 text-xs sm:text-base">
          {renderMarkdown(data?.content ?? "Couldn't load content!", {
            components: {
              h1: H1,
              h2: H2,
              h3: H3,
              hr: () => <Separator className="my-2" />,
              ul: (props) => (
                <ul className="list-disc pl-4 py-2">{props.children}</ul>
              ),
              ol: (props) => (
                <ol className="list-decimal pl-4 py-2">{props.children}</ol>
              ),
            },
          })}
        </div>
      </div>
    </main>
  )
}

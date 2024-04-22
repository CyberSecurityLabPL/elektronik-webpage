import Header from "@/components/Header"
import { renderMarkdown } from "@/lib/utils"
import H1, { H2, H3 } from "@/components/markdown/Headers"
import { Separator } from "@/components/ui/separator"
import { getPage } from "@/lib/api"

export default async function Page({ params }: { params: { page: string } }) {
  const data = await getPage(params.page)

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={data?.heading ?? "Error 404"}
        subtitle={data?.description ?? `Page /${params.page} not found!`}
      />
      <div
        className={`w-11/12 rounded-sm bg-background p-2 text-xs shadow-sm sm:text-base ${data?.content ? "" : "hidden"}`}
      >
        {data?.content
          ? renderMarkdown(data.content, {
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
            })
          : null}
      </div>
    </main>
  )
}

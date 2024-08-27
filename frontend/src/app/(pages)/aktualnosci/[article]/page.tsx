import markdownOptions from "@/components/markdown/MarkdownOptions"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { REVALIDATE } from "@/config"
import { getArticle } from "@/lib/api"
import {
  calcTimeDifference,
  formatDate,
  getAuthor,
  getImage,
  renderMarkdown,
} from "@/lib/utils"
import { CalendarPlus, User, PencilLine, LucideIcon } from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { openGraphImage } from "@/lib/shared-metadata"
export const revalidate = REVALIDATE

type Props = {
  params: { article: string }
}

const notFoundMetadata: Metadata = {
  title: "Nie znaleziono artykułu",
  description: "Nie znaleziono artykułu.",
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await getArticle(params.article, {})

  if (!res) return notFoundMetadata

  const defaultMetadata: Metadata = {
    title: res?.data?.title,
    description: res?.data?.content.slice(0, 300),
    keywords: ["artykuł", "news", "ckziu", "post", "elektronik"],
    openGraph: {
      ...openGraphImage,
      images: [
        {
          url: `${process.env.NEXT_DOMAIN}/default/thumbnail.svg`,
          width: 640,
          height: 360,
        },
      ],
    },
  }

  if (res?.data?.seo)
    return {
      title: res.data.seo.metaTitle,
      description: res.data.seo.metaDescription,
      keywords: res.data.seo.keywords,
      openGraph: {
        ...openGraphImage,
        images: [
          {
            url: getImage(
              res?.data?.seo?.metaImage?.formats?.thumbnail?.url,
              `${process.env.NEXT_DOMAIN}/default/thumbnail.svg`
            ),
            width: 640,
            height: 360,
          },
        ],
      },
    }

  return defaultMetadata
}

export default async function Page({
  params,
}: {
  params: { article: string }
}) {
  const res = await getArticle(params.article, {})

  const article = res?.data ? res.data : null

  const author = article ? getAuthor(article) : "Nieznany autor"

  if (!article) return <FailedToLoad />

  const image = article?.image
  const hasImage = image && Object.keys(image).length !== 0

  return (
    <PageEnterAnimation>
      <article className="relative mx-auto mt-8 flex w-full max-w-screen-2xl flex-col items-center overflow-hidden 2xl:rounded-3xl">
        {hasImage ? (
          <div className="relative aspect-[5/2] w-full sm:aspect-[3/1] ">
            <Image
              className="!m-0 object-cover"
              fill
              alt={"xd"}
              src={getImage(image.url)}
              quality={100}
            />
          </div>
        ) : (
          <div className="my-8"></div>
        )}
        <div className="relative flex w-full flex-col items-center gap-4 rounded bg-background px-6 py-8 md:px-12">
          {/* ARTICLE INFO */}

          <h1 className="flex w-full justify-start  text-left text-xl font-semibold !no-underline sm:text-3xl">
            {article?.title}
          </h1>
          <div className="flex w-full flex-col items-start gap-2">
            {article?.customDate ? (
              <InfoLabel
                Icon={CalendarPlus}
                content={formatDate(article?.customDate)}
              />
            ) : (
              <>
                <InfoLabel
                  Icon={CalendarPlus}
                  content={formatDate(article?.publishedAt)}
                />
                {article?.updatedAt &&
                  calcTimeDifference(article?.publishedAt, article?.updatedAt) >
                    10 && (
                    <InfoLabel
                      Icon={PencilLine}
                      content={formatDate(article?.updatedAt)}
                    />
                  )}
              </>
            )}
            <InfoLabel Icon={User} content={author} />
          </div>

          <Separator />

          {/* ARTICLE CONTENT */}
        </div>
        <div className="relative w-full bg-background p-6 pt-0 md:p-12 md:pt-0">
          <div className="prose prose-sm prose-blue self-start overflow-x-auto text-xs sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-p:!text-pretty sm:text-base">
            {article?.content ? (
              renderMarkdown(article.content, markdownOptions)
            ) : (
              <FailedToLoad />
            )}
          </div>
        </div>
      </article>
    </PageEnterAnimation>
  )
}

function InfoLabel({ Icon, content }: { Icon: LucideIcon; content: string }) {
  return (
    <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
      <Icon className="size-3 text-primary sm:size-4" />
      <div>{content}</div>
    </div>
  )
}
function FailedToLoad() {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <h1 className="text-center text-4xl">Nie znaleziono artykułu</h1>
      <Button asChild>
        <Link href={"/aktualnosci"}>Wróć do aktualności</Link>
      </Button>
      <div className="relative mt-8 aspect-video w-full max-w-5xl">
        <Image src={"/assets/not-found.svg"} alt="Not found" fill />
      </div>
    </div>
  )
}

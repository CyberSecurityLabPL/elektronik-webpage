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
import { notFound } from "next/navigation"
import { openGraphImage } from "@/lib/shared-metadata"
// import thumbnail from "/default/thumbnail.svg"

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
  const seo = res?.data?.seo

  if (!seo) return notFoundMetadata

  const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
    title: res.data?.title,
    description: res.data?.content?.slice(0, 300) ?? "dsa",
    keywords: ["artykuł", "news", "ckziu", "post", "elektronik"],
    openGraph: {
      ...openGraphImage,
      images: [
        {
          url: `/default/thumbnail.svg`,
          width: 640,
          height: 360,
        },
      ],
    },
  }

  if (seo)
    return {
      title: seo.metaTitle,
      description: seo.metaDescription,
      keywords: seo.keywords,
      openGraph: {
        ...openGraphImage,
        images: [
          {
            url:
              seo.metaImage?.formats?.thumbnail?.url ??
              `${process.env.NEXT_PUBLIC_BASE_URL!}/default/thumbnail.svg`,
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
  const image = article?.image

  if (!article) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: article?.title,
    image: getImage(article?.image?.url),
    description: article?.description,
  }
  const author = getAuthor(article)
  const hasImage = image && Object.keys(image).length !== 0

  return (
    <PageEnterAnimation>
      <article className="relative mx-auto mt-8 flex w-full max-w-screen-2xl flex-col items-center overflow-hidden 2xl:rounded-3xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {hasImage ? (
          <div className="relative aspect-[5/2] w-full sm:aspect-[3/1] ">
            <Image
              className="!m-0 object-cover"
              fill
              alt={"xd"}
              src={getImage(article?.image?.url)}
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
          <div className="prose prose-sm prose-blue self-start overflow-x-auto text-xs sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl hc:text-foreground prose-p:!text-pretty hc:prose-a:text-primary hc:prose-strong:text-foreground sm:text-base">
            {article?.content
              ? renderMarkdown(article.content, markdownOptions)
              : "Pusty artykuł"}
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

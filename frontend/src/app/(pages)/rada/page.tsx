import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import ParentCard from "@/components/cards/ParentCard"
import { Button, buttonVariants } from "@/components/ui/button"
import { getParents } from "@/lib/api"
import { cn } from "@/lib/utils"
import { Metadata } from "next"
import Link from "next/link"

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getParents()

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
  }
}

export default async function Page() {
  const data = await getParents()

  return (
    <main className="flex w-full flex-col items-center">
      <Header title={data?.heading} subtitle={data?.description}></Header>
      <PageEnterAnimation className="flex flex-col items-center">
        <div className="px-4 text-center">
          Numer konta rady rodziców:&nbsp;
          <span className="font-bold">{data?.bankAccountNumber}</span>
        </div>
        <Link
          className={cn(buttonVariants({ variant: "outline" }), "my-4")}
          href={"/dokumenty"}
        >
          Zobacz regulamin
        </Link>
        <div className=" flex flex-wrap justify-center gap-4">
          {data?.parents.map((item: any) => (
            <ParentCard
              key={item.fullname}
              name={item.fullname}
              src={item.image.url ?? "/default/avatarFemale.svg"}
              position={item.position}
              description={item.description}
            />
          ))}
        </div>
      </PageEnterAnimation>
    </main>
  )
}

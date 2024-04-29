import Header from "@/components/Header"
import ParentCard from "@/components/cards/ParentCard"
import { Button } from "@/components/ui/button"
import { getParents } from "@/lib/api"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
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
      <Header title={data?.heading} subtitle={data?.description}>
        <div className="px-4 text-center">
          Numer konta rady rodziców:&nbsp;
          <span className="font-bold">{data?.bankAccountNumber}</span>
        </div>
        <Button variant={"outline"} className="my-4">
          Zobacz regulamin
        </Button>
      </Header>
      <div className=" flex flex-wrap justify-center gap-4">
        {data?.parents.map((item: any) => (
          <ParentCard
            key={item.fullname}
            name={item.fullname}
            src={item.image?.url ?? "/default/person.jpg"}
            position={item.position}
            description={item.description}
          />
        ))}
      </div>
    </main>
  )
}

import Header from "@/components/Header"
import ParentCard from "@/components/cards/ParentCard"
import { Button } from "@/components/ui/button"
import { getParents } from "@/lib/api"

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

import StudentCard from "@/components/cards/StudentCard"
import Header from "@/components/Header"
import PageEnterAnimation from "@/components/PageEnterAnimation"
import { getGraduates } from "@/lib/api"
import { getImage } from "@/lib/utils"

export const dynamic = "force-dynamic"

async function page() {
  const data = await getGraduates()

  return (
    <main className="flex w-full flex-col items-center">
      <Header
        title={"Nasi Najlepsi"}
        subtitle={"Poznaj najwybitniejszych absolwentów naszej szkoły"}
      />
      <PageEnterAnimation className="flex  w-full max-w-3xl flex-col flex-wrap items-center  justify-center gap-4 pt-8">
        {data.graduates.map((item: any) => (
          <StudentCard
            key={item.id}
            name={item.fullname}
            yearClass={item.graduateYear}
            src={getImage(item.image[0].url) ?? "/default/avatarFemale.svg"}
            achivments={item.achievements}
            hobby={item.hobby}
          />
        ))}
      </PageEnterAnimation>
    </main>
  )
}

export default page

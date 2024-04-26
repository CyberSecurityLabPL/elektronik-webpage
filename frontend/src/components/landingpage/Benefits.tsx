import { Calendar, Navigation, Paintbrush, Smile } from "lucide-react"
import IconComponent from "../Icon"
import { Separator } from "../ui/separator"

export default function Benefits({ data }: { data: any }) {
  const cardIcons = [Navigation, Paintbrush, Smile, Calendar]
  return (
    <div
      id={data.sectionId}
      className="flex h-fit flex-col items-center justify-center"
    >
      <h1 className="px-2 py-8 text-center text-4xl font-semibold text-slate-800">
        Dlaczego warto wybrać Elektrona?
      </h1>
      <Separator className="w-3/4 " />
      <div className="flex h-full flex-col items-start justify-center gap-4 p-8 py-12 lg:flex-row">
        {data.benefitCard.map((card: any, index: number) => (
          <div
            key={card.title}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex flex-col items-center justify-center  px-8 text-center lg:px-2">
              <IconComponent
                icon={cardIcons[index]}
                color="blue"
                IsCircle={true}
              />
              <h1 className="flex h-24 items-center justify-center text-xl font-semibold sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                {card.title}
              </h1>
              <p className=" md:px-6 lg:px-0">{card.content}</p>
            </div>
            <Separator className="block w-3/4 lg:hidden" />
          </div>
        ))}
      </div>
      <Separator className="hidden w-3/4 lg:block " />
    </div>
  )
}

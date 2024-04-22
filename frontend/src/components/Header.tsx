import { ReactNode } from "react"

export default function Header({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children?: ReactNode
}) {
  return (
    <header className="my-6 flex w-full flex-col items-center justify-center sm:my-8">
      <h1 className="w-full text-pretty bg-clip-text py-2 text-center text-3xl font-extrabold text-primary sm:text-4xl lg:w-auto lg:text-6xl">
        {title}
      </h1>
      {subtitle ? (
        <div className="flex items-center justify-center px-2">
          <div className="text-md flex max-w-[54rem] items-center justify-center text-pretty text-center leading-relaxed text-primary-foreground sm:text-lg lg:text-xl">
            {subtitle}
          </div>
        </div>
      ) : null}
      {children}
    </header>
  )
}

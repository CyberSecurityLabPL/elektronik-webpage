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
    <header className="flex w-full flex-col items-center justify-center">
      <div className="inline-block w-screen text-wrap bg-gradient-to-r from-primary to-primary-foreground bg-clip-text py-2 text-center text-3xl font-extrabold text-transparent lg:w-auto lg:text-6xl">
        {title}
      </div>
      {subtitle ? (
        <div className="m-4 flex w-4/5 items-center justify-center">
          <div className="flex max-w-[54rem] items-center justify-center text-center text-xs leading-relaxed text-primary-foreground lg:text-xl">
            {subtitle}
          </div>
        </div>
      ) : null}
      {children}
    </header>
  )
}

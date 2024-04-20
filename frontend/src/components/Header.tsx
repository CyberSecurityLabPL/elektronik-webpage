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
    <header className="flex justify-center items-center flex-col w-full">
      <div className="text-3xl lg:text-6xl text-center font-extrabold py-2 bg-gradient-to-r from-primary to-primary-foreground inline-block text-transparent bg-clip-text text-wrap lg:w-auto w-screen">
        {title}
      </div>
      {subtitle ? (
        <div className="flex justify-center items-center m-4 w-4/5">
          <div className="flex justify-center text-center items-center lg:text-xl text-xs max-w-[54rem] text-primary-foreground leading-relaxed">
            {subtitle}
          </div>
        </div>
      ) : null}
      {children}
    </header>
  )
}

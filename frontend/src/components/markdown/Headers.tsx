import Link from "next/link"
import { PropsWithChildren } from "react"

const fontSizes = {
  h1: "text-2xl sm:text-4xl",
  h2: "text-xl sm:text-3xl",
  h3: "text-lg sm:text-2xl",
  shared: "pt-4 pb-2 font-semibold",
}

export default function H1({ children }: PropsWithChildren<{}>) {
  const formattedLink = children?.toString().replaceAll(" ", "-")
  return (
    <Link href={`#${formattedLink}`} className="" passHref>
      <h2
        //@ts-expect-error no such attribute as icon but we can still use it as custom attr
        icon="🔗"
        id={formattedLink}
        className={`before:content-[attr(icon)] before:invisible hover:before:visible hover:underline relative before:absolute before:-left-10 before:text-muted-foreground ${fontSizes.h1} ${fontSizes.shared}`}
      >
        {children}
      </h2>
    </Link>
  )
}

export function H2({ children }: PropsWithChildren<{}>) {
  const formattedLink = children?.toString().replaceAll(" ", "-")
  return (
    <Link href={`#${formattedLink}`} className="" passHref>
      <h2
        //@ts-expect-error no such attribute as icon but we can still use it as custom attr
        icon="🔗"
        id={formattedLink}
        className={`before:content-[attr(icon)] before:invisible hover:before:visible hover:underline relative before:absolute before:-left-10 before:text-muted-foreground ${fontSizes.h2} ${fontSizes.shared}`}
      >
        {children}
      </h2>
    </Link>
  )
}

export function H3({ children }: PropsWithChildren<{}>) {
  const formattedLink = children?.toString().replaceAll(" ", "-")
  return (
    <Link href={`#${formattedLink}`} className="" passHref>
      <h2
        //@ts-expect-error no such attribute as icon but we can still use it as custom attr
        icon="🔗"
        id={formattedLink}
        className={`before:content-[attr(icon)] before:invisible hover:before:visible hover:underline relative before:absolute before:-left-10 before:text-muted-foreground ${fontSizes.h3} ${fontSizes.shared}`}
      >
        {children}
      </h2>
    </Link>
  )
}

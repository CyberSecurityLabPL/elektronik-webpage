import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Accessibility, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState, forwardRef, Dispatch, SetStateAction } from "react"
import { getRandomInt } from "@/lib/utils"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"

export function Navigation({
  navItems,
  setIsExpanded,
}: {
  navItems: any
  setIsExpanded: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="">
        {navItems
          ? navItems.slice(0, 4).map((item: any, index: number) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger className="rounded-xl bg-transparent text-lg hover:bg-transparent group-[[data-smaller=true]]:text-base">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="overflow-hidden ">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                    {index < 1 ? (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className={`flex h-full w-full select-none flex-col justify-end rounded-md  bg-cover p-6 text-background  no-underline outline-none focus:shadow-md`}
                            style={{
                              backgroundImage: `url(${getGalleryImage()})`,
                            }}
                            href="/galeria"
                          >
                            <Accessibility className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Galeria
                            </div>
                            <p className="text-sm leading-tight text-background">
                              Zobacz naszą galerie szkolną gdzie znajdziesz
                              przeróżne zdjęcia naszej szkoły! :)
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ) : null}
                    {item.links.map((tab: any) => (
                      <ListItem
                        key={tab.name}
                        title={tab.name}
                        href={tab.isExternal ? tab.href : `/${tab.href}` ?? ""}
                        target={tab.isExternal ? "_blank" : "_self"}
                      >
                        {tab?.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))
          : null}
        {navItems.length > 5 ? (
          <>
            <NavigationMenuItem>
              <Link href="/kontakt" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "rounded-xl text-lg group-[[data-smaller=true]]:bg-transparent group-[[data-smaller=true]]:text-base"
                  )}
                >
                  Kontakt
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant={"ghost"}
                onClick={() => setIsExpanded((prev) => !prev)}
                className="text-lg"
              >
                Więcej
              </Button>
            </NavigationMenuItem>
          </>
        ) : null}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  const isExternal = href!.startsWith("http")
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "flex h-full select-none items-center justify-between gap-1 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ",
            className
          )}
          href={href!}
          {...props}
        >
          <div>
            <div className="pb-2 text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
          <div className="">
            {isExternal && (
              <ExternalLink className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

function getGalleryImage(): string {
  //easter egg
  const now = new Date()

  const images = ["/cards/university.png", "/cards/friends.png"]

  // if (
  //   (now.getMonth() == 3 && now.getDate() == 1) ||
  //   (now.getHours() == 21 && now.getMinutes() == 37) ||
  //   (now.getHours() == 4 && now.getMinutes() == 20)
  // )
  //   return "/cards/misha.png"
  return images[getRandomInt(0, images.length)]
}

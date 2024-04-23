"use client"
import * as React from "react"
import Link from "next/link"
import { cn, getRandomImg } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Accessibility, BugIcon, ChevronDown } from "lucide-react"

export function Navigation({ navItems }: { navItems: any }) {
  const img = getRandomImg()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems
          ? navItems.map((item: any, index: number) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {index < 1 ? (
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className={`flex h-full w-full select-none flex-col justify-end rounded-md bg-cover p-6 text-background no-underline outline-none focus:shadow-md`}
                            style={{backgroundImage: `url(${img})`}}
                            href="/galeria"
                          >
                            <Accessibility className="h-6 w-6" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Galeria
                            </div>
                            <p className="text-sm leading-tight text-background">
                              Beautifully designed woman that you can copy and
                              paste into your apps. Accessible. Customizable.
                              Open Source.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ) : null}
                    {item.links.map((tab: any) => (
                      <ListItem key={tab.name} title={tab.name} href={tab.isExternal ? tab.href : `/${tab.href}` ?? ""}>
                        {tab.description ?? "Brak opisu!"}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))
          : null}
        <NavigationMenuItem>
          <Link href="/kontakt" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kontakt
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

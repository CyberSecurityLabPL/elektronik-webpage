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
import { ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { forwardRef, useEffect, useState, useRef } from "react"
import { Button } from "./ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Badge } from "./ui/badge"

export function Navigation({ navItems }: { navItems: any }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handlePopoverOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  const handleMouseEnter = () => {
    setIsOpen(false)
  }

  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        {navItems
          ? navItems.slice(0, 5).map((item: any, index: number) => (
              <NavigationMenuItem key={item.name}>
                <NavigationMenuTrigger
                  onMouseEnter={handleMouseEnter}
                  className="rounded-xl bg-transparent text-lg hover:bg-transparent group-[[data-smaller=true]]:text-base hc:text-white hc:hover:bg-white/10 hc:hover:text-white"
                >
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="overflow-hidden  ">
                  <ul className="relative !z-[99999] grid max-h-[452px] w-[400px] gap-3 overflow-y-auto bg-background p-4 md:w-[500px] md:grid-cols-2 lg:w-[800px]">
                    {index < 1 ? (
                      <li className="col-span-2 rounded-lg transition-colors hover:bg-background-muted focus:bg-background-muted">
                        <NavigationMenuLink asChild>
                          <a
                            className={`relative flex h-full select-none flex-col justify-start rounded-md object-cover text-background no-underline outline-none`}
                            href="/aktualnosci"
                          >
                            <div className="z-50 bg-transparent p-2 text-3xl font-medium text-foreground">
                              Aktualności
                              <Badge className="absolute right-2 top-2 rounded-full bg-primary px-2 text-xs font-semibold text-white hc:text-black">
                                Popularne
                              </Badge>
                            </div>
                            <p className="z-50 bg-transparent p-2 pt-0 text-sm leading-tight text-muted-foreground">
                              Tutaj znajdują się wszystkie aktualności i
                              ogłoszenia
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ) : null}
                    {item.links
                      .sort((a: any, b: any) => b.isFeatured - a.isFeatured)
                      .map((tab: any) => (
                        <ListItem
                          key={tab.name}
                          title={tab.name}
                          href={tab.isExternal ? tab.href : `/${tab.href}`}
                          target={tab.isExternal ? "_blank" : "_self"}
                          isFeatured={tab.isFeatured}
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
              <Popover open={isOpen} onOpenChange={handlePopoverOpenChange}>
                <PopoverTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="text-lg hover:bg-accent/50 group-[[data-smaller=true]]:text-base hc:text-white hc:hover:bg-white/10 hc:hover:text-white"
                    onClick={() => handlePopoverOpenChange(!isOpen)}
                  >
                    Więcej
                  </Button>
                </PopoverTrigger>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="z-10"
                >
                  <PopoverContent
                    className="absolute -right-32 z-10 flex w-[52rem] rounded-3xl bg-background py-6 data-[state=open]:block data-[state=closed]:hidden"
                    data-state={isOpen ? "open" : "closed"}
                  >
                    <ul className="mx-auto flex h-full w-full flex-wrap gap-8">
                      {navItems.slice(5)?.map((item: any) => (
                        <li key={item.name}>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant={"ghost"}
                                className={cn(
                                  "text-lg font-medium text-foreground"
                                )}
                              >
                                {item.name}
                                <ChevronDown className="ml-2" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="space-y-4 rounded-3xl bg-background">
                              {item.links?.map((tab: any) => (
                                <Link
                                  key={tab.name}
                                  className="flex items-center justify-between gap-4 rounded-xl p-2 text-lg font-medium text-foreground hover:bg-background-muted hover:text-accent-foreground"
                                  href={
                                    tab.isExternal ? tab.href : `/${tab.href}`
                                  }
                                  target={tab.isExternal ? "_blank" : "_self"}
                                >
                                  {tab.name}
                                  {tab.isExternal && (
                                    <ExternalLink className="min-h-6 min-w-6 text-muted-foreground" />
                                  )}
                                </Link>
                              ))}
                            </PopoverContent>
                          </Popover>
                        </li>
                      ))}
                    </ul>
                  </PopoverContent>
                </motion.div>
              </Popover>
            </NavigationMenuItem>
          </>
        ) : null}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { isFeatured?: boolean }
>(({ className, title, children, href, isFeatured, ...props }, ref) => {
  const isExternal = href!.startsWith("http")
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "flex h-full select-none items-center justify-between gap-1 space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-background-muted hover:text-accent-foreground focus:bg-background-muted focus:text-accent-foreground",
            className
          )}
          href={href!}
          {...props}
        >
          <div>
            <div className="flex w-full items-center gap-3 pb-2 text-sm font-medium leading-none text-foreground">
              {title}
              {isFeatured ? (
                <div className="rounded-3xl border border-primary/90 bg-primary/80 p-1 px-2 text-[12px] text-white">
                  Nowe
                </div>
              ) : (
                ""
              )}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
          <div>
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

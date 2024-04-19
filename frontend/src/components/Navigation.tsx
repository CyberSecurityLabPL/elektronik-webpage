"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
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


interface NavItemProps {
    title: string; 
    content: {
        title:string; 
        href:string; 
        description: string;
    }[]
} 
const navItems:NavItemProps[] = [
    {
        title: "Edukacja",
        content: [
            {
                title: "Praktyki",
                href: "/praktyki",
                description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Warsztaty",
                href: "https://zseis.zgora.pl/warsztaty/",
                description:
                "For sighted users to preview content available behind a link.",
            },
            {
                title: "Programy nauczania",
                href: "https://elektronik.zgora.pl/",
                description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            }
        ]
    },
    {
        title: "Uczeń",
        content:[
            {
                title: "Ocenianie zachowania",
                href: "/",
                description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Zastępstwa",
                href: "/zastepstwa",
                description:
                "For sighted users to preview content available behind a link.",
            },
            {
                title: "Dokumenty do pobrania",
                href: "/dokumenty",
                description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            },
            {
                title: "Oferty pracy",
                href: "/praca",
                description:
                "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
            }
        ]
    },
    {
        title: "Rodzic",
        content:[
            {
                title: "Podręczniki",
                href: "/podreczniki",
                description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Rada rodziców",
                href: "/rada",
                description:
                "For sighted users to preview content available behind a link.",
            }
        ]
    },
    {
        title: "Maturzysta",
        content:[
            {
                title: "Egzamin Maturalny",
                href: "https://www.oke.poznan.pl/index.php?menu_st_id=5&el_id=718&submit_element=1",
                description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Egzamin zawodowy",
                href: "/",
                description:
                "For sighted users to preview content available behind a link.",
            },
            {
                title: "OKE w Poznaniu",
                href: "/",
                description:
                "For sighted users to preview content available behind a link.",
            },
            {
                title: "Komunikaty Dyrektora CKE",
                href: "/",
                description:
                "For sighted users to preview content available behind a link.",
            }
        ]
    }
    ,
    {
        title: "Nabór",
        content:[
            {
                title: "Regulamin",
                href: "/",
                description:
                "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                title: "Kierunki",
                href: "/nabor",
                description:
                "For sighted users to preview content available behind a link.",
            },
        ]
    }
]

export function Navigation() {
return (
    <NavigationMenu>
    <NavigationMenuList>
        <NavigationMenuItem>
            <NavigationMenuTrigger>O szkole</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-nav bg-cover text-background p-6 no-underline outline-none focus:shadow-md"
                        href="https://www.instagram.com/zofiki/"
                    >
                        <Accessibility className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                        Galeria
                        </div>
                        <p className="text-sm leading-tight text-background">
                        Beautifully designed woman that you can copy and
                        paste into your apps. Accessible. Customizable. Open
                        Source.
                        </p>
                    </a>
                    </NavigationMenuLink>
                </li>
                <ListItem href="/osiagniecia" title="Osiągniecia">
                    Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/kadra" title="Kadra">
                    How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/aktualnosci" title="Aktualności">
                    Styles for headings, paragraphs, lists...etc
                </ListItem>
                </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
        {navItems.map((item) => (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {item.content.map((tab)=> (
                        <ListItem
                            key={tab.title}
                            title={tab.title}
                            href={tab.href}
                        >
                            {tab.description}
                        </ListItem>
                    ))}
                    
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        ))}
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
